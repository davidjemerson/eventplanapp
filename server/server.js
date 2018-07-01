// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const mongoose = require("mongoose");
const passport = require('./passport');
const routes = require("../routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(passport.initialize())
app.use(passport.session()) 

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(routes);

app.use('/auth', require('../routes/auth'))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/eventplandb");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});