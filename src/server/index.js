const dotenv = require('dotenv');
dotenv.config();


var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
//const mockAPIResponse = require('./mockAPI.js')


const app = express()


const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.json());
app.use(express.static('dist'))

//console.log(__dirname)

// API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
let userURL = []

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

/*
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
*/

// POST Route
app.post('/sentimentApi', async function (req, res) {
    userURL = req.body.url;
    const apiURL = `${baseURL}key=${apiKey}&url=${userURL}&lang=en`
    const response = await fetch(apiURL)
    const userData = await response.json()
    res.send(userData)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log(`My API key is ${process.env.API_KEY}`);
    console.log('NLP app listening on port 8081!')
})