// Todos os meu controllers
const mongoose = require('mongoose')
const emailService = require('../services/emailService')
// instancia do meu schema0
const Customer = mongoose.model('Customer')
const md5 = require('md5')

exports.post = (req, res, next) => {
// devolvendo o status de ok mais informações
	var customer = new Customer({
		name: req.body.name,
		email: req.body.email,
		password: md5(req.body.password + global.SALT_KEY)


	})
	customer.save()
		.then(x => {
			res.status(201).send({
				message: 'cliente cadastrado com sucesso'
			})
			emailService.send(req.body.email,'Novo Cadastro',`Cadastro realizado com sucesso, Obrigado ${req.body.name}`)
		}).catch(e => {
			res.status(400).send({
				message: 'Falha ao cadastrar cliente',
				data: e
			})
		})
}

exports.get = (req,res,next) => {
	Customer.find()
		.then(data => {
			res.status(200).send(data)
		}).catch(e => {
			res.status(400).send({
				message: `Erro ao recuperar clientes ${e} `
			})
		})
}
