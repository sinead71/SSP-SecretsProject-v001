var express = require('express');
var router = express.Router();

var allSecrets = [];
var secretsNumber = 1;


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next){
    res.render('mySecrets', {allSecrets: allSecrets});
});

router.post('/index', function(req, res, next){
    console.log("yourName: " + req.body.yourName);
    console.log("yourPassword: " + req.body.yourPassword);
    if(req.body.yourName.trim() == "Sinead" && req.body.yourPassword.trim() == "2016"){
        res.render('mySecrets', {yourName:req.body.yourName, yourPassword:req.body.yourPassword, allSecrets: allSecrets});
    }
    else {
        res.render('wrongPerson');
    }
});

router.post('/createSecret', function(req,res,next){
       
    var secret = {};
    secret.id = secretsNumber++;
    secret.date = new Date();
    secret.secret = req.body.newSecret;
    allSecrets.push(secret);
    
    console.log(allSecrets);  
    
    res.render('mySecrets', {allSecrets: allSecrets}); 
});


router.get('/deleteSecret/:id', function(req, res, next){
    for(x in allSecrets){
        if(req.params.id == allSecrets[x].id){
            allSecrets.splice(x, 1);
        }  
        
    };
    res.render('mySecrets', {allSecrets: allSecrets});
});



module.exports = router;
