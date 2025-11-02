namespace $.$$ {
	export class $bog_ainews_app_filters extends $.$bog_ainews_app_filters {
		@$mol_mem
		include_string_value(next?: any) {
			if (next !== undefined) return $mol_state_local.value('include_string_value', next) as any
			return $mol_state_local.value('include_string_value') ?? ''
		}
		@$mol_mem
		exclude_string_value(next?: any) {
			if (next !== undefined) return $mol_state_local.value('exclude_string_value', next) as any
			return $mol_state_local.value('exclude_string_value') ?? ''
		}

		include_string_clear_click() {
			$mol_state_local.value('include_string_value', null)
		}

		exclude_string_clear_click() {
			$mol_state_local.value('exclude_string_value', null)
		}
	}
}
