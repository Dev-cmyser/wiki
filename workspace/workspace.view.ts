namespace $.$$ {
	export class $pixelbattle_workspace extends $.$pixelbattle_workspace {
		/**
		 * Храним идентификаторы всех boards в локальном состоянии.
		 */
		@$mol_mem
		board_ids(next?: string[]) {
			const key = 'pixelbattle_boards'
			let stored = $mol_state_local.value(key) as string[] | undefined

			// Если есть новое значение, сохраняем
			if (next !== undefined) {
				$mol_state_local.value(key, next)
				return next
			}

			// Если ещё ничего нет, инициализируем пустым массивом
			if (!stored) {
				stored = []
				$mol_state_local.value(key, stored)
			}

			return stored
		}

		/**
		 * Возвращает массив компонентов-досок для отображения
		 */
		@$mol_mem
		boards() {
			return this.board_ids().map(id => this.Board(id))
		}

		/**
		 * Создаёт новый board (с уникальным id) и добавляет в список
		 */
		createBoard() {
			const new_id = 'board_' + Math.random().toString(36).slice(2)
			this.board_ids([...this.board_ids(), new_id])
		}

		/**
		 * Создаём экземпляр компонента $pixelbattle_workspace_board
		 * для каждого id
		 */
		Board(id: string) {
			return this.$.$pixelbattle_workspace_board.make({
				id: $mol_const(id),
			})
		}
	}
}
