/**
 * How Fallback Intent
 */
const Intent = girequire('src/Intent/intent');

module.exports = class HowIntent extends Intent {

	setup() {
		this.train(['how'], {
			collection: 'fallback'
		});
	}
	
	response() {
		return 'How does anything happen?';
	}

}


