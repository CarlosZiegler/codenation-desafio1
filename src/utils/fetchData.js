const fs = require('fs')

const api = require('../services/api')

async function getDataAndSave(){
    // Verify if File exist
    const isExist = fs.existsSync('data/answer.json')
    
    if (!isExist) {
        try {
            const response = await api.get()
            await fs.writeFileSync('./data/answer.json', JSON.stringify(response.data))
            console.log('Saving file to data/answer.json .... done')
            return response
        } catch (error) {
            console.log(error)
        }
        
    } 
    console.log('File exists')
}

module.exports = getDataAndSave