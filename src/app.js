const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dbUrl = require('./keys')

const app = express()
const router = express.Router()

// conectar ao banco
mongoose.connect(dbUrl.mongoLabUrl, {useNewUrlParser: true})
const Product = require('../src/models/productModel')

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
