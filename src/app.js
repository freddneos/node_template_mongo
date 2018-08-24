const express = require('express')

const app = express()
const router = express.Router()

const route = router.get('/', (req, res, next) => {
// devolvendo o status de ok mais informações
  res.status(200).send({
    title: 'Node store API',
    version: '0.0.1'
  })
})
// dizendo a app para usar esta rota
app.use('/', route)
module.exports = app
