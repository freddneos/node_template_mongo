const express = require('express')
const router = express.Router()
const controller = require('../controllers/customerController')

// rota principal
router.get('/', controller.get)

// o que eu quero exportar
module.exports = router
