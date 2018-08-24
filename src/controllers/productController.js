// Todos os meu controllers
const mongoose = require('mongoose')
// instancia do meu schema0
const Product = mongoose.model('Product')

exports.post = (req, res, next) => {
// devolvendo o status de ok mais informações
  var product = new Product(req.body)
  product.save()
    .then(x => {
      res.status(201).send({
        message: 'Produto cadastrado com sucesso'
      })
    }).catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar produto',
        data: e
      })
    })
}

exports.put = (req, res, next) => {
// devolvendo o status de ok mais informações
  const id = req.params.id
  res.status(200).send({
    item: id,
    message: 'Metodo Put'
  })
}

exports.delete =  (req, res, next) => {
// devolvendo o status de ok mais informações
  res.status(200).send({
    item: req.params.id,
    message: 'Metodo Delete'
  })
}

exports.get = (req, res, next) => {
// devolvendo o status de ok mais informações
  res.status(200).send({
    item: 'only a get',
    message: 'Metodo Get'
  })
}
