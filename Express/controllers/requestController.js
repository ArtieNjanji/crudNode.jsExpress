const asyncHandler = require('express-async-handler')
const Request = require('../models/requestModel')
const User = require('../models/userModel')

// get requests from the client-side
const getRequests = asyncHandler(async (req, res) => {
    const requests = await Request.find({user: req.user.id})

    // res.json({message: 'get requests'})
    res.json(requests)
})

// handles the create request from the client-side
const createRequests = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        // res.status(400)

        throw new Error('Enter text')
    }
    const request = await Request.create({
        text: req.body.text,
        user:req.user.id
    })

    res.json(request)
})


// handles the edite request from the client-side
const updateRequests = asyncHandler(async (req, res) => {
    const request = await Request.findById(req.params.id)

    if(!request){
        res.status(400)
        throw new Error('Request does nt exist')
    }

    const user = await User.findById(req.user.id)

    // check for user
    if(!user){
        res.status(401)
        throw new Error('User does not exist')
    }
    // User logged in matches the requester
    if(request.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorised')
    }

    const updRequest = await Request.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.json(updRequest) 

})


// handles the delete request from the client-side
const deleteRequests = asyncHandler(async (req, res) => {
    const request = await Request.findById(req.params.id)

    if(!request){
        res.status(400)
        throw new Error('Request does not exist')
    }
    const user = await User.findById(req.user.id)

    // check for user
    if(!user){
        res.status(401)
        throw new Error('User does not exist')
    }
    if(request.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorised')
    }

    await request.remove()

    res.json({id: req.params.id})
})


module.exports = {
    getRequests,
    createRequests,
    updateRequests,
    deleteRequests 
}