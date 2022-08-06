// Declare variables and import modules

const express = require('express')
const app = express()
const PORT = 3001
const mongoose = require('mongoose')
require('dotenv').config()

// Middleware to help with traffic moving to and from server
// Set view engine to ejs
app.set('view engine', 'ejs')

// Telling express to look for styling in public folder
app.use(express.static('public'))

// Url parser encoded method for express helps validate information being passed back and forth
app.use(express.urlencoded({extended: true}))

//connect to mongodb via mongoose
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {console.log(`Connected to database!`)})


// setup server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

