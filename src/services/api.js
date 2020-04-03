const axios = require('axios')
const credentials = require('../../credentials.json')

const api = axios.create({
    baseURL: credentials.URLGENERATORDATA
})

module.exports= api