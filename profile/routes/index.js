var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send();
});

router.get('/profile', function(req, res, next) {
  res.render('index', { title: 'This is a Profile Service' });
});

module.exports = router;
