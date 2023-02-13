const express = require('express')
const controller = require('../controllers/requestController')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')


router.get('/', protect, controller.getRequests)

router.post('/', protect, controller.createRequests)

router.put('/:id', protect, controller.updateRequests)

router.delete('/:id' ,protect, controller.deleteRequests)

module.exports = router

