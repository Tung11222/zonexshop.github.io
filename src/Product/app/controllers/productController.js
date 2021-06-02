
class productController {

    // [GET] /
    product(req, res) {
        res.render('product')
    }
}

module.exports = new productController