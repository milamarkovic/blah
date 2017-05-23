var cors = require('cors')
var express = require('express');

var app = express();
app.use(cors()) // <- Allows other apps to use my API server

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/messages', function(req, res){
  res.send(messages);
});

var PORT = 3000;

// This is to make sure our server connects on the port Heroku gives it
// When I run this on my own computer though, it will use the one above
if (process.env.PORT) {
  PORT = process.env.PORT;
}

app.listen(PORT);
