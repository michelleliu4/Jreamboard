// @ts-nocheck
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const auth = require('./routes/auth')
const posts = require('./routes/posts')

app.use(express.json()); 
app.use(cors())
app.use('/auth', auth)
app.use('/posts', posts)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})