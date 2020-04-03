const axios = require('axios')
const credentials = require('../../credentials.json')

const submit = axios.create({
    baseURL: credentials.URLGSUBMITSOLUTION
})
module.exports= submit