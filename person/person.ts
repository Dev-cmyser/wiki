namespace $ {
	export class $pixelbattle_person extends $hyoo_crus_entity.with({
		Meets: $hyoo_crus_list_ref_to(() => $pixelbattle_meet),
	}) {
		@$mol_action
		meet_make() {
			const meet = this.Meets(null)!.make({ '': $hyoo_crus_rank_read })!
			meet.Owner(null)!.val(this.land().auth().lord())
			return meet
		}
	}
}
