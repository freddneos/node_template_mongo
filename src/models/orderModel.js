const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
	// Referenciando o schema de cliente
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer'
	},
// padrão guid _id
	number: {
		type: String,
		required: true,
		trim: true
	},
	createDate: {
		type: Date,
		required: true,
		default: Date.now
	},
	status: {
		type: String,
		required: true,
		enum: ['created','done'],
		default: 'created'
	},
	// Array de itens, não existe a necessidade de criação de novo documento ou coleção 
	items: [{
		itemNumber: {
			type: Number,
			required: true
		},
		quantity: {
			type: Number,
			require: true
		},
		// referenciand o schema de produtos
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product'
		},
		price: {
			type: Number,
			required: true
		}

	}]

})

module.exports = mongoose.model('Order', schema)
