const express = require('express')
const router = express.Router()
// rota principal
router.get('/', (req, res, next) => {
// devolvendo o status de ok mais informações
  res.status(200).send({
    title: 'Node store API',
    version: '0.0.1'
  })
})
module.exports = router
