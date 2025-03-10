namespace $.$$ {
	export class $wiki extends $.$wiki  {
		details( next?: string ): string {
			return this.Note_curr().details( next) ?? ''

		}

		note_id(){
			return this.$.$mol_state_arg.value("") ?? ''
		}
		 Note_curr(){
			return this.Note(this.note_id())

		 }

		@ $mol_mem_key
		Note ( id: string){
			return this.Store().sub('note=' + id, super.Note(id))
		}

		title(): string {
			return this.note_id().replaceAll('_', ' ') || super.title()
		}

	}
}
