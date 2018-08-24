// Todos os meu controllers

exports.get = (req, res, next) => {
// devolvendo o status de ok mais informações
  res.status(200).send({
    item: 'only a get',
    message: 'Metodo Get'
  })
}

exports.post = (req, res, next) => {
// devolvendo o status de ok mais informações
  res.status(201).send({
    item: req.body,
    message: 'Metodo Post'
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
