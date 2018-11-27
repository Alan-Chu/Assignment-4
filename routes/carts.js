var express = require('express');
var router = express.Router();
var Cart = require('../models/Cart.js');

/* GET /carts listing. */
router.get('/', function(req, res, next) {
  Cart.find(function (err, carts) {
    if (err) return next(err);
    res.json(carts);
  });
});
/* POST /carts */
router.post('/', function(req, res, next) {
  Cart.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* PUT /carts/:id */
router.put('/:id', function(req, res, next) {
  Cart.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* DELETE /carts/:id */
// router.delete('/:id', function(req, res, next) {
//   Cart.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

router.get('/:name', function(req, res, next) {
  Cart.find({ name: req.params.name }, function (err, doc) {
    if (err) return next(err);
    if (JSON.stringify(doc)=='[]') {
      res.json({ Exist: false});
    } else {
      res.json({ Exist: true});
    }
    // res.json(JSON.stringify(doc));
    // res.json(req.body);
  });
});

router.delete('/:name', function (req, res) {
    Cart.remove({ name: req.params.name }, function (err) {
        if (err) res.send(err);
        res.json({ message: 'Successfully deleted !' });
    });
});
module.exports = router;
