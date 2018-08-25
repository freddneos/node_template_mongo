// Todos os meu controllers
const mongoose = require('mongoose')
const guid = require('guid')
// instancia do meu schema0
const Order = mongoose.model('Order')

exports.post = (req, res, next) => {
// devolvendo o status de ok mais informações
	var number = guid.raw().substring(0,6)
	var order = new Order({
		number: number,
		customer: req.body.customer,
		items: req.body.items	
	})
	order.save()
		.then(x => {
			res.status(201).send({
				message: 'Pedido cadastrado com sucesso'
			})
		}).catch(e => {
			res.status(400).send({
				message: 'Falha ao cadastrar Pedido',
				data: e
			})
		})
}
// Trazendo os documentos filhos...
exports.get = (req,res,next) => {
	Order.find({})
	.populate('customer')
	.populate('items.product')
		.then(data => {
			res.status(200).send(data)
		}).catch(e => {
			res.status(400).send({
				message: `Erro ao recuperar clientes ${e} `
			})
		})
}
