var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/secrets', function(req, res, next){
    res.render('mySecrets', {title: 'Secrets'})
});

module.exports = router;
