var express = require('express');
var router = express.Router();

//Creating the array where each new secret will be stored so they
// can be modified(deleted and read through a ul) later.
var allSecrets = [];
//Setting the unique id for each secret that will be in the array.
var secretsNumber = 1;

//Opening the index page when there is nothing specified in the url
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Opening the index jade page again but this time as a post. This stops 
//someone from getting in to view the secrets page without filling in 
//the correct username and password. 
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/index', function(req, res, next){
    res.render('mySecrets', {allSecrets: allSecrets});
});

//When the username(Sinead) and password(2016) is submitted from the index page
//then the mySecrets page is sent back. Or if the wrong name/password typed
//in the page wrongPerson will be brought up. The mySecrets page will only open
// if you write in the correct credentials.
router.post('/index', function(req, res, next){
    //getting whet is being written with in the username form and printing it in the cmd promt/git shell
    console.log("yourName: " + req.body.yourName);
    //What is being written in the password form is printed in git shell
    console.log("yourPassword: " + req.body.yourPassword);
    if(req.body.yourName.trim() == "Sinead" && req.body.yourPassword.trim() == "2016"){
        res.render('mySecrets', {yourName:req.body.yourName, yourPassword:req.body.yourPassword, allSecrets: allSecrets});
    }
    else {
        res.render('wrongPerson');
    }
});

//When a new secret is added to the form and submitted then the createSecret jade
//file is called and a secret object is created. 
router.post('/createSecret', function(req,res,next){
    //new secret object   
    var secret = {};
    //setting the new secrets id. It increments so that each new secret 
    //will have a different number from the last
    secret.id = secretsNumber++;
    //Giving the secret a date value which is the time and day od when it was created.
    secret.date = new Date();
    //Telling the secret that it's value is set to what ever is written into the 
    //newsecret form before it's submitted.
    secret.secret = req.body.newSecret;
    //each secret is then added to the array where they are stored.
    allSecrets.push(secret);
    
    //this prints all of the secrets in the git shell with it's
    //id number, date and value
    console.log(allSecrets);  
    
    //the mySecrets page is refreshed so that you will be able to 
    //read the new secret in the list
    res.render('mySecrets', {allSecrets: allSecrets}); 
});


//When a secret is deleted from the array it loops through the array
//and gets the id of the secret
router.get('/deleteSecret/:id', function(req, res, next){
    for(x in allSecrets){
        if(req.params.id == allSecrets[x].id){
            allSecrets.splice(x, 1);
        }          
    };
    //refreshes the mySecret page to show that the secret has be deleted.
    //It will no longer be in the ul 
    res.render('mySecrets', {allSecrets: allSecrets});
});



module.exports = router;
