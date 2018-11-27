var mongoose = require('mongoose');
var CommodityScheme = new mongoose.Schema({
	name: String,
	price: Number,
	note: String,
});
module.exports = mongoose.model('Commodity', CommodityScheme);