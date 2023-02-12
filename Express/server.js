const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

app.use('/api/requests', require('./routes/requestRoutes') )

app.listen(2108, () =>{
    console.log('Server start at 2108...')
})


