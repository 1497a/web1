

function renderProduct(paginatedProducts) {
    const html = paginatedProducts.map(item => `
        <div class="lazyload col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div class="lazyload_item popup category_right_content_item">
                <img src="${item.image.length > 100 ? item.image : getBasePath() + item.image}" alt="${item.title}">
                <h5><a href="">${item.title}</a></h5>
                <p>${item.price.toLocaleString("vi-VN")} <u>Đ</u></p>
                <ul class="popup_item">
                    <a title="Mua hàng" class="add-cart" id="${item.id}">
                        <li class="fas fa-cart-shopping" onclick="buyNow(${item.id})"></li>
                    </a>
                    <a title="Chi tiết" id="${item.id}" href="../category/detail_item/product_detail.html?id=${item.id}">
                        <li class="fas fa-eye"></li>
                    </a>
                </ul>
            </div>
        </div>
    `).join('');

    document.getElementById('product').innerHTML = html;
    bindCartEvents(); // Gán sự kiện cho nút "Mua hàng"
}

// Tích hợp phân trang
function initializePagination(filteredProducts) {
    const perPage = 12;

    paginate(filteredProducts, perPage, renderProduct, {
        pagination: 'number_page',
        prevBtn: 'page_btn_prev',
        nextBtn: 'page_btn_next'
    });
}

const filteredProducts = products;
initializePagination(filteredProducts);

function bindCartEvents() {
    const carts = document.querySelectorAll('.add-cart');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const isUserSignedIn = users.some(user => user.isSignIn === 1);

    carts.forEach(cart => {
        cart.addEventListener('click', () => {
            if (isUserSignedIn) {
                const product = products.find(p => p.id === cart.id);
                if (product) {
                    cartNumbers(product);
                    totalCost(product);
                }
            } else {
                alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
            }
        });
    });
}


function filterProducts(shouldRender = true) {
    const searchInput = document.getElementById("myInput").value.trim();
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]:checked');
    const priceCheckboxes = document.querySelectorAll('input[name="price"]:checked');

    const categories = Array.from(categoryCheckboxes).map(checkbox => checkbox.value);
    const brands = Array.from(brandCheckboxes).map(checkbox => checkbox.value);
    const prices = Array.from(priceCheckboxes).map(checkbox => checkbox.value);

    let filteredProducts = products;

    // Lọc theo từ khóa
    if (searchInput) {
        filteredProducts = filteredProducts.filter(product => 
            product.title.toLowerCase().includes(searchInput.toLowerCase())
        );
    }

    // Lọc theo danh mục
    if (categories.length > 0 && !categories.includes("all")) {
        filteredProducts = filteredProducts.filter(product => 
            categories.includes(product.category)
        );
    }

    // Lọc theo thương hiệu
    if (brands.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            brands.includes(product.Suppliers)
        );
    }

    // Lọc theo giá
    if (prices.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return prices.some(price => {
                const [min, max] = price.split('-').map(Number);
                if (max) {
                    return product.price >= min && product.price <= max;
                } else {
                    return product.price >= min;
                }
            });
        });
    }

    if (shouldRender) {
        initializePagination(filteredProducts);
    }

    return filteredProducts;
}

function arrangeAndFilterProducts() {
    const arrange = document.getElementById("arrange").value;
    let filteredProducts = filterProducts(false);

    if (arrange === "az") {
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (arrange === "za") {
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (arrange === "priceAsc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (arrange === "priceDesc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    initializePagination(filteredProducts);
}



document.querySelectorAll('input[name="category"], input[name="brand"], input[name="price"]').forEach(input => {
    input.addEventListener('change', function () {
        arrangeAndFilterProducts();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);

    const selectedCategories = JSON.parse(urlParams.get('categories') || '[]');
    const selectedBrands = JSON.parse(urlParams.get('brands') || '[]');
    const searchKey = urlParams.get('key') || '';  

    selectedCategories.forEach(category => {
        const checkbox = document.querySelector(`input[name="category"][value="${category}"]`);
        if (checkbox) checkbox.checked = true;
    });

    selectedBrands.forEach(brand => {
        const checkbox = document.querySelector(`input[name="brand"][value="${brand}"]`);
        if (checkbox) checkbox.checked = true;
    });

    document.getElementById("myInput").value = searchKey;

    const nameCategoryElement = document.getElementById("name-category");
    nameCategoryElement.innerHTML = `<a href="javascript:void(0)">${selectedCategories}</a>`;

    filterProducts();
});

function redirectToProductPage() {
    const searchInput = document.getElementById("myInput").value.trim();

    if (searchInput) {
        const url = getBasePath()+`/SanPham/html/category/product.html?key=${encodeURIComponent(searchInput)}`;
        window.location.href = url;
    } else {
        alert("Vui lòng nhập từ khóa tìm kiếm.");
    }
}