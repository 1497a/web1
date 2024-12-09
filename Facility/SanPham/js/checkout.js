function displayCheckOut() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(user => user.isSignIn === 1);

    if (!currentUser) {
        console.error("Không tìm thấy người dùng hiện tại!");
        return;
    }

    const cart = currentUser.cart || []; 
    const productContainer = document.querySelector(".input-checkout");
    const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

    if (!productContainer) {
        console.error("Không tìm thấy container để hiển thị sản phẩm trong thanh toán!");
        return;
    }

    productContainer.innerHTML = "";

    cart.forEach(item => {
        const formattedPrice = item.product.price.toLocaleString("vi-VN");
        const formattedTotal = (item.quantity * item.product.price).toLocaleString("vi-VN");
        productContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6>${item.product.title}</h6>
                    <small class="text-muted">${formattedPrice} Đ x ${item.quantity}</small>
                </div>
                <span class="text-muted">${formattedTotal} Đ</span>
            </li>
        `;
    });

    const formattedTotalCost = totalCost.toLocaleString("vi-VN");
    productContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
            <span>Tổng thành tiền:</span>
            <strong>${formattedTotalCost} Đ</strong>
        </li>
    `;
}


function onLoadCartNumbers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(user => user.isSignIn === 1);

    if (!currentUser) {
        console.error("Không tìm thấy người dùng hiện tại!");
        return;
    }

    const cart = currentUser.cart || [];
    const productNumbers = cart.reduce((total, item) => total + item.quantity, 0);

    const cartIndicator = document.querySelector('.cart1 span');
    if (cartIndicator) {
        cartIndicator.textContent = productNumbers;
    }
}


function resetCart() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(user => user.isSignIn === 1);

    if (!currentUser) {
        console.error("Không tìm thấy người dùng hiện tại!");
        return;
    }

    currentUser.cart = [];
    localStorage.setItem("users", JSON.stringify(users));
}

onLoadCartNumbers()
displayCheckOut();
