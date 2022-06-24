const { application } = require('express');
const express = require('express')
const app = express();
const PORT = 3000;
const sightingRoutes = require('./routes/sightingRoutes')
const userRoutes = require('./routes/userRoutes')

var cookieParser = require('cookie-parser');
// new code below
var session = require('express-session');
var passport = require('passport');

require('dotenv').config();
require('./config/connection')
//require('./config/database) this is from the oauth lesson, not sure if needed
require('./config/passport');
app.use(cookieParser());
// new code below
// app.use(session({
//   secret: 'jasonfine',
//   resave: false,
//   saveUninitialized: true
// }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res)=>{
    res.json('Welcome to the login screen. Please log in')
})

app.use('/sighting', sightingRoutes)
app.use('/user',userRoutes)

app.listen(PORT, () =>{
    console.log('Listening', PORT)
})