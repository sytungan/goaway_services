const express = require('express')
const menu = require('./routes/menu')
const user = require('./routes/user')
const direction = require('./routes/direction')
const location = require('./routes/location')
const img = require('./routes/image')
const sign = require('./routes/sign')
const place = require('./routes/place')
const geocoding = require('./routes/geocoding')
const { PORT } = require('./environments')
const { mongoose } = require('./helpers')
const favicon = require('serve-favicon');
const path = require('path')
const app = express()

// connected mongo database
mongoose.connection.on('error', () => {
	console.log('❌  error occurred from the mongo database')
})
mongoose.connection.once('open', () =>
	console.log('🌨  Connected successfully to mongo database')
)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/architecture', (req, res) => {
    res.render('architecture')
});
app.use(favicon(path.join(__dirname,'views','public','images','favicon.ico')));


// Route
app.use('/menu', menu)
app.use('/user', user)
app.use('/direction', direction)
app.use('/sign', sign)
app.use('/place', place)
app.use('/location',location)
app.use('/geocoding',geocoding)
app.use('/img64', img)


// Listener
app.listen(PORT, (err) => {
    if (err) throw err
    console.log('Server running in port: ' + PORT)
})

module.exports = app