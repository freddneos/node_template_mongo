const express = require('express')
const router = express.Router()
const controller = require('../controllers/orderController')

// rota principal
router.post('/', controller.post)
// rota principal
router.get('/', controller.get)

// o que eu quero exportar
module.exports = router
