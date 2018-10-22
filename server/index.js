const express = require('express');
const bparser = require('body-parser');
const parh = require('path');
// const cors = require('cors');
const mysql = require('mysql');

const models = require('./db/model.js');

var app = express();

app.use(bparser.json());
app.use(bparser.urlencoded({ extended: true }));
// app.use(cors);

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));

const handleCallback = (err, data, res) => {
  if (err) {
    res.status(500).send(err.message);
  } else {
    res.status(200).send(data);
  }
};

app.get('/movies', (req, res) => {
  let opts = [];
  models.Movie.getAll(opts, (err, data) => { handleCallback(err, data, res) });
});

app.post('/movie', (req, res) => {
  let opts = req.body;
  models.Movie.addOne(opts, (err, data) => { handleCallback(err, data, res) });
});

app.delete('/movie', (req, res) => {
  let opts = req.body;
  models.Movie.delOne(opts, (err, data) => { handleCallback(err, data, res) });
});

app.listen(3000, function() {
  console.log(`listening on port 3000`);
});