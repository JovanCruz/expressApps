var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

//route for index page
router.get('/', function(req,res)
{
    res.sendFile(path.join(__dirname + '/index.html'));
});

//route for about page
router.get('/about', function(req,res)
{
    res.sendFile(path.join(__dirname + '/about.html'));
});

//route for contact page
router.get('/contact', function(req,res)
{
    res.sendFile(path.join(__dirname + '/contacts.html'));
});

//route for riddles page
router.get('/riddle', function(req,res)
{
    res.sendFile(path.join(__dirname + '/riddle.html'));
});

//route for game page
router.get('/game', function(req,res)
{
    res.sendFile(path.join(__dirname + '/game.html'));
});


//Sets up server
app.use('/', router);
app.listen(process.env.port || 3000);
console.log("Running on port 3000");