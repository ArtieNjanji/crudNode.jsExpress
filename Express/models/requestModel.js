const mongoose = require('mongoose')



const requestSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refrence: 'User'

    },
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