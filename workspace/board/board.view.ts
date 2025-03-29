namespace $.$$ {
	export class $pixelbattle_workspace_board extends $.$pixelbattle_workspace_board {
		@$mol_mem
		pixels(): readonly $pixelbattle_workspace_board_pixel[] {
			const size = 100
			const items: $pixelbattle_workspace_board_pixel[] = []
			for (let y = 0; y < size; y++) {
				for (let x = 0; x < size; x++) {
					items.push(this.Pixel(x + '_' + y))
				}
			}
			return items
		}

		Pixel(id: string) {
			return this.$.$pixelbattle_workspace_board_pixel.make({
				id: $mol_const(id),
			})
		}
	}
}
