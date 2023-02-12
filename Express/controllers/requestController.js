
// get requests from the client-side
const getRequests = (req, res) => {
    res.json({message: 'get requests'})
}

// handles the create request from the client-side
const createRequests = (req, res) => {
    res.json({message: 'create requests'})
}

// handles the edite request from the client-side
const updateRequests = (req, res) => {
    res.json({message: `update requests ${req.params.id}` })}


// handles the delete request from the client-side
const deleteRequests = (req, res) => {
    res.json({message: `delete requests ${req.params.id}` })
}


module.exports = {
    getRequests,
    createRequests,
    updateRequests,
    deleteRequests 
}