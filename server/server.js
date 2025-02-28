

const path = require('path')

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'products.json'))
})

app.listen(port, () => {
  console.log(`Backend ruinning on ${port}.`)
})