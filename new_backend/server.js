const { application } = require('express');
const express = require('express')
const app = express();
const PORT = 3000;
var path = require('path');
const sightingRoutes = require('./routes/sightingRoutes')
const userRoutes = require('./routes/userRoutes')
var bodyParser = require('body-parser')

const methodsOverride = require('method-override')
app.use(methodsOverride('_method'))

var cookieParser = require('cookie-parser');
// new code below
var session = require('express-session');
var passport = require('passport');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('dotenv').config();
require('./config/connection')
//require('./config/database) this is from the oauth lesson, not sure if needed
require('./config/passport');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
    //might end up deleting this false, might be unnecessary
}));
// new code below
app.use(session({
  secret: 'jasonfine',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res)=>{
    //res.json('Welcome to the login screen. Please log in')
    res.render('index.ejs')
})

app.use('/sighting', sightingRoutes)
app.use('/user',userRoutes)

app.listen(PORT, () =>{
    console.log('Listening', PORT)
})