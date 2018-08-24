const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController')

// rota principal
router.get('/', controller.get)
// rota principal
router.get('/:slug', controller.getBySlug)
// rota principal
router.get('/admin/:id', controller.getById)
router.get('/tags/:tag', controller.getByTag)

// rota de post
router.post('/', controller.post)
// Rota de put
router.put('/', controller.put)
// rota de delete
router.delete('/', controller.delete)
// o que eu quero exportar
module.exports = router
