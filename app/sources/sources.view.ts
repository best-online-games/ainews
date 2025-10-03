namespace $.$$ {
	export class $ainews_app_sources extends $.$ainews_app_sources {
		
		// tabs fields
		Categories() {
			return Object.keys($ainews_app_feed_links).map(category => this.Category_page(category))
		}
		category_title(category: any) {
			return category
		}
		// sources fileds
		suggestions(category: any)  {
			return $ainews_app_feed_links[category as keyof typeof $ainews_app_feed_links]
		}

		// @$mol_mem_key
		sources(id: string, next?: any){
			if(next !== undefined)
				return $mol_state_local.value(id, next);
			return $mol_state_local.value(id) ?? []
		}

		@$mol_mem_key
		custom_sources(id: string, next?: any){
			if(next !== undefined)
				return $mol_state_local.value(id, next);
			return $mol_state_local.value(id) ?? []
		}
		
		@$mol_mem
		my_custom_sources()
		{
			return this.custom_sources("my_rss_list")
		}

		My_rss_feeds() {
			const my_rss = $mol_state_local.value("my_rss_list") as string[] ?? []
			return my_rss.map((category: any) => this.My_rss_item(category))
		}

		add_custom_feed_click() {
			const new_url = this.Add_feed_string().value()
			const current_list = this.custom_sources("my_rss_list")
			// skip if alrady added
			if(current_list.includes(new_url)) {
				return
			}
			if(new_url !== null && new_url.trim() !== "" ) {
				if(new_url.includes("https://") == false && new_url.includes("http://") == false) {
					throw "Need valid http url!"
				}
			  }
			const new_list = [...current_list, new_url]
			this.custom_sources("my_rss_list", new_list)
			this.Add_feed_string().value("")
		}
		
		@$mol_mem_key
		my_rss_title(id: string){
			return id
		}

		delete_custom_feed_click(id: string) {
			const current_list = this.custom_sources("my_rss_list")
			const new_list = current_list.filter((item:any) => item != id)
			this.custom_sources("my_rss_list", new_list)
		}
	}
}