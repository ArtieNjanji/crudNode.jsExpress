const mongoose = require('mongoose')



const requestSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'add text value']
    }
},
    {
        timestamps:true
    }
)


module.exports = mongoose.model('Request', requestSchema)