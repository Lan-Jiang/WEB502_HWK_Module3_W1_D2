var express = require('express');
var path = require('path');
var app = express();

const port = process.env.PORT || 3000;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'homework_foodblog.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

