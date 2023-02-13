const express = require('express')
const router = express.Router()

const user = require('../controllers/userController')

router.post('/', user.registerUser)
router.post('/signin', user.SignInUser)
router.get('/me', user.getUserData)

module.exports = router