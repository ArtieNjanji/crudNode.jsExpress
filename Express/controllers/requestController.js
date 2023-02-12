const asyncHandler = require('express-async-handler')


// get requests from the client-side
const getRequests = asyncHandler(async (req, res) => {
    res.json({message: 'get requests'})
})

// handles the create request from the client-side
const createRequests = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        // res.status(400)

        throw new Error('Enter text')
    }


    res.json({message: 'create requests'})
})

// handles the edite request from the client-side
const updateRequests = asyncHandler(async (req, res) => {
    res.json({message: `update requests ${req.params.id}` })

})


// handles the delete request from the client-side
const deleteRequests = asyncHandler(async (req, res) => {
    res.json({message: `delete requests ${req.params.id}` })
})


module.exports = {
    getRequests,
    createRequests,
    updateRequests,
    deleteRequests 
}