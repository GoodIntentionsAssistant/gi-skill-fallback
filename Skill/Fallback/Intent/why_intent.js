/**
 * Why Fallback Intent
 */
const Intent = girequire('src/Intent/intent');

module.exports = class WhyIntent extends Intent {

	setup() {
		this.train(['why'], {
			collection: 'fallback'
		});
	}
	

	response() {
		return 'Everyone asks why';
	}

}

