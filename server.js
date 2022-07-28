const express = require("express")
const http = require('http')
const app = express()
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'contato.html'))
})

app.use(router)

app.listen(process.env.PORT || 3003, () => {
    console.log("server rodando")
})