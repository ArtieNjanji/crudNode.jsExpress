const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/requests', require('./routes/requestRoutes') )

app.use(errorHandler)

app.listen(2108, () =>{
    console.log('Server start at 2108...')
})


