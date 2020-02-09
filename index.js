require('dotenv').config()
const express = require('express')
const server = express()

server.get("/", (req, res) => {
  res.send("Hi there.")
})

server.get('/fast', (req, res) => {
  res.send('This was fast!')
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server listenign on PORT: ${PORT}`)
})