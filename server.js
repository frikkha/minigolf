const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const coffee = require('./routes/api/minigolf.js');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

// Retrieve
const MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect(db, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

//Use routes:
app.use('/api/minigof', minigolf);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));