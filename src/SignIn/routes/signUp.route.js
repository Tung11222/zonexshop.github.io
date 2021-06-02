const express = require('express')
const signUpController = require('../controller/signUp.controller.js')
const router = express.Router()

router.get('/sign-up', signUpController.signUp)

module.exports = router