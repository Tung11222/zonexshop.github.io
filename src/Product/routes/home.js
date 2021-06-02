
const express = require('express')
const homeController = require('../app/controllers/homeController.js')
const router = express.Router()

router.get('/', homeController.home)

module.exports = router
