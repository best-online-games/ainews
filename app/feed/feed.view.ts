namespace $.$$ {
	export const $bog_ainews_app_feed_proxy_url = 'https://proxy.kinsle.ru/proxy'
	export const $bog_ainews_app_feed_translate_url = 'https://proxy.kinsle.ru/translate'
	export const $bog_ainews_app_feed_summary_url = 'https://proxy.kinsle.ru/summary'

	export class $bog_ainews_app_feed extends $.$bog_ainews_app_feed {
		@$mol_mem_key
		translate_text(text: string, to_lang: string = this.app_settings().current_language()) {
			if (!navigator.onLine) return text
			const payload = new URLSearchParams({
				text: text.substring(0, 512),
				to_lang,
			})
			return $mol_fetch.text($bog_ainews_app_feed_translate_url + '?' + payload.toString())
		}
		summary_text(text: string, to_lang: string = this.app_settings().current_language()) {
			if (!navigator.onLine) return text
			const payload = new URLSearchParams({
				text: text.substring(0, 1024),
				to_lang,
			})
			return $mol_fetch.text($bog_ainews_app_feed_summary_url + '?' + payload.toString())
		}

		parse_rss(xml_doc: Document) {
			return Array.from(xml_doc.querySelectorAll('item')).map((item: Element) => {
				const enclosure = item.querySelector('enclosure')
				const mediaContent = item.querySelector('media\\:content, content')
				const mediaThumbnail = item.querySelector('media\\:thumbnail, thumbnail')
				const description = item.querySelector('description')?.textContent || ''

				let image_src =
					enclosure?.getAttribute('url') ||
					mediaContent?.getAttribute('url') ||
					mediaThumbnail?.getAttribute('url') ||
					''

				// Если нет картинки в RSS тегах, ищем в description HTML
				if (!image_src && description) {
					// Ищем <img src="...">
					const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i)
					if (imgMatch) {
						image_src = imgMatch[1]
					}
				}

				// Если всё ещё нет картинки, ищем ссылки на картинки в <a href="...">
				if (!image_src && description) {
					const linkMatch = description.match(/<a[^>]+href=["']([^"']+\.(jpg|jpeg|png|gif|webp))["']/i)
					if (linkMatch) {
						image_src = linkMatch[1]
					}
				}

				return {
					title: item.querySelector('title')?.textContent,
					pubDate: item.querySelector('pubDate')?.textContent,
					description: description,
					link: item.querySelector('link')?.textContent,
					image_src: image_src,
				}
			})
		}

		@$mol_mem_key
		cache_image(url: string) {
			if (!url) return url

			// Проверяем кеш
			const cached = $mol_state_local.value(`img_cache_${url}`)
			if (cached) return cached as string

			// Загружаем синхронно через $mol_fetch
			try {
				$mol_wire_solid()
				const response = $mol_fetch.response(url)
				const arrayBuffer = response.buffer()

				// Конвертируем ArrayBuffer в base64
				const buffer = new Uint8Array(arrayBuffer)
				let binary = ''
				const len = buffer.length
				for (let i = 0; i < len; i++) {
					binary += String.fromCharCode(buffer[i])
				}
				const base64 = 'data:image/jpeg;base64,' + btoa(binary)

				// Очищаем старые изображения (оставляем только 30)
				const cache_list_key = 'img_cache_list'
				const cache_list = ($mol_state_local.value(cache_list_key) as string[]) || []

				// Добавляем новый URL в начало списка
				const updated_list = [url, ...cache_list.filter(u => u !== url)].slice(0, 30)

				// Удаляем изображения, которые вышли за пределы лимита
				cache_list.forEach(old_url => {
					if (!updated_list.includes(old_url)) {
						$mol_state_local.value(`img_cache_${old_url}`, null)
					}
				})

				// Обновляем список
				$mol_state_local.value(cache_list_key, updated_list)

				// Сохраняем в localStorage
				$mol_state_local.value(`img_cache_${url}`, base64)

				return base64
			} catch (e) {
				return url
			}
		}

		make_proxy(url: string) {
			return $bog_ainews_app_feed_proxy_url + url
		}
		make_translate(text: string) {
			return $bog_ainews_app_feed_translate_url + decodeURIComponent(text.substring(0, 256))
		}

		articles(category: string) {
			const selected_sources = this.sources(category).map(
				(url_id: string) => (this.app_source().runtime_links() as any)[category][url_id] ?? url_id,
			)
			return selected_sources.map((rss_link: string) => this.get_articles_from_sources(rss_link)).flat()
		}

		@$mol_mem_key
		request_articles_from_sources(source_url: string) {
			$mol_wire_solid()

			// Пробуем загрузить из localStorage
			const cached = $mol_state_local.value(`feed_cache_${source_url}`)
			if (cached) {
				try {
					const cache_data = JSON.parse(cached as string)
					const cache_time = cache_data.timestamp || 0
					const now = Date.now()
					const cache_ttl = 60 * 60 * 1000 // 1 час в миллисекундах

					// Если кеш свежий, возвращаем его
					if (now - cache_time < cache_ttl) {
						return cache_data.articles
					}
				} catch (e) {
					// Если не удалось распарсить, продолжаем загрузку
				}
			}

			const payload = new URLSearchParams({
				link: source_url,
			})
			const xml_doc = $mol_fetch.xml($bog_ainews_app_feed_proxy_url + '?' + payload.toString())
			const articles_list = this.parse_rss(xml_doc)

			// Очищаем старые фиды (оставляем только 20)
			const feed_cache_list_key = 'feed_cache_list'
			const feed_cache_list = ($mol_state_local.value(feed_cache_list_key) as string[]) || []

			// Добавляем новый URL в начало списка
			const updated_feed_list = [source_url, ...feed_cache_list.filter(u => u !== source_url)].slice(0, 20)

			// Удаляем фиды, которые вышли за пределы лимита
			feed_cache_list.forEach(old_url => {
				if (!updated_feed_list.includes(old_url)) {
					$mol_state_local.value(`feed_cache_${old_url}`, null)
				}
			})

			// Обновляем список
			$mol_state_local.value(feed_cache_list_key, updated_feed_list)

			// Сохраняем в localStorage с временной меткой
			const cache_data = {
				timestamp: Date.now(),
				articles: articles_list,
			}
			$mol_state_local.value(`feed_cache_${source_url}`, JSON.stringify(cache_data))

			return articles_list
		}

		@$mol_mem_key
		get_articles_from_sources(source_url: string) {
			const articles_list = this.request_articles_from_sources(source_url)
			const filtered_list = this.filter_articles(articles_list)
			return filtered_list.map((article: any) => this.Article(article))
		}

		filter_articles(articles_list: any) {
			const include_string_value = this.app_filters().include_string_value()
			const exclude_string_value = this.app_filters().exclude_string_value()

			if (include_string_value !== null && include_string_value.trim() !== '') {
				const rules = include_string_value
					.split(',')
					.map(rule => rule.trim())
					.filter(rule => rule.trim() != '')
				articles_list = articles_list.filter((article: any) => {
					return rules.some(rule => {
						return new RegExp(rule, 'ig').test(article.title)
					})
				})
			}

			if (exclude_string_value !== null && exclude_string_value.trim() !== '') {
				const rules = exclude_string_value
					.split(',')
					.map(rule => rule.trim())
					.filter(rule => rule.trim() != '')
				console.log({ rules, exclude_string_value })

				articles_list = articles_list.filter((article: any) => {
					return (
						rules.some(rule => {
							console.log({ rule })
							return new RegExp(rule, 'ig').test(article.title)
						}) == false
					)
				})
			}

			if (this.search_word().trim() !== '')
				return articles_list.filter((item: any) => new RegExp(this.search_word(), 'ig').test(item.title))

			return articles_list
		}

		// calculate persent of cyrilic text on text
		is_need_translate(text: string) {
			function remove_from_string(words: string[], str: string) {
				return words.reduce((result, word) => result.replace(new RegExp(word, 'gi'), ''), str)
			}

			const cyrillic_pattern = /^\p{Script=Cyrillic}+$/u

			let text_without_numbers = text.replace(/[\p{P}\d]+/gu, '')
			text_without_numbers = remove_from_string(
				[
					'KDE',
					'Plasma',
					'linux',
					'bsd',
					'router',
					'project',
					'Android',
					'Chrome',
					'Postgre',
					'elementary',
					'Ubuntu',
					' ',
				],
				text_without_numbers,
			)
			const russian_chars = Array.from(text_without_numbers).filter(char => cyrillic_pattern.test(char)).length
			const length = text_without_numbers.length

			const persent_of_cyrilic_in_text = (russian_chars / length) * 100
			return persent_of_cyrilic_in_text < 55
		}

		@$mol_mem_key
		force_translate(article: any, next?: boolean) {
			if (next !== undefined) return next
			return false
		}

		// articles fields
		@$mol_mem_key
		article_title(article: any) {
			const should_translate =
				(this.app_settings().is_enable_auto_translate() && this.is_need_translate(article.title)) ||
				this.force_translate(article)
			if (should_translate) {
				return this.translate_text(article.title)
			}
			return article.title
		}

		@$mol_mem_key
		article_description(article: any) {
			function strip_html_tags(html: string) {
				let doc = new DOMParser().parseFromString(html, 'text/html')
				return doc.body.textContent || ''
			}

			const description_count_limiter_value = this.app_settings().description_count_limiter_value()
			const description_without_html_tags = strip_html_tags(article.description)
			const description_limited = description_without_html_tags.substring(0, description_count_limiter_value)

			if (this.force_summary(article)) {
				return this.summary_text(description_without_html_tags)
			}

			const should_translate =
				(this.app_settings().is_enable_auto_translate() &&
					this.is_need_translate(description_without_html_tags)) ||
				this.force_translate(article)
			if (should_translate) {
				return this.translate_text(description_without_html_tags)
			} else {
				return description_limited
			}
		}

		article_link(article: any) {
			return article.link
		}

		article_image_src(article: any) {
			const src = article.image_src || ''
			if (src.trim().length === 0) return []

			// Проверяем, что это изображение, а не видео
			if (src.includes('.mp4') || src.includes('/mp4/') || src.includes('format/mp4')) {
				return []
			}

			// Возвращаем закешированную версию или загружаем
			const cached = this.cache_image(src)
			return cached ? [cached] : []
		}

		article_translated_link(article: any) {
			return `https://translate.google.com/translate?sl=auto&tl=ru-RU&u=${encodeURIComponent(article.link)}`
		}

		article_translate_enable() {
			return !this.app_settings().is_enable_auto_translate()
		}

		translate_click(article: any, next?: Event) {
			if (next && navigator.onLine) {
				this.force_translate(article, true)
			}
			return next
		}

		@$mol_action
		summary_description_click(article: any, next: any) {
			if (next) {
				this.force_summary(article, true)
			}
			return next
		}
		@$mol_mem_key
		force_summary(article: any, next?: boolean) {
			if (next !== undefined) return next
			return false
		}

		// sources fileds
		@$mol_mem_key
		sources(id: string, next?: any) {
			if (next !== undefined) return $mol_state_local.value(id, next)
			return $mol_state_local.value(id) ?? []
		}

		// tabs fields
		Categories() {
			// console.log({aa: this.app_source().runtime_links()})
			return Object.keys(this.app_source().runtime_links())
				.filter(
					category =>
						$mol_state_local.value(category) != null &&
						($mol_state_local.value(category) as string[]).length > 0,
				)
				.map(category => this.Category_page(category))
		}
		category_title(category: any) {
			return category
		}

		@$mol_mem_key
		openned_post(id: any, next?: any) {
			if (this.app_settings().auto_open_spoiler_check_box_value()) {
				return true
			}

			if (next !== undefined) return next
			return false
		}

		@$mol_mem_key
		open_in_new_tab(id: any, next?: any) {
			if (this.app_settings().open_links_in_new_tabs_check_box_value()) {
				return '_blank'
			}
			return '_self'
		}

		body() {
			if (this.Categories().length == 0) {
				return [this.Welcome_block()]
			} else {
				return [this.Hot_fix(), this.Tabs()]
			}
		}

		@$mol_mem
		Spoiler_tools(id: any) {
			const obj = new this.$.$mol_view()
			obj.sub = () => [
				this.Article_link(id),
				this.Article_translated_link(id),
				this.is_need_translate(id.title) ? this.Article_translate_text(id) : null,
				this.Favorite(id),
			]
			return obj
		}

		@$mol_mem_key
		base_checked(id: any, next?: any) {
			if (next !== undefined) {
				if (next == true) this.app_favorites().add_post(id)
				if (next == false) this.app_favorites().remove_post(id)
				return next
			}
			return this.app_favorites().posts().includes(id)
		}

		@$mol_action
		summary_all_click(next?: Event) {
			if (next) {
				this.summary_all_showed(!this.summary_all_showed())
			}
			return next
		}

		@$mol_action
		summary_all_close_click(next?: Event) {
			if (next) {
				this.summary_all_showed(false)
			}
			return next
		}

		@$mol_mem
		summary_all_result() {
			if (!this.summary_all_showed()) return ''

			const all_categories = Object.keys(this.app_source().runtime_links()).filter(
				category =>
					$mol_state_local.value(category) != null &&
					($mol_state_local.value(category) as string[]).length > 0,
			)

			const raw_articles: any[] = []
			all_categories.forEach((category: string) => {
				const selected_sources = this.sources(category).map(
					(url_id: string) => (this.app_source().runtime_links() as any)[category][url_id] ?? url_id,
				)

				selected_sources.forEach((rss_link: string) => {
					const articles_from_source = this.request_articles_from_sources(rss_link)
					const filtered = this.filter_articles(articles_from_source)
					raw_articles.push(...filtered)
				})
			})

			const texts = raw_articles
				.map((article: any) => {
					const title = article.title || ''
					const description = article.description || ''
					return `${title}\n${description}`.substring(0, 500)
				})
				.join('\n\n')

			if (!navigator.onLine) return 'No internet connection'
			if (texts.length === 0) return 'No news for summary'

			return this.summary_text(texts.substring(0, 10000))
		}

		@$mol_action
		category_summary_click(category: string, next?: Event) {
			if (next) {
				this.category_summary_showed(category, !this.category_summary_showed(category))
			}
			return next
		}

		@$mol_action
		category_summary_close_click(category: string, next?: Event) {
			if (next) {
				this.category_summary_showed(category, false)
			}
			return next
		}

		@$mol_mem_key
		category_summary_text(category: string, text: string) {
			if (!navigator.onLine) return text
			const to_lang = this.app_settings().current_language()

			const payload = new URLSearchParams({
				text: text.substring(0, 1000),
				to_lang,
			})

			const url = $bog_ainews_app_feed_summary_url + '?' + payload.toString()
			const result = $mol_fetch.text(url)

			return result
		}

		@$mol_mem_key
		category_summary_result(category: string): string {
			if (!this.category_summary_showed(category)) return ''

			const selected_sources = this.sources(category).map(
				(url_id: string) => (this.app_source().runtime_links() as any)[category][url_id] ?? url_id,
			)

			const raw_articles: any[] = []
			selected_sources.forEach((rss_link: string) => {
				const articles_from_source = this.request_articles_from_sources(rss_link)
				const filtered = this.filter_articles(articles_from_source)
				raw_articles.push(...filtered)
			})

			const texts = raw_articles
				.map((article: any) => {
					const title = article.title || ''
					const description = article.description || ''
					return `${title}\n${description}`.substring(0, 500)
				})
				.join('\n\n')

			if (!navigator.onLine) return 'No internet connection'
			if (texts.length === 0) return 'No news for summary'

			return this.category_summary_text(category, texts)
		}
	}

	export class $bog_ainews_app_feed_title extends $.$bog_ainews_app_feed_title {
		font_size_title() {
			return $bog_ainews_app_settings_font_size_value() //$mol_state_local.value("font_size_value") ?? 7 //super.font_size_value()
		}
	}
}
