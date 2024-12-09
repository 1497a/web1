const url = new URLSearchParams(window.location.search);
const code = url.get('code');
const codeInput = document.getElementById('code');
if (code) {
    codeInput.disabled = true;
} else{
    codeInput.disabled = false;
}

function render_edit_product() {
    let products = localStorage.getItem('products');
    products = JSON.parse(products);
    let inforProduct = document.querySelector(".form_add");

    const urlParams = new URLSearchParams(window.location.search);
    const codeFromUrl = urlParams.get('code');

    var code = document.getElementById('code');
    var title = document.getElementById('title');
    var amount = document.getElementById('amount');
    var status = document.getElementById('status');
    var category = document.getElementById('category');
    var Suppliers = document.getElementById('Suppliers');
    var price = document.getElementById('price');
    var description = document.getElementById('description');
    var image = document.getElementById("previewImg");

    if (inforProduct && codeFromUrl) {
        products.forEach((item) => {
            if (codeFromUrl === item.code) {
                // Gán giá trị cho các trường trong form
                code.value = item.code;
                title.value = item.title;
                amount.value = item.amount;

                // Thêm các tùy chọn và chọn giá trị tương ứng cho status
                const statusOptions = ["Còn hàng", "Hết hàng"].filter(opt => opt !== item.status);
                status.innerHTML = `
                    <option selected>${item.status}</option>
                    ${statusOptions.map(opt => `<option>${opt}</option>`).join("")}
                `;

                // Thêm các tùy chọn và chọn giá trị tương ứng cho category
                category.innerHTML += `
                    <option selected>${item.category}</option>
                    <option value="1">Bàn gỗ</option>
                    <option value="2">Kệ sách</option>
                    <option value="3">Rèm cửa</option>
                    <option value="4">Ghế sofa</option>
                    <option value="5">Phòng tắm</option>
                    <option value="6">Tủ quần áo</option>
                    <option value="7">Giường ngủ</option>
                    <option value="8">Đèn trang trí</option>
                `;

                // Thêm các tùy chọn và chọn giá trị tương ứng cho Suppliers
                Suppliers.innerHTML += `
                    <option selected>${item.Suppliers}</option>
                    <option value="1">Kenny Furniture</option>
                    <option value="2">First Impression</option>
                    <option value="3">Big One</option>
                    <option value="5">My home</option>
                    <option value="6">Đang cập nhật</option>
                `;

                price.value = item.price;

                // Hiển thị hình ảnh
                image.innerHTML = `<span><img class="thumb" id="myImg" src="${item.image.length <= 100 ? getBasePath() + item.image : item.image}" title=".png"><i class="fa fa-times time "></i></span>`;

                // Hiển thị mô tả
                renderDescription(item.description);
            }
        });
    } else {
        console.error("Không tìm thấy sản phẩm hoặc không có giá trị code trong URL.");
    }
}

render_edit_product();

function edit_product() {

    var products = localStorage.getItem('products');
    products = JSON.parse(products);


    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    var product = products.find(item => item.code === code);

    if (product) {
        var title = document.getElementById('title').value;
        var amount = document.getElementById('amount').value;
        var status = document.getElementById('status').value;
        var category = document.getElementById('category').value;
        var Suppliers = document.getElementById('Suppliers').value;
        var price = parseInt(document.getElementById('price').value, 10);
        var image = document.getElementById('files').files[0];  // Lấy file hình ảnh
        var description = document.getElementById('editableDiv').innerHTML;
        console.log(description);
        if (image) {
            var reader = new FileReader();
            reader.onload = function(e) {
                // Lấy base64 của hình ảnh
                var imageUrl = e.target.result;

                product.title = title;
                product.amount = amount;
                product.status = status;
                product.category = category;
                product.Suppliers = Suppliers;
                product.price = price;
                product.image = imageUrl;
                product.description = description;

                localStorage.setItem('products', JSON.stringify(products));

                alert('Cập nhật sản phẩm thành công!');
            };

            reader.readAsDataURL(image);
        } else {
            product.title = title;
            product.amount = amount;
            product.status = status;
            product.category = category;
            product.Suppliers = Suppliers;
            product.price = price;
            product.image = product.image;
            product.description = description;

            localStorage.setItem('products', JSON.stringify(products));

            alert('Cập nhật sản phẩm thành công!');
        }
    } else {
        console.error("Không tìm thấy sản phẩm với mã:", code);
    }
}


function renderDescription(description) {
    var descriptionContainer = document.getElementById('editableDiv');
    
    var formattedDescription = description.replace(/\n/g, '<br>');
    descriptionContainer.innerHTML = formattedDescription; 

    var descriptionTextarea = document.getElementById('description');
    descriptionTextarea.value = description; 
}



function add_product() {
    var code = document.getElementById('code').value;
    var title = document.getElementById('title').value;
    var amount = parseInt(document.getElementById('amount').value);
    var status = document.getElementById('status');
    var category = document.getElementById('category');
    var Suppliers = document.getElementById('Suppliers');
    var price = parseInt(document.getElementById('price').value);
    var image = document.getElementById('files').files[0];
    var description = saveContent();
    var statustext = status.options[status.selectedIndex].text;
    var categorytext = category.options[category.selectedIndex].text;
    var Supplierstext = Suppliers.options[Suppliers.selectedIndex].text;

    var productsData = localStorage.getItem("products");
    var products = productsData ? JSON.parse(productsData) : [];

    if (products.some(product => product.code === code)) {
        alert("Mã sản phẩm đã tồn tại. Vui lòng nhập mã khác!");
        return;
    }

    if (image) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var imageUrl = e.target.result;

            var newproduct = {
                id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
                code: code,
                title: title,
                amount: amount,
                status: statustext,
                category: categorytext,
                Suppliers: Supplierstext,
                price: price,
                image: imageUrl,
                description: description,
            };

            products.push(newproduct);
            localStorage.setItem("products", JSON.stringify(products));
            alert("Thêm mới sản phẩm thành công!");
        };

        reader.readAsDataURL(image);
    } else {
        console.error("Chưa chọn hình ảnh!");
    }

    paginate(filteredProducts, 10, renderProductTable, {
        pagination: 'number_page',
        prevBtn: 'page_btn_prev',
        nextBtn: 'page_btn_next',
    });
}


function handleProductAction() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const codeInput = document.getElementById('code');
    if (code) {

        edit_product();
    } else {
        add_product();
    }
}




function deleteProduct(button) {

    swal({
        title: "Cảnh báo",
        text: "Bạn có chắc chắn muốn xóa sản phẩm này không?",
        icon: "warning",
        buttons: ["Hủy bỏ", "Xác nhận"],
        dangerMode: true,
    }).then((isConfirmed) => {
        if (isConfirmed) {
            let products = JSON.parse(localStorage.getItem("products"));

            if (products) {
                products = products.filter(item => item.code !== button.id);

                localStorage.setItem("products", JSON.stringify(products));

                swal("Thành công", "Sản phẩm đã được xóa!", "success").then(() => {
                    location.reload();
                });
            }
        }
    });
}
