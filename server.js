var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');

var app = express();
app.use(morgan('combined'));




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/page-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page-one.html'));
});

app.get('/page-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page-two.html'));
});

app.get('/page-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var counter=0;
app.get('/counter', function (req, res){
   counter = counter+1; 
    res.send(counter.toString());
});

function hash(input, salt){
    var hashed = crypto.pbkdf2Sync(input, salt, 1000, 512,'sha512');
    return hashed.toString('hex');
}


//hasing password
app.get('/salt_hashing/:input',function(req,res){
   var hashedstring = hash(req.params.input,'random-string-added');
   res.send(hashedstring);
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});














