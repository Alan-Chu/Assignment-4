var mongoose = require('mongoose');
var CartSchema = new mongoose.Schema({
  name: String,
  price: Number,
  amount: Number,
});
// var CommodityScheme = new mongoose.Schema({
// 	name: String,
// 	price: Number,
// 	picture: String,
// });
module.exports = mongoose.model('Cart', CartSchema);
