var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var login = require('./LoginHandler');

var loginInstance = new login();

//Connect to mongoose
//mongoose.connect(''); //Place location of db here
//var db = mongoose.connection;

app.use( bodyParser.json() );
//Routes

//GET
app.get('/', function( req, res ){
  res.send('Please use the route /api/session');
});

//POST
app.post('/session', function( req, res ){
  res.send('You have his the session endpoint :D');
  console.log( req.body.SessionName )
  console.log( req.body.SessionNumber )
  console.log( req.body.transistions[0] );

  console.log( loginInstance.hello() );

});


app.listen(3000);

console.log('Running on port 3000...');
