var express = require('express');
var router = express.Router();
var Commodity = require('../models/Commodity.js');
var Cart = require('../models/Cart.js');

/* GET /commodity listing. */
router.get('/', function(req, res, next) {
  Commodity.find(function (err, commodity) {
    if (err) return next(err);
    res.json(commodity);
  });
});
/* POST /commodity */
router.post('/', function(req, res, next) {
  Commodity.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* PUT /commodity/:id */
router.put('/:id', function(req, res, next) {
  Commodity.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* DELETE /commodity/:id */
// router.delete('/:id', function(req, res, next) {
//   Commodity.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/**/
router.get('/:name', function(req, res, next) {
  Commodity.find({ name: req.params.name }, function (err, commodity) {
    if (err) return next(err);
    res.json(commodity);
  });
});

router.get('Cart/:name', function(req, res, next) {
  Cart.find({ name: req.params.name }, function (err, cart) {
    if (err) return next(err);
    res.json(cart);
  });
});

router.delete('/:name', function (req, res) {
    Commodity.deleteOne({ name: req.params.name }, function (err, commodity) {
        if (err) res.send(err);
        res.json({ Failed: false, message: 'Successfully deleted!' });
    });

});
module.exports = router;
