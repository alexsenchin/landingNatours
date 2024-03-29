const express = require('express')
const sass = require('node-sass')
const path = require('path')
const hbs = require('hbs')
const app = express()

const port = process.env.PORT || 3000

// Paths for Express config
const publicDirectoryPath = path.join(__dirname + '/public')
const viewsPath = path.join(__dirname + '/templates/views')
const partialsPath = path.join(__dirname + '/templates/partials')

   
// Setup HBS engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
 

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('https://alexsenchin-demo-natours.herokuapp.com/', (req, res) => {
    res.render('index')
}) 
   
 
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
}) 