namespace $ {
	const { rem } = $mol_style_unit

	$mol_style_define($ainews_app_feed, {
		// Стили для карточек новостей (Article)
		Article: {
			background: {
				color: $mol_theme.card,
			},
			border: {
				radius: rem(0.75),
			},
			padding: rem(0.5),
			margin: {
				bottom: rem(0.7),
			},
			boxShadow: '0 2px 8px rgba(0,0,0,0.1)',

			':hover': {
				boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
				transform: 'translateY(-2px)',
				transition: 'all 0.2s ease',
			},
		},

		/*
		// Заголовки новостей (Article_title)
		Article_title: {
			font: {
				// size: rem(1.125),
				weight: 600,
			},
			// lineHeight: '1.4',
			// margin: {
			// 	bottom: rem(0.5),
			// },
			color: $mol_theme.text,
		},
		*/
		// Описание/превью (Article_description)
		Article_description: {
			font: {
				size: rem(0.875),
			},
			lineHeight: '1.5',
			// color: $mol_theme.shade,
			color: $mol_theme.text,
			margin: {
				bottom: rem(1),
			},
		},

		// Ссылки на статьи (Article_link, Article_translated_link)
		Article_link: {
			font: {
				size: rem(0.75),
			},
			color: $mol_theme.shade,
			textDecoration: 'none',

			':hover': {
				textDecoration: 'underline',
			},
		},

		Article_translated_link: {
			font: {
				size: rem(0.75),
			},
			color: $mol_theme.shade,
			textDecoration: 'none',
			margin: {
				left: rem(1),
			},

			':hover': {
				textDecoration: 'underline',
			},
		},

		Article_translate_text: {
			font: {
				size: rem(0.75),
			},
			color: $mol_theme.shade,
			// textDecoration: 'none',
			margin: {
				left: rem(1),
			},

			':hover': {
				textDecoration: 'underline',
			},
		},

		Article_description_summary_button: {
			color: $mol_theme.shade,
		},

		Category_summary_content: {
			maxWidth: '65vw',
			maxHeight: '80vh',
			width: 'auto',
			height: 'auto',
		},

		Category_summary_text: {
			wordWrap: 'break-word',
			overflowWrap: 'break-word',
			whiteSpace: 'pre-wrap',
		},

		Summary_all_content: {
			maxWidth: '65vw',
			maxHeight: '80vh',
			width: 'auto',
			height: 'auto',
		},

		Summary_all_text: {
			wordWrap: 'break-word',
			overflowWrap: 'break-word',
			whiteSpace: 'pre-wrap',
		},
	})
}
