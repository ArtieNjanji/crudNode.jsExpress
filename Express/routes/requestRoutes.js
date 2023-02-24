const express = require('express')
const {getAllRequests, getRequests, createRequests, updateRequests, deleteRequests} = require('../controllers/requestController')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')


// router.get('/', getAllRequests)
router.get('/', protect, getRequests)

router.post('/', protect, createRequests)

router.put('/:id', protect, updateRequests)

router.delete('/:id' ,protect, deleteRequests)

module.exports = router

