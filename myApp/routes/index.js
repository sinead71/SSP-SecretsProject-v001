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
    console.log("yourName: " + req.body.yourName);
    console.log("yourPassword: " + req.body.yourPassword);
    if(req.body.yourName.trim() == "Sinead" && req.body.yourPassword.trim() == "2016"){
        res.render('mySecrets', {yourName:req.body.yourName, yourPassword:req.body.yourPassword});
    }
    else {
        res.render('wrongPerson');
    }
});

router.get('/mySecrets', function(req, res, next){
    res.render('mySecrets');
});

router.post('/mySecrets', function(req,res,next){
    if(req.body.newSecret == "I have a dog"){
        res.render('mySecrets', {newSecret:req.body.newSecret})
    }
    else{
        res.render('mySecrets')
    } 
});




module.exports = router;
