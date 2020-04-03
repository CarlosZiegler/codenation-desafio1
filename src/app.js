const path = require('path')
const fetchData = require('./utils/fetchData')
const descrypter = require('./utils/descrypter')
const answer = require('./data/answer')
const generateSHA1 = require('./utils/generateSHA1')
const saveFile = require('./utils/saveFile')
const submit = require('./utils/submit')


//get data from URL
fetchData()

//set text 
const text = answer.cifrado

// transform text in array
const textToArrays = text.split(' ')

//descrypter each element from array
const newArray = textToArrays.map(wordArray => {
    return descrypter(wordArray)
})

//transform array to text
const result = newArray.join(' ')

//set result in file
answer.decifrado = result
answer.resumo_criptografico=generateSHA1(result)

//save file
const isSave = saveFile('./tmp/result/answer.json', answer)

if (isSave) {
    console.log('File saved successfully')
}

//url from File
const pathJson = path.resolve(__dirname, 'tmp/result', 'answer.json')

//submit 
submit(pathJson)















