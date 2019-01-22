const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { resources } = require('./routes')

const app = express()

const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())

app.use('/resources', resources)

app.get('/', function(req, res) {
    res.json({
        message: 'Hello, world',
    })
})

app.listen(PORT, function () {
    console.log('http://localhost:' + PORT + '에서 서버가 동작중입니다')
})