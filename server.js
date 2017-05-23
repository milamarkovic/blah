var cors = require('cors')
var express = require('express');

var app = express();
app.use(cors()) // <- Allows other apps to use my API server

// Our messages that get stored and sent and received
var messages = ['15c06268d86613ca9e0ddfde83cb07dffd19ae']

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/messages', function(req, res){
  res.send(messages);
});

app.get('/send', function(req, res){
  var message = req.query.message
  messages.push(message)
  res.send(messages);
});

var PORT = 3000;

// This is to make sure our server connects on the port Heroku gives it
// When I run this on my own computer though, it will use the one above
if (process.env.PORT) {
  PORT = process.env.PORT;
}

app.listen(PORT);
