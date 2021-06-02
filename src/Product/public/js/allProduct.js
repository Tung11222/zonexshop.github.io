const allProduct = document.querySelector(".grid-layout");

const items = allProductItems.map((element, index) => {
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
    <div class="product-action-box">
        <div class="product-action-top">
            <div class="btn-addcart" onclick="addCart(${index})">Add to cart</div>
            <ul class="action-box__list">
                <li class="action-box__item">
                    <a href="" class="action-box__link" title="Add to Compare">
                        <i class="ti-reload"></i>
                    </a>
                </li>
                <li class="action-box__item">
                    <a href="" class="action-box__link" title="Add to Wish List">
                        <i class="ti-heart"></i>
                    </a>
                </li>
                <li class="action-box__item">
                    <a href="" class="action-box__link" title="Quick View">
                        <i class="ti-search"></i>
                    </a>
                </li>
            </ul>
        </div>
        <ul class="product-rating">
            <li class="product-rating-star active">
                <i class="ti-star"></i>
            </li>
            <li class="product-rating-star active">
                <i class="ti-star"></i>
            </li>
            <li class="product-rating-star">
                <i class="ti-star"></i>
            </li>
            <li class="product-rating-star">
                <i class="ti-star"></i>
            </li>
            <li class="product-rating-star">
                <i class="ti-star"></i>
            </li>
        </ul>
    </div>
</div>
    `;
});
allProduct.innerHTML = items.join('');

function renderShopping() {
    const shopping = shoppingCart.map((element, index) => {
      return `
          <div class="child-1 child-div line">
              <div class="child-image">
                  <img src="img/sp1-10/${element.name}.jpg" alt="${element.name}">
              </div>
              <div class="child-text">
                  <p class="desc">${element.description}</p>
                  <p class="count">$${element.cost}</p>
                  <div class="child-icon child-div">
                      <p class="quantity">Qty: </p>
                      <input type="number" value="${element.quantity}">
                      <a href="">
                          <div class="ti-pencil"></div>
                      </a>
                      <a onclick="deleteCart(${index})">
                          <div class="ti-trash"></div>
                      </a>
                  </div>
              </div>
          </div>
          `;
    });
    document.querySelector(".child").innerHTML = shopping.join("");
    document.querySelector(".text-child-1").innerText = shoppingCart.length + " ";
    document.querySelector("#count").innerText = shoppingCart.length;
  }
  renderShopping();
  
  function addCart(index) {
    for (let i = 0; i < itemProduct.length; i++) {
      if (index == itemProduct[i].id) {
        shoppingCart.push({
          id: index,
          name: `${itemProduct[i].name}`,
          description: "Cableknit shawl-collar cardigan",
          cost: `${itemProduct[i].cost}`,
          costOld: `${itemProduct[i].costOld}`,
          quantity: `${itemProduct[i].quantity}`,
        });
      }
    }
    renderShopping()
    total()
  }
  
  function total() {
    const total = document.querySelector(".text-child-4");
    let subtotal = 0;
    shoppingCart.forEach((element) => {
      subtotal += element.cost * element.quantity;
    });
    total.innerText = "$" + subtotal.toFixed(2);
  }
  
  function deleteCart(index) {
    shoppingCart.splice(shoppingCart[index], 1);
    renderShopping()
    total()
  }
  

