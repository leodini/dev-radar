const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const app = express()


const url_server = 'mongodb+srv://omnistack:omnistack@cluster0-fkehl.mongodb.net/semana10?retryWrites=true&w=majority'

mongoose.connect(url_server, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('connected to db'))

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(3333)