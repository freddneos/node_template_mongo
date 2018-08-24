const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Carregar as Rotas
const indexRoute = require('../src/routes/indexRoute')
const productRoute = require('../src/routes/productRoute')

//  parseando o resultado em json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// dizendo a app para usar esta rota
app.use('/', indexRoute)
app.use('/products', productRoute)
module.exports = app
