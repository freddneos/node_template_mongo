
var key = require('../keys')
var sendgrid = require('sendgrid')(key.sendgrid_key)

exports.send = async(to,subject,body) => {
    sendgrid.send({
        to: to,
        from: 'hello@neosdev.com.br',
        subject: subject,
        html: body
    })
}