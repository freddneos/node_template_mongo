const AWS = require('aws-sdk')
const fs = require('fs')
const path = require('path')
const keys = require('../keys')


//configurando o ambiente da amazon
AWS.config.update({
    accessKeyId: keys.amazon_s3_acess_id,
    secretAccessKey: keys.amazon_s3_secret_acess
})

var S3 = new AWS.S3()
var filePath = ""