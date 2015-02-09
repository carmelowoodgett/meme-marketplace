App.Meme = DS.Model.extend({
	name: DS.attr('string'),
	desc: DS.attr('string'),
	price: DS.attr('string'),
	stockCount: DS.attr('number'),
	soldout: function() {
		return this.get('stockCount') < 1;
	}.property('stockCount'),
	url: function() {
		return '/product/'+this.get('id');
	}.property('id'),
	image: DS.attr('string')
});

App.Meme.FIXTURES = [
	{
		id: '1',
		name: "Success Kid",
		desc: "Toddler with clenched fist.",
		price: "$29.99",
		stockCount: 0,
		image: "images/success_kid.png"
	},
	{
		id: '2',
		name: "Most Interesting Man",
		desc: "The most insteresting main the world.",
		price: "$15.99",
		stockCount: 2,
		image: "images/most_interesting_man.png"
	},
	{
		id: '3',
		name: "You da MVP",
		desc: "Kevin Durant at the podium wiping tears",
		price: "$25.99",
		stockCount: 10,
		image: "images/durant_mvp.png"
	}];
