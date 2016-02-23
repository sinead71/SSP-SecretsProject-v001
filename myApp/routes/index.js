var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next){
    res.render('mySecrets');
});

router.post('/index', function(req, res, next){
    if(req.body.yourPassword == 2016 && req.body.youName == "Sinead"){
        res.render('mySecrets', {
            yourName:req.body.yourName,
            yourPassword:req.body.yourPassword
        });
    }
    else {
        res.redirect('/wrongPerson');
    }
});

router.get('/secrets', function(req, res, next){
    res.render('mySecrets');
});




module.exports = router;
