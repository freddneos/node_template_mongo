// Todos os meu controllers
const mongoose = require('mongoose')
// instancia do meu schema0
const Product = mongoose.model('Product')

exports.post = (req, res, next) => {
// devolvendo o status de ok mais informações
	//função de upload aqui!!!!  https://www.npmjs.com/package/express-fileupload
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
exports.put = (req, res, _next) => {
// devolvendo o status de ok mais informações
	Product
		.findByIdAndUpdate(req.body.id, {
			$set: {
				title: req.body.title,
				description: req.body.description,
				price: req.body.price,
				slug: req.body.slug
			}
		}).then(_x => {
			res.status(200).send({
				message: 'Produto Atualizado com sucesso!'
			})
		}).catch(e => {
			res.status(400).send({
				message: 'Não foi possivel atualizar o produto',
				data: e
			})
		})
}

exports.delete = (req, res, _next) => {
// devolvendo o status de ok mais informações
	Product
		.findByIdAndRemove(req.body.id)
		.then(_x => {
			res.status(200).send({
				message: 'Produto Excluido com sucesso!'
			})
		}).catch(e => {
			res.status(400).send({
				message: 'Não foi possivel excluir o produto',
				data: e
			})
		})
}

exports.get = (_req, res, _next) => {
// devolvendo o status de ok mais informações
	Product.find({})
		.then(data => {
			res.status(200).send(data)
		}).catch(e => {
			res.status(400).send({
				message: 'Erro ao processar sua requisição',
				data: e
			})
		})
}

exports.getBySlug = (req, res, _next) => {
// devolvendo o status de ok mais informações
	Product.findOne({
		slug: req.params.slug,
		active: true
	})
		.then(data => {
			res.status(200).send(data)
		}).catch(e => {
			res.status(400).send({
				message: 'Erro ao processar sua requisição',
				data: e
			})
		})
}
exports.getById = (req, res, _next) => {
// devolvendo o status de ok mais informações
	Product.findById(req.params.id)
		.then(data => {
			res.status(200).send(data)
		}).catch(e => {
			res.status(400).send({
				message: 'Erro ao processar sua requisição',
				data: e
			})
		})
}
// requisição sincrona!!!!
exports.getByTag = async(req, res, next) => {
	// devolvendo o status de ok mais informações
	try {
		var data = await Product.find({
			tags: req.params.tag,
			active: true
		})
		res.status(200).send(data)	
	} catch (error) {
		res.status(500).send({
			message: `Falha ao processar sua requisição ${error}`
		})
	}
	
}
