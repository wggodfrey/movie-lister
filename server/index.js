const express = require('express');
const bparser = require('body-parser');
const parh = require('path');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bparser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});


app.listen(3000, function() {
  console.log(`listening on port 3000`);
});