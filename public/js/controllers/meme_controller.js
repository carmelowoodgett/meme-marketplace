App.MemeController = Ember.ArrayController.extend({
	actions: {
		createMeme: function() {
			console.log("start of createMeme");
			var name = this.get('newName');
			console.log('name=',name);
			if(!name.trim()) { return; }

			var meme = this.store.createRecord('meme',{
				name: name
			});
			
			meme.save();

			
		}
	}
});

