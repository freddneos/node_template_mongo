// Todos os meu controllers
const mongoose = require('mongoose')
// instancia do meu schema0
const Customer = mongoose.model('Customer')

exports.post = (req, res, next) => {
// devolvendo o status de ok mais informações
	var customer = new customer(req.body)
	customer.save()
		.then(x => {
			res.status(201).send({
				message: 'cliente cadastrado com sucesso'
			})
		}).catch(e => {
			res.status(400).send({
				message: 'Falha ao cadastrar cliente',
				data: e
			})
		})
}