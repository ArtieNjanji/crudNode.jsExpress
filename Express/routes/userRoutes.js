const express = require('express')
const router = express.Router()

const {registerUser, signInUser, getUserData} = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/signin', signInUser)
router.get('/display', protect, getUserData)

module.exports = router

