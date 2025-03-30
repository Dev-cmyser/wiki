// Путь: mam/pixelbattle/workspace/board/board.view.ts
namespace $.$$ {
	export class $pixelbattle_workspace_board extends $.$pixelbattle_workspace_board {
		// Локальное хранение идентификатора доски
		_id: string = ''

		// Определяем метод id как функцию (MOLO‑паттерн)
		id(next?: string): string {
			if (next !== undefined) this._id = next
			return this._id || 'unknown'
		}

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
				// Передаём id как функцию-константу, ожидаемую в MOLO
				id: $mol_const(id),
			})
		}
	}
}
