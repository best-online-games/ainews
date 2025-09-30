namespace $.$$ {
	export class $ainews_app_settings extends $.$ainews_app_settings {
		
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


		@$mol_mem
		is_enable_auto_translate(next?:any){
			if(next !== undefined)
				return $mol_state_local.value("is_enable_auto_translate", next);
			return $mol_state_local.value("is_enable_auto_translate") ?? true
		}
		
	}
}