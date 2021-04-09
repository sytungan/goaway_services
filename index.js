const express = require('express')
const menu = require('./routes/menu')
const user = require('./routes/user')
const direction = require('./routes/direction')
<<<<<<< HEAD
const sign = require('./routes/sign')
=======
const place = require('./routes/place')
>>>>>>> ede59bf69b331a6f588c29cebb1a758446483c4f
const { PORT } = require('./environments')
const { mongoose } = require('./helpers')
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

// Route
app.use('/menu', menu)
app.use('/user', user)
app.use('/direction', direction)
<<<<<<< HEAD
app.use('/sign', sign)
=======
app.use('/place', place)

>>>>>>> ede59bf69b331a6f588c29cebb1a758446483c4f
// Listener
app.listen(PORT, (err) => {
    if (err) throw err
    console.log('Server running in port: ' + PORT)
})

module.exports = app