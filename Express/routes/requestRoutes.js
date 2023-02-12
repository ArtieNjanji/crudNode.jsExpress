const express = require('express')
const controller = require('../controllers/requestController')
const router = express.Router()


router.get('/', controller.getRequests)

router.post('/', controller.createRequests)

router.put('/:id', controller.updateRequests)

router.delete('/:id',controller.deleteRequests)

module.exports = router

