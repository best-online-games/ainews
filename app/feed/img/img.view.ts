namespace $.$$ {
	export class $ainews_app_feed_img extends $.$ainews_app_feed_img {
		dom_name() {
			return 'img' as const
		}

		attr() {
			const a = super.attr() as Record<string, string | undefined>
			const src = this.src()
			if (!src) return {} as any

			return {
				...a,
				src: src,
				alt: this.alt() ?? '',
				loading: 'lazy',
				referrerpolicy: 'no-referrer',
				width: this.width() ? String(this.width()) : undefined,
				height: this.height() ? String(this.height()) : undefined,
			}
		}

		render() {
			const src = this.src()
			if (!src) return null
			return super.render()
		}
	}
}
