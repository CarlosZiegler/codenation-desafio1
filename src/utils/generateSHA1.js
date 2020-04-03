const sha1 = require('sha1');

function generateSHA1(text){
    return sha1(text)
}

module.exports = generateSHA1
