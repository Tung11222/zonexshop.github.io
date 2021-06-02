const signUpRouter = require('./signUp.route.js')
const logInRouter = require('./logIn.route.js')

function signInRoute(app) {

    app.use('/', signUpRouter)
    app.use('/', logInRouter)

}

module.exports = signInRoute
