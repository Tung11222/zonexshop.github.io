const cartBox = document.querySelector('.cart-box')

function render() {
    const html = shoppingCart.map((element) => {
        return `
        <div class="featured-product__item">
            <div class="featured-product__img">
                <img src="img/sp1-10/${element.name}.jpg" alt="">
            </div>
            <div class="featured-product__content">
                <p class="featured-product__name">
                    ${element.description}
                </p>
                <div class="featured-price">
                    <span class="featured-product__price">$${element.cost}</span>
                    <span class="featured-product__oldprice">$${element.costOld}</span>
                </div>
            </div>
        </div>  
        `
    })
} 