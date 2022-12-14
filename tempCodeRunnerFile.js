const express = require("express")
const http = require('http')
const app = express()
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.use(router)

app.listen(3003, () => {
    console.log("server rodando")
})