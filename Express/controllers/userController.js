const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')


// register new user to the system (Sing Up functionality)
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, position, department} = req.body

    if(!name || !email || !password || !department || !position){
        // res.status(400)
        throw new Error ('Please fill all fields')
    }
 // check if user already exits
    const userExits = await User.findOne({email})

    if(userExits)  {
        res.status(400)
        throw new Error('User with same email exits')
    }
    // encrypt user passwords(using bcryptjs)
    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(password, salt)

    // create User in the database
    const user = await User.create({
        name,
        email,
        password: encryptedPassword,
        position,
        department
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            department: user.department,
            position: user.position,
            token:generateToken(user._id),
        })
    }else {
        res.status(400)
        throw new Error('Invalid User')
    }
        res.json({message: 'user registered !!'})
})

// log in user functionality
const signInUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    // compare user details in the database and thosed when signing in 
    if(user && (await bcrypt.compare(password, user.password))) //decrypting password in the database and compare it to the password entered on sign in
    {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            department: user.department,
            position: user.position,    
            token: generateToken(user._id),  
        })
    }
    else {
        res.status(400)
        throw new Error('Email and password does not match')
    }


    res.json({message: 'userLoged in'})
})

// Diplay data of loged in user and data of requests in case of Admon dprtmnt and Managers
const getUserData = asyncHandler(async (req, res) => {
    const {_id, name, email, department, position} = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email,
        position,
        department,
    })
})


const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}


module.exports = {
    registerUser,
    signInUser,
    getUserData

}