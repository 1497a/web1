function renderProductTable(data) {
    const tbody = document.getElementById('product_order');
    let html = '';
    data.forEach(item => {
        html += `
            <tr>
                <td>${item.code}</td>
                <td>${item.title}</td>
                <td><img src="${item.image.length > 100 ? item.image : getBasePath() + item.image}" /></td>
                <td>${item.amount}</td>
                <td>${item.status}</td>
                <td>${item.price.toLocaleString("vi-VN")} đ</td>
                <td>${item.category}</td>
                <td>
                    <button class="btn btn-primary btn-sm trash" onclick="deleteProduct(this)" id="${item.code}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <a href="../../html/admin/form_add_product.html?code=${encodeURIComponent(item.code)}">
                        <button class="btn btn-primary btn-sm edit">
                            <i class="fas fa-edit"></i>
                        </button>
                    </a>
                </td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

paginate(products, 10, renderProductTable, {
    pagination: 'number_page',
    prevBtn: 'page_btn_prev',
    nextBtn: 'page_btn_next'
});



function filterProductsByCategory() {
    const categorySelect = document.getElementById('category');
    const selectedCategory = categorySelect.value;

    const filteredProducts = selectedCategory === "Tất cả sản phẩm"
        ? products
        : products.filter(product => product.category === selectedCategory);

    paginate(filteredProducts, 10, renderProductTable, {
        pagination: 'number_page',
        prevBtn: 'page_btn_prev',
        nextBtn: 'page_btn_next'
    });
}

function closeEditUserModal() {
    document.querySelector('#editUserModal').style.display = 'none';
}
