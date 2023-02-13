const { default: mongoose } = require('mongoose')
const mongooge = require('mongoose')


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'FullName']
    },
    email:{
        type: String,
        required: [true, 'email']
    },
    password:{
        type: String,
        required: [true, 'Password']
    },
    department:{
        type: String,
        required: [true, 'Department']
    },
    position:{
        type: String,
        required: [true, 'Position']
    },
},{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema)

