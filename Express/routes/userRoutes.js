const express = require('express')
const router = express.Router()

const user = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

router.post('/', user.registerUser)
router.post('/signin', user.SignInUser)
router.get('/display', protect, user.getUserData)

module.exports = router