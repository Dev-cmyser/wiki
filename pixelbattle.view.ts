namespace $.$$ {
	export class $pixelbattle extends $.$pixelbattle {
		@$mol_mem
		theme_mode(next?: string) {
			console.log(next)
			if (next) {
				document.documentElement.setAttribute('mol_theme', next)
			}
			return document.documentElement.getAttribute('mol_theme') || 'light'
		}
	}
}
