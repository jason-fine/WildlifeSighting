const express = require('express')
const app = express()
const PORT = 6000

const morgan = require('morgan')
const path = require('path')
const methodOverride=require('method-override')

const sightingsRoutes = require('./routes/sightingsRoutes')
app.use(sightingsRoutes)

app.get('/',(req,res) => {
    res.send('Welcome to my page')
})

app.listen(PORT,function(){
    console.log('Listening on port', PORT)
})
