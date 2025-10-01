namespace $.$$ {
    export class $ainews_app_feed_img extends $.$ainews_app_feed_img {
        dom_name() {
            return 'img' as const
        }

        attr() {
            const a = super.attr() as Record<string, string | undefined>
            return {
                ...a,
                src: this.src() ?? '',
                alt: this.alt() ?? '',
                loading: 'lazy',
                referrerpolicy: 'no-referrer',
                width: this.width() ? String(this.width()) : undefined,
                height: this.height() ? String(this.height()) : undefined,
            }
        }

        visible() {
            const s = this.src()
            return !!s && s.trim().length > 0
        }
    }
}
