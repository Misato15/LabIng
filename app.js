const express = require('express')
require('dotenv').config()
const port = process.env.PORT
const app = express()


app.get('/',(req,res) => res.send('Hello World!'))

app.listen(port, ()=> console.log("Servidor HTTP port: " + port))