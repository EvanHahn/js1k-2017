const express = require('express')
const jscrush = require('jscrush')
const uglify = require('uglify-js')
const path = require('path')

const PORT = process.env.PORT || 3000
const STATICS = path.resolve(__dirname, 'static')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('shim', {
    code: 'console.log(5)',
    size: 123
  })
})

app.listen(PORT, () => {
  console.log(`Test app started on port ${PORT}`)
})
