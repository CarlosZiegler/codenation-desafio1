const fs      = require('fs');
const request = require('request');
const credentials = require('../../credentials.json')

function handleSubmit(pathJson){
    const isExist = fs.existsSync('tmp/result/answer.json')

    if (!isExist) {
        return 'file not exist'
    }

    const headers = {
        'Content-Type': 'multipart/form-data'
    }

    const req = request.post(
        { url: credentials.URLGSUBMITSOLUTION, headers },
        function optionalCallback (error, httpResponse, body) {
            if (error) {
                return console.error('upload failed:', error)
            }
                console.log('Upload successful!  Server responded with:', body)
            }
    )
    
    const form = req.form()
    form.append('answer', fs.createReadStream(pathJson), {
        filename: 'answer.json'
    })

}

module.exports = handleSubmit
