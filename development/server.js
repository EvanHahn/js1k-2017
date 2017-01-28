const build = require('./build')
const express = require('express')
const codeSize = require('./size')

const PORT = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const code = build()
  const size = codeSize(code)

  res.render('shim', { code, size })
})

app.listen(PORT, () => {
  console.log(`Test app started on port ${PORT}`)
})
