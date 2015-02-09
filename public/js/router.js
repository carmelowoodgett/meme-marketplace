App.Router.map(function() {
	this.resource('memes');
	this.route('login');
	this.route('upload', {path: '/upload'});
	this.route('detail', {path: '/product/:id'});
});

App.MemesRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('meme');
	}
});

/*
App.UploadRoute = Ember.Route.extend({
	model: function() {
		return new Meme();
	}
});
*/

App.ProductRoute = Ember.Route.extend({
	model: function() {
		return this.store.find(id);
	}
});

App.LoginRoute = Ember.Route.extend({
	model: App.login
});

App.Login = DS.RESTAdapter.extend({
	username: DS.attr('string'),
	password: DS.attr('string')
});
App.LoginController = Ember.Controller.extend({
	actions: {
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
	}
});
