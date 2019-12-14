var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send();
});

router.get('/payment', function(req, res, next) {
  res.render('index', { title: 'This is a Payment Service' });
});

module.exports = router;
