/**
 * Who Fallback Intent
 */
const Intent = girequire('src/Intent/intent');

module.exports = class WhoIntent extends Intent {

	setup() {
		this.train(['who'], {
			collection: 'fallback'
		});
	}
	

	response() {
		return 'No idea who!';
	}

}
