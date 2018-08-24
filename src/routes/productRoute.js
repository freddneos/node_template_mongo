const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController')

// rota principal
router.get('/', controller.get)
// rota de post
router.post('/', controller.post)
// Rota de put
router.put('/:id', controller.put)
// rota de delete
router.delete('/:id',controller.delete)
// o que eu quero exportar
module.exports = router
