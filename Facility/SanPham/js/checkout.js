function displayCheckOut() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".input-checkout");
    let cartCost = localStorage.getItem('totalCost');
    let productTotal = document.querySelector(".total");
    if (cartItems && productContainer) {
        productContainer.innerHTML = ' ';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 >${item.title}</h6>  
                    <small class="text-muted">${item.price} Đ x ${item.inCart}</small>
                </div>
                <span class="text-muted">${item.inCart*item.price} Đ</span>
               
                
            </li>
            </li>
    `


        });
    }
    if (cartCost) {
        productContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between lh-condensed"><span>Tổng thành tiền: </span>
    <strong>${cartCost} Đ</strong></li>`
    } else { productContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between lh-condensed"><span>Tổng thành tiền: </span>
    <strong>0 Đ</strong></li>` }

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart1 span').textContent = productNumbers;
    }
}

function resetCart() {
    var newOrderProduct = localStorage.getItem('productsInCart');
    var newOrderCost = localStorage.getItem('totalCost');
    var newOrderNumber = localStorage.getItem('cartNumbers');
    localStorage.setItem('newOrderProduct', newOrderProduct);
    localStorage.setItem('newOrderCost', newOrderCost);
    localStorage.setItem('newOrderNumber', newOrderNumber);
    localStorage.removeItem('productsInCart');
    localStorage.removeItem('totalCost');
    localStorage.removeItem('cartNumbers');
}

function createIdOrder() {

    var a = ((Math.random().toString(36).slice(6)).toUpperCase());

    localStorage.setItem('IdOrder', a);
}
onLoadCartNumbers()
displayCheckOut();