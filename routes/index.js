var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Cart' });
});

router.get('/insertOrDeleteCommodity', function(req, res, nest) {
	res.render('insertOrDeleteCommodity', { title: 'insertCommodity'})
});

module.exports = router;
