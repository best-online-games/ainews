namespace $.$$ {
	export const $ainews_app_settings_font_size_value = () =>
		$mol_state_local.value('font_size_value') ? $mol_state_local.value('font_size_value') + 'rem' : '0.4rem'

	export class $ainews_app_settings extends $.$ainews_app_settings {
		@$mol_mem
		is_enable_auto_translate(next?: any) {
			if (next !== undefined) return $mol_state_local.value('is_enable_auto_translate', next)
			return $mol_state_local.value('is_enable_auto_translate') ?? true
		}

		@$mol_mem
		description_count_limiter_value(next?: any) {
			if (next !== undefined) return $mol_state_local.value('description_count_limiter_value', next)
			return $mol_state_local.value('description_count_limiter_value') ?? 256
		}

		@$mol_mem
		current_language_code(next?: any) {
			if (next !== undefined) return $mol_state_local.value('current_language', next)
			return $mol_state_local.value('current_language') ?? 'ru'
		}

		@$mol_mem
		current_language() {
			return (this.langs_list() as any)[this.current_language_code()]
		}

		@$mol_mem
		auto_open_spoiler_check_box_value(next?: any) {
			if (next !== undefined) return $mol_state_local.value('auto_open_spoiler_check_box_value', next)
			return (
				$mol_state_local.value('auto_open_spoiler_check_box_value') ?? super.auto_open_spoiler_check_box_value()
			)
		}

		@$mol_mem
		open_links_in_new_tabs_check_box_value(next?: any) {
			if (next !== undefined) return $mol_state_local.value('open_links_in_new_tabs_check_box_value', next)
			return (
				$mol_state_local.value('open_links_in_new_tabs_check_box_value') ??
				super.open_links_in_new_tabs_check_box_value()
			)
		}

		// @$mol_mem
		// font_size_value(next?:any){
		// 	if(next !== undefined)
		// 		return $mol_state_local.value("font_size_value", next);
		// 	return $mol_state_local.value("font_size_value") ?? super.font_size_value()
		// }

		deferredPrompt: any = null

		override auto() {
			super.auto()

			// Слушаем событие beforeinstallprompt
			window.addEventListener('beforeinstallprompt', e => {
				e.preventDefault()
				this.deferredPrompt = e
			})
		}

		@$mol_action
		install() {
			if (!this.deferredPrompt) {
				// Для ПК показываем инструкцию
				const isDesktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent,
				)

				if (isDesktop) {
					const isChrome = navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Edge')
					const isEdge = navigator.userAgent.includes('Edge')

					if (isChrome) {
						alert(
							'To install on PC:\n\n1. Click the install icon ⊕ in the address bar (right side)\n2. Or open Chrome menu (⋮) → "Install app..."',
						)
					} else if (isEdge) {
						alert(
							'To install on PC:\n\n1. Click the install icon ⊕ in the address bar (right side)\n2. Or open Edge menu (⋯) → Apps → "Install this site as an app"',
						)
					} else {
						alert('To install this app, please use Chrome or Edge browser')
					}
				} else {
					alert('App is already installed or not supported')
				}
				return
			}

			// Показываем системный диалог установки
			this.deferredPrompt.prompt()

			// Ждем результат
			this.deferredPrompt.userChoice.then((choiceResult: any) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the install prompt')
				}
				this.deferredPrompt = null
			})
		}
	}
}
