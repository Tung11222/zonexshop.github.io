const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const port = 3000

const route = require('./Product/routes/index.js')
const signInRoute = require('./SignIn/routes/index.js')

// Templete Handlebars
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', [
    path.join(__dirname, 'Product/resource/views'),
    path.join(__dirname, 'SignIn/views')
])
app.use([
    express.static(__dirname + '/Product/public'),
    express.static(__dirname + '/SignIn/public')
]);

// Morgan
app.use(morgan('combined'))


// Loading...
route(app)
signInRoute(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})