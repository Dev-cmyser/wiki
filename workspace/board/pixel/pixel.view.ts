namespace $.$$ {
	export class $pixelbattle_workspace_board_pixel extends $.$pixelbattle_workspace_board_pixel {
		id(): string {
			return ''
		}

		@$mol_mem
		color(next?: string): string {
			const key = `pixel:${this.id()}`
			if (next !== undefined) {
				$mol_state_local.value(key, next)
			}
			const saved = $mol_state_local.value(key) as string
			return saved ?? '#FFFFFF'
		}

		cellStyle(): string {
			const bg = this.color()
			return `background-color:${bg}; width:8px; height:8px; border:1px solid #ccc;`
		}

		toggleColor(next?: null): null {
			if (next === undefined) return null
			const current = this.color()
			const newColor = current === '#FFFFFF' ? '#000000' : '#FFFFFF'
			this.color(newColor)
			return null
		}
	}
}
