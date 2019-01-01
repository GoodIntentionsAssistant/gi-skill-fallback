/**
 * Confirm Fallback Intent
 */
const Intent = girequire('src/Intent/intent');

module.exports = class ConfirmIntent extends Intent {

	setup() {
		this.train([
			'@App.Basics.Entity.Confirm'
		], {
			collection: 'fallback'
		});

		this.parameter('confirm', {
			name: 'Confirm',
			entity: 'App.Basics.Entity.Confirm'
		});
	}

	response(request) {
		var confirm = request.parameters.value('confirm');
		var output = 'Okay!';
		
		if(confirm == 'yes') {
			output = 'Not sure what you are saying yes to.';
		}

		return output;
	}

}
