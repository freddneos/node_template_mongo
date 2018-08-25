const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
// padrão guid _id
	title: {
		type: String,
		required: true,
		trim: true
	},
	// slug cadeiga-gamer
	slug: {
		type: String,
		required: true,
		trim: true,
		index: true,
		unique: true
	},
	description: {
		type: String,
		required: true,
		trim: true
	},
	price: {
		type: Number,
		required: true
	},
	active: {
		type: Boolean,
		required: true,
		default: true
	},
	//  nuvem de tags em array de strings
	tags: [{
		type: String,
		required: true
	}]
})

module.exports = mongoose.model('Product', schema)
