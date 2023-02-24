const mongoose = require('mongoose')


const connectDB = async() =>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connected successfuly')
      
    }
    catch(errr) {
        console.log('connection failed')
        process.exit(1)
    }
}


module.exports = connectDB