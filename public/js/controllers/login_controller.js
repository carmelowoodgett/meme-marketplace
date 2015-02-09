App.LoginController = Ember.Controller.extend({
	login: function() {
		$.post('/login', {
			username: this.get('username'),
			password: this.get('password')
		}).then(function() {
			console.log("logged in");
		}, function() {
			console.log("log in failed");
		}.bind(this));
	}
});

