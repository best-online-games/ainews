namespace $.$$ {
	export const $bog_ainews_app_favorites_key = 'favorites'

	export class $bog_ainews_app_favorites extends $.$bog_ainews_app_favorites {
		Categories() {
			return [this.Category_page('favorites')]
		}

		articles(category: string) {
			const articles = this.app_source().custom_sources($bog_ainews_app_favorites_key)
			const filtered_articles = this.filter_articles(articles)
			return filtered_articles.map((article: any) => this.Article(article))
		}

		add_post(post: any) {
			const current_list = this.app_source().custom_sources($bog_ainews_app_favorites_key)

			// skip if alrady added
			if (current_list.includes(post)) {
				return
			}
			const new_list = [...current_list, post]
			this.app_source().custom_sources($bog_ainews_app_favorites_key, new_list)
		}

		remove_post(id: string) {
			const current_list = this.app_source().custom_sources($bog_ainews_app_favorites_key)
			const new_list = current_list.filter((item: any) => item != id)
			this.app_source().custom_sources($bog_ainews_app_favorites_key, new_list)
		}

		@$mol_mem
		posts() {
			return this.app_source().custom_sources($bog_ainews_app_favorites_key)
		}

		filter_articles(articles_list: any) {
			if (this.search_word().trim() !== '')
				return articles_list.filter((item: any) => new RegExp(this.search_word(), 'ig').test(item.title))
			return articles_list
		}
	}
}
