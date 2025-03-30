// Путь: mam/pixelbattle/workspace/workspace.view.ts
namespace $.$$ {
	export class $pixelbattle_workspace extends $.$pixelbattle_workspace {
		@$mol_mem
		board_ids(next?: string[]): string[] {
			const key = 'pixelbattle_boards'
			let stored = $mol_state_local.value(key) as string[] | undefined
			if (next !== undefined) {
				$mol_state_local.value(key, next)
				return next
			}
			if (!stored) {
				stored = []
				$mol_state_local.value(key, stored)
			}
			return stored
		}

		@$mol_mem
		boards() {
			return this.board_ids().map(id => this.Board(id))
		}

		@$mol_action
		createBoard(next?: any) {
			const new_id = 'board_' + Math.random().toString(36).slice(2)
			console.log('id', new_id)
			this.board_ids([...this.board_ids(), new_id])
		}

		Board(id: string) {
			return this.$.$pixelbattle_workspace_board.make({
				// Передаём id как константу – ожидается функция, возвращающая строку
				id: $mol_const(id),
			})
		}
	}
}
