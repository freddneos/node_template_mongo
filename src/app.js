const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

//parseando o resultado em json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//rota princiap
const route = router.get('/', (req, res, next) => {
// devolvendo o status de ok mais informações
  res.status(200).send({
    title: 'Node store API',
    version: '0.0.1'
  })
})
//rota de post
const create = router.post('/', (req, res, next) => {
// devolvendo o status de ok mais informações
  res.status(201).send(req.body)
})

// dizendo a app para usar esta rota
app.use('/', route)
app.use('/products', create)
module.exports = app
