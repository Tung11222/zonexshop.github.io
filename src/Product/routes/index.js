const homeRouter = require('./home.js')
const productRouter  = require('./product.js')

function route(app) {

    app.use('/', homeRouter)
    app.use('/', productRouter)

}

module.exports = route
