const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
// padrão guid _id
	name: {
		type: String,
		required: true,
		trim: true
	},
	// slug cadeiga-gamer
	email: {
		type: String,
		required: true,
		trim: true,
		index: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
})
module.exports = mongoose.model('Customer', schema)
