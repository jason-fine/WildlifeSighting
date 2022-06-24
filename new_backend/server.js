const { application } = require('express');
const express = require('express')
const app = express();
const PORT = 3000;
const sightingRoutes = require('./routes/sightingRoutes')

var cookieParser = require('cookie-parser');
// new code below
var session = require('express-session');
var passport = require('passport');

require('dotenv').config();
require('./config/connection')
app.use(cookieParser());
// new code below
app.use(session({
  secret: 'jasonfine',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req,res)=>{
    res.json('Welcome to the login screen. Please log in')
})

app.use('/sighting', sightingRoutes)

app.listen(PORT, () =>{
    console.log('Listening', PORT)
})