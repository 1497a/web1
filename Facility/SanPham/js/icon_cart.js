function addToCart(buttonElement) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find(user => user.isSignIn === 1);

    if (!currentUser) {
        alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
    

    if (!productId) {
        alert("Không tìm thấy sản phẩm để thêm vào giỏ hàng!");
        return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find(item => item.id === productId);

    if (!product) {
        alert("Sản phẩm không tồn tại!");
        return;
    }

    let quantity = parseInt(document.querySelector("#add-to-cart-btn").value);
    if (!quantity || quantity <= 0) {
        alert("Số lượng không hợp lệ!");
        return;
    }

    let cartItem = currentUser.cart.find(item => item.product.id === productId);

    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        currentUser.cart.push({
            product,
            quantity: quantity
        });
    }

    users = users.map(user => {
        if (user.isSignIn === 1) return currentUser;
        return user;
    });

    localStorage.setItem("users", JSON.stringify(users));
    updateCartIcon(currentUser.cart);
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
}

function updateCartIcon(cart) {
    const cartIcon = document.querySelector(".cart li span");
    if (cartIcon) {
        const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        cartIcon.innerText = totalQuantity;
    }
}


window.onload = function () {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(user => user.isSignIn === 1);
    if (currentUser) {
        updateCartIcon(currentUser.cart);
    }
};

function buyNow(productId) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find(user => user.isSignIn === 1);

    if (!currentUser) {
        alert("Vui lòng đăng nhập để mua sản phẩm!");
        return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find(item => item.id === productId);

    if (!product) {
        alert("Sản phẩm không tồn tại!");
        return;
    }

    let cartItem = currentUser.cart.find(item => item.product.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        currentUser.cart.push({
            product,
            quantity: 1
        });
    }

    users = users.map(user => {
        if (user.isSignIn === 1) return currentUser;
        return user;
    });

    localStorage.setItem("users", JSON.stringify(users));

    updateCartIcon(currentUser.cart);

    window.location.href = getBasePath()+"/SanPham/html/cart.html";
}



function displayCart() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const currentUser = users.find((user) => user.isSignIn === 1);

    if (!currentUser) {
        console.error("Không tìm thấy người dùng hiện tại!");
        return;
    }

    const cart = currentUser.cart || [];
    const cartContainer = document.querySelector(".product-in-cart");
    if (!cartContainer) {
        console.error("Không tìm thấy container để hiển thị giỏ hàng!");
        return;
    }

    if (cart.length === 0) {
        cartContainer.innerHTML = '<tr><td style="text-align:center" colspan="5">Giỏ hàng của bạn đang trống.</td></tr>';
        return;
    }

    cartContainer.innerHTML = "";

    cart.forEach(item => {
        const product = item.product;

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td class="product-title">
                <img src="${product.image.length>100?product.image:getBasePath() + product.image}" alt="${product.title}">
                <span title="${product.title}" style="display: inline-block; max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${product.title}</span>
            </td>
            <td class="product-price">${product.price.toLocaleString("vi-VN")} Đ</td>
            <td class="product-quantity">
                <button class="quantity-btn minus" onclick="updateQuantity(${product.id}, -1)">-</button><input type="number" class="quantity-input" value="${item.quantity}" min="1" id="quantity-${product.id}"><button class="quantity-btn plus" onclick="updateQuantity(${product.id}, 1)">+</button>
            </td>
            <td class="product-total" style="width:220px">${(item.quantity * product.price).toLocaleString("vi-VN")} Đ</td>
            <td class="product-action">
                <button onclick="deleteItem(${product.id})"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        `;

        cartContainer.appendChild(tr);

        const quantityInput = document.getElementById(`quantity-${product.id}`);
        if (quantityInput) {
            quantityInput.addEventListener("input", function() {
                const newQuantity = quantityInput.value;
                if (!isNaN(newQuantity) && newQuantity >= 1) {
                    updateQuantity(product.id, 0, newQuantity); // Tham số 0 vì không có thay đổi từ nút + hay -
                } else {
                    console.log("Số lượng không hợp lệ!");
                }
            });
        }
    });

    const total = cart.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
    <td colspan="4" style="text-align: right;">Tổng cộng:</td>
    <td class="total" style="font-weight: bold;">${total.toLocaleString("vi-VN")} Đ</td>
    `;
    
    cartContainer.appendChild(totalRow);
}

displayCart();

function updateQuantity(productId, change, directInput = null) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const currentUser = users.find((user) => user.isSignIn === 1);

    if (!currentUser) {
        console.error("Không tìm thấy người dùng hiện tại!");
        return;
    }

    let cart = currentUser.cart || [];

    const itemIndex = cart.findIndex(item => item.product.id === productId);

    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        let newQuantity;
        if (directInput !== null) {
            newQuantity = parseInt(directInput, 10);

            if (isNaN(newQuantity) || newQuantity < 1) {
                console.log("Số lượng phải là số nguyên lớn hơn hoặc bằng 1!");
                return;
            }
        } else {
            newQuantity = item.quantity + change;

            if (newQuantity < 1) {
                console.log("Số lượng không thể nhỏ hơn 1!");
                return;
            }
        }

        item.quantity = newQuantity;
    }

    currentUser.cart = cart;
    localStorage.setItem("users", JSON.stringify(users));

    displayCart();
    updateCartIcon(cart);
}


function deleteItem(productId) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(user => user.isSignIn === 1);

    if (!currentUser) {
        console.error("Không tìm thấy người dùng hiện tại!");
        return;
    }
    currentUser.cart = currentUser.cart.filter(item => item.product.id !== productId);
    localStorage.setItem("users", JSON.stringify(users));

    displayCart();
    updateCartIcon(currentUser.cart);
}

document.addEventListener("DOMContentLoaded", function () {
    const cartLink = document.querySelector("a.cart");

    if (cartLink) {
        cartLink.addEventListener("click", function (event) {
            const users = JSON.parse(localStorage.getItem("users")) || [];

            const isUserSignedIn = users.some(user => user.isSignIn === 1);

            if (!isUserSignedIn) {
                event.preventDefault();
                swal({
                    title: "Thông báo",
                    text: "Vui lòng đăng nhập để truy cập giỏ hàng!",
                    icon: "warning",
                    buttons: ["Đóng", "Đăng nhập"],
                }).then((willLogin) => {
                    if (willLogin) {
                        window.location.href = getBasePath()+"/SanPham/html/DangNhap.html";
                    }
                });
            }
        });
    }
});

