const fs = require('fs')
const S3upload = require('../services/imageStorageService')

exports.up = async (file,slug) => {
let result = false
let fileUrl = `files/products/file_${slug}.jpg` 
    if(!file){
        result =  false
        console.log('Arquivo inválido para upload')
    } else{ 
      await  file.mv(fileUrl , function(err){
            if (err){
                result =  false;
                console.log('Falha ao mover arquivo ' + err)
            } else {
                console.log('enviando arquivo para Amazon S3')
                S3upload.send(fileUrl)
                result =  true
            }
        })
    }
    return fileUrl
}