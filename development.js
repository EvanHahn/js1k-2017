const serveStatic = require('serve-static')
const jscrush = require('jscrush')
const uglify = require('uglify-js')
const path = require('path')

const PORT = process.env.PORT || 3000
const STATICS = path.resolve(__dirname, 'static')

const app = require('connect')()

app.use(serveStatic(STATICS))

app.listen(PORT, () => {
  console.log(`Test app started on port ${PORT}`)
})
