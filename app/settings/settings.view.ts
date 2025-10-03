namespace $.$$ {
	export class $ainews_app_settings extends $.$ainews_app_settings {

		@$mol_mem
		is_enable_auto_translate(next?:any){
			if(next !== undefined)
				return $mol_state_local.value("is_enable_auto_translate", next);
			return $mol_state_local.value("is_enable_auto_translate") ?? true
		}

		@$mol_mem
		description_count_limiter_value(next?:any){
			if(next !== undefined)
				return $mol_state_local.value("description_count_limiter_value", next);
			return $mol_state_local.value("description_count_limiter_value") ?? 256
		}

		@$mol_mem
		current_language_code(next?:any){
			if(next !== undefined)
				return $mol_state_local.value("current_language", next);
			return $mol_state_local.value("current_language") ?? "ru"
		}

		@$mol_mem
		current_language() {
			return (this.langs_list() as any)[this.current_language_code()]
		}
	}
}