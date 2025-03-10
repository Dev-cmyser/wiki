namespace $ {
	export class $wiki_note extends $mol_store<{
		details: string
		change_at: string
	}> {

		details(next?: string){
			return this.value('details', next) ?? ''
		}

		@ $mol_mem
		chage(next?: $mol_time_moment){
			const str = this.value('change_at' , next && next.toString())
			return str ? new $mol_time_moment(str) : null
		}
	}

}
