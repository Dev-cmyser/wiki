namespace $ {
	export class $pixelbattle_workspace_board extends $mol_list {
		@$mol_mem // make this property reactive and memoized
		pixels(): readonly $pixelbattle_workspace_board_pixel[] {
			const size = 500
			const items: $pixelbattle_workspace_board_pixel[] = []
			// Create size*size pixels (for a 500x500 board)
			for (let y = 0; y < size; y++) {
				for (let x = 0; x < size; x++) {
					// Create a Pixel component for coordinates (x, y)
					items.push(
						$pixelbattle_workspace_board_pixel.make({
							id: () => `${x}_${y}`, // give each pixel a unique id like "10_25"
						}),
					)
				}
			}
			return items
		}
	}
}
