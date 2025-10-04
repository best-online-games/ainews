namespace $.$$ {
	export const $ainews_app_feed_proxy_url = 'https://proxy.kinsle.ru/proxy'
	export const $ainews_app_feed_translate_url = 'https://proxy.kinsle.ru/translate'
	export const $ainews_app_feed_summary_url = 'https://proxy.kinsle.ru/summary'

	export class $ainews_app_feed extends $.$ainews_app_feed {
		@$mol_mem_key
		translate_text(text: string, to_lang: string = this.app_settings().current_language()) {
			const payload = new URLSearchParams({
				text: text.substring(0, 512),
				to_lang,
			})
			return $mol_fetch.text($ainews_app_feed_translate_url + '?' + payload.toString())
		}
		summary_text(text: string, to_lang: string = this.app_settings().current_language()) {
			const payload = new URLSearchParams({
				text: text.substring(0, 1024),
				to_lang,
			})
			return $mol_fetch.text($ainews_app_feed_summary_url + '?' + payload.toString())
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

				// Сохраняем в localStorage
				$mol_state_local.value(`img_cache_${url}`, base64)

				return base64
			} catch (e) {
				return url
			}
		}

		make_proxy(url: string) {
			return $ainews_app_feed_proxy_url + url
		}
		make_translate(text: string) {
			return $ainews_app_feed_translate_url + decodeURIComponent(text.substring(0, 256))
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
					return JSON.parse(cached as string)
				} catch (e) {
					// Если не удалось распарсить, продолжаем загрузку
				}
			}

			const payload = new URLSearchParams({
				link: source_url,
			})
			const xml_doc = $mol_fetch.xml($ainews_app_feed_proxy_url + '?' + payload.toString())
			const articles_list = this.parse_rss(xml_doc)

			// Сохраняем в localStorage
			$mol_state_local.value(`feed_cache_${source_url}`, JSON.stringify(articles_list))

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
			function strip_html_tags(html:string){
				let doc = new DOMParser().parseFromString(html, 'text/html');
				return doc.body.textContent || "";
			}

			const description_count_limiter_value = this.app_settings().description_count_limiter_value()
			const description_without_html_tags = strip_html_tags(article.description)
			const description_limited = description_without_html_tags.substring(0, description_count_limiter_value)

			if(this.force_summary(article)) {
				return this.summary_text(description_without_html_tags)
			}

			const should_translate =
				(this.app_settings().is_enable_auto_translate() && this.is_need_translate(description_without_html_tags)) ||
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
			if (next) {
				this.force_translate(article, true)
			}
			return next
		}

		@$mol_action
		summary_description_click(article:any, next:any) {
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
	}

	export class $ainews_app_feed_title extends $.$ainews_app_feed_title {
		font_size_title() {
			return $ainews_app_settings_font_size_value() //$mol_state_local.value("font_size_value") ?? 7 //super.font_size_value()
		}
	}
}
