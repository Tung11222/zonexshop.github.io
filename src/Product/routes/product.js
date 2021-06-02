const express = require('express')
const productController = require('../app/controllers/productController.js')
const router = express.Router()

router.get('/allProduct', productController.product)

module.exports = router