namespace $.$$ {
	export class $ainews_app_feed_img extends $.$ainews_app_feed_img {
		dom_name() {
			return 'img' as const
		}

		attr() {
			const a = super.attr() as Record<string, string | undefined>
			const src = this.src()
			if (!src || (Array.isArray(src) && src.length === 0)) return {} as any

			return {
				...a,
				src: Array.isArray(src) ? src[0] : src,
				alt: this.alt() ?? '',
				loading: 'lazy',
				referrerpolicy: 'no-referrer',
				width: this.width() ? String(this.width()) : undefined,
				height: this.height() ? String(this.height()) : undefined,
			}
		}

		render() {
			const src = this.src()
			if (!src || (Array.isArray(src) && src.length === 0)) return null
			return super.render()
		}
	}
}
