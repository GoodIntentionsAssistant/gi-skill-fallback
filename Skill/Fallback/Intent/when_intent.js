/**
 * When Fallback Intent
 */
const Intent = girequire('src/Intent/intent');

module.exports = class WhenIntent extends Intent {

	setup() {
		this.train(['when'], {
			collection: 'fallback'
		});
	}
	

	response() {
		return 'I am not sure when';
	}

}

