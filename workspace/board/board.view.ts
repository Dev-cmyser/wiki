namespace $.$$ {
	export class $pixelbattle_workspace_board extends $.$pixelbattle_workspace_board {
		id(): string {
			return this.toString() // или хранить реальный id, если нужно
		}

		/**
		 * Возвращаем массив пикселей.
		 * Можно менять size при необходимости (например, 50x50 или 100x100).
		 */
		@$mol_mem
		pixels(): readonly $pixelbattle_workspace_board_pixel[] {
			const size = 30
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
