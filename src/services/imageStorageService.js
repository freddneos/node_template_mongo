const AWS = require('aws-sdk')
const fs = require('fs')
const path = require('path')
const keys = require('../keys')


//configurando o ambiente da amazon
AWS.config.update({
    accessKeyId: keys.amazon_s3_acess_id,
    secretAccessKey: keys.amazon_s3_secret_acess
})

exports.send = (fileUrl) => {

    var S3 = new AWS.S3()
    var filePath = fileUrl

    var params = {
        Bucket : 'neosbalta',
        Body : fs.createReadStream(filePath),
        Key : "folder/"+Date.now()+"_"+path.basename(filePath)
    }
    S3.upload(params,function(err,data){
        if(err){
            console.log("Error" , err)
        }

        if(data){
            console.log(`uploaded in :  ${data.location}`)
        }
    })

}
