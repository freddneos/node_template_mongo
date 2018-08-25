const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dbUrl = require('./keys')
const md5 = require('md5')

const app = express()
const router = express.Router()

// conectar ao banco
mongoose.connect(dbUrl.mongoLabUrl, {useNewUrlParser: true})
const Product = require('../src/models/productModel')
const Customer = require('../src/models/customerModel')
const Order = require('../src/models/orderModel')

// Carregar as Rotas
const indexRoute = require('../src/routes/indexRoute')
const productRoute = require('../src/routes/productRoute')
const customerRoute = require('../src/routes/customerRoute')
const orderRoute = require('../src/routes/orderRoute')

//  parseando o resultado em json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// dizendo a app para usar esta rota
app.use('/', indexRoute)
app.use('/products' , productRoute)
app.use('/customers', customerRoute)
app.use('/orders'   , orderRoute)
module.exports = app
