namespace $.$$ {
    export const $ainews_app_feed_proxy_url = "https://proxy.kinsle.ru/?link="
    export const $ainews_app_feed_translate_url = "https://proxy.kinsle.ru/?translate="

    export const $ainews_app_feed_links = {
        "tech": [
            "https://devblogs.microsoft.com/landingpage/",
            "https://blogs.unity3d.com/feed/",
            "https://www.opennet.ru/opennews/opennews_all.rss",
            "https://devblogs.microsoft.com/ifdef-windows/feed/",
            "https://www.zdnet.com/news/rss.xml",
            "https://habr.com/ru/rss/all/all/?fl=ru",
            "https://habr.com/ru/rss/news/"
        ],
        "shared": [
            "https://critter.blog/rss",
            "https://news.ycombinator.com/rss"
        ],
    }

    export class $ainews_app_feed extends $.$ainews_app_feed {

		translate_text(text:string) {
			return $mol_fetch.text( this.make_translate( text ) )
		}

        parse_rss( xml_doc: Document ) {
            return Array.from( xml_doc.querySelectorAll( "item" ) ).map( ( item: Element ) => {
                return {
                    "title": item.querySelector( "title" )?.textContent,
                    "pubDate": item.querySelector( "pubDate" )?.textContent,
                    "description": item.querySelector( "description" )?.textContent,
                    "link": item.querySelector( "link" )?.textContent,
                }
            } )
        }

        make_proxy( url: string ) {
            return $ainews_app_feed_proxy_url + url
        }
		make_translate( text: string ) {
            return $ainews_app_feed_translate_url + text
        }

        articles(category: string) {
			const selected_sources = this.sources(category).map((url_id: string) => ($ainews_app_feed_links as any)[category][ url_id ])
			return selected_sources.map((rss_link: string) => this.get_articles_from_sources(rss_link)).flat()
        }

		@$mol_mem_key
		get_articles_from_sources(source_url: string) {
			$mol_wire_solid()

            const xml_doc = $mol_fetch.xml( this.make_proxy( source_url ) )
            const articles_list = this.parse_rss(xml_doc)
            // console.log( articles_list )
			return articles_list.map(article => this.Article(article))
		}

		@$mol_mem
		is_enable_auto_translate(){
			return $mol_state_local.value("is_enable_auto_translate") ?? true
		}

		// articles fields
        article_title(article: any) {
			if(this.is_enable_auto_translate())
				return this.translate_text( article.title )
			else
            	return article.title
        }
		article_description(article: any) {
			if(this.is_enable_auto_translate())
				return this.translate_text( article.description )
			else
            	return article.description
        }
		article_link(article: any) {
            return article.link
        }

		article_translated_link(article: any) {
            return `https://translate.google.com/translate?sl=auto&tl=ru&hl=ru&u=${article.link}&client=webapp`
        }

		// sources fileds
		suggestions(category: any)  {
			return $ainews_app_feed_links[category as keyof typeof $ainews_app_feed_links]
        }
		@$mol_mem_key
		sources(id: string, next?: any){
			if(next !== undefined)
				return $mol_state_local.value(id, next);
			return $mol_state_local.value(id) ?? []
		}


		// tabs fields
		Categories() {
			return Object.keys($ainews_app_feed_links).map(category => this.Category_page(category))
		}
		category_title(category: any) {
            return category
        }
    }
}