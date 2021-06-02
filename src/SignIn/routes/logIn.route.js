const express = require('express')
const logInController = require('../controller/logIn.controller.js')
const router = express.Router()

router.get('/log-in', logInController.logIn)

module.exports = router