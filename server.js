console.log('thisMaServer')

var messages = ['thomas', 'mila']
console.log(messages)

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
