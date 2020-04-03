const fs = require('fs')

function saveFile(path, content){
    
    try {
        fs.writeFileSync(path,JSON.stringify(content))
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = saveFile