function render_Revenue_User() {
    const usersData = localStorage.getItem("users");
    if (!usersData) {
        console.log("No users data found in localStorage");
        return;
    }

    let users;
    try {
        users = JSON.parse(usersData);
    } catch (error) {
        console.error("Error parsing 'users' data from localStorage:", error);
        return;
    }

    const ordersData = localStorage.getItem("orders");
    let orders = [];
    if (ordersData) {
        try {
            orders = JSON.parse(ordersData);
        } catch (error) {
            console.error("Error parsing 'orders' data from localStorage:", error);
        }
    }

    const tableBody = document.querySelector("#table-users-revenue tbody");
    tableBody.innerHTML = "";

    const fromDateInput = document.getElementById("fromDate-Users").value;
    const toDateInput = document.getElementById("toDate-Users").value;
    const fromDate = fromDateInput ? new Date(fromDateInput) : null;
    const toDate = toDateInput ? new Date(toDateInput) : null;

    if (Array.isArray(users)) {
        const sortedUsers = users.map(user => {
            const userOrders = orders.filter(order => {
                const orderDate = new Date(order.order_date);
                return order.userID === user.id &&
                    (!fromDate || orderDate >= fromDate) &&
                    (!toDate || orderDate <= toDate);
            });

            const totalRevenue = userOrders.reduce((total, order) => {
                const orderTotal = order.products.reduce((sum, product) => {
                    return sum + (product.price * product.quantity);
                }, 0);
                return total + orderTotal;
            }, 0);

            return {
                ...user,
                totalRevenue
            };
        }).sort((a, b) => b.totalRevenue - a.totalRevenue);

        const topUsers = sortedUsers.slice(0, 5);

        topUsers.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.account}</td>
                <td>${user.totalRevenue.toLocaleString()} VND</td>
                <td>
                    <a href="./data_oder.html?id=${user.id}" class="btn btn-danger btn-sm">Xem đơn hàng</a>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        console.error("The 'users' data is not an array.");
    }
}

render_Revenue_User();

function renderProductsTableFromLocalStorage() {
    const productsData = localStorage.getItem("products");
    if (!productsData) return;

    let products;
    try {
        products = JSON.parse(productsData);
    } catch {
        return;
    }

    const ordersData = localStorage.getItem("orders");
    let orders = [];
    if (ordersData) {
        try {
            orders = JSON.parse(ordersData);
        } catch {}
    }

    const tableBody = document.querySelector("#table-product-revenue tbody");
    tableBody.innerHTML = "";

    const fromDateInput = document.getElementById("fromDate-Products").value;
    const toDateInput = document.getElementById("toDate-Products").value;
    const fromDate = fromDateInput ? new Date(fromDateInput) : null;
    const toDate = toDateInput ? new Date(toDateInput) : null;

    if (Array.isArray(products)) {
        products.forEach(product => {
            product.totalRevenue = orders.reduce((sum, order) => {
                const orderDate = new Date(order.order_date);
                if (
                    (!fromDate || orderDate >= fromDate) &&
                    (!toDate || orderDate <= toDate)
                ) {
                    const productInOrder = order.products.find(p => p.id === product.id);
                    if (productInOrder) {
                        return sum + (productInOrder.price * productInOrder.quantity);
                    }
                }
                return sum;
            }, 0);

            product.totalSold = orders.reduce((sum, order) => {
                const orderDate = new Date(order.order_date);
                if (
                    (!fromDate || orderDate >= fromDate) &&
                    (!toDate || orderDate <= toDate)
                ) {
                    const productInOrder = order.products.find(p => p.id === product.id);
                    if (productInOrder) {
                        return sum + productInOrder.quantity;
                    }
                }
                return sum;
            }, 0);
        });

        products.sort((a, b) => b.totalRevenue - a.totalRevenue);

        products.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.code}</td>
                <td>${product.title}</td>
                <td>${product.price.toLocaleString('vi-VN')}</td>
                <td>${product.category}</td>
                <td>${product.totalSold}</td>
                <td>${product.totalRevenue.toLocaleString('vi-VN')} VND</td>
            `;
            tableBody.appendChild(row);
        });
    }
}


document.querySelector(".filter-button").onclick = renderProductsTableFromLocalStorage;


renderProductsTableFromLocalStorage();

function updateStatistics() {

    const customers = JSON.parse(localStorage.getItem('users')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    const totalCustomers = customers.length;
    const totalProducts = products.length;
    const totalOrders = orders.length;
    const lowStockProducts = products.filter(product => product.amount < 10).length;
    document.querySelector('#statistic-admin').innerHTML = `
        <div class="col-sm-6">
            <div class="box_summary box_card box_shadow mb-3">
                <div class="card-header">TỔNG KHÁCH HÀNG</div>
                <div class="card-body">
                    <a href="./data_user.html" class="card-title">${totalCustomers} khách hàng</a>
                    <p class="card-text">Tổng số khách hàng được quản lý.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="box_summary box_card box_shadow mb-3">
                <div class="card-header">TỔNG SẢN PHẨM</div>
                <div class="card-body">
                    <a href="./data_product.html" class="card-title">${totalProducts} sản phẩm</a>
                    <p class="card-text">Tổng số sản phẩm được quản lý.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="box_summary box_card box_shadow mb-3">
                <div class="card-header">TỔNG ĐƠN HÀNG</div>
                <div class="card-body">
                    <a href="./data_oder.html" class="card-title">${totalOrders} đơn hàng</a>
                    <p class="card-text">Tổng số hóa đơn bán hàng trong tháng.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="box_summary box_card box_shadow mb-3">
                <div class="card-header">SẮP HẾT HÀNG</div>
                <div class="card-body">
                    <a href="#non-amount-product" class="card-title">${lowStockProducts} sản phẩm</a>
                    <p class="card-text">Số sản phẩm cảnh báo hết cần nhập thêm.</p>
                </div>
            </div>
        </div>
    `;
}

updateStatistics();

function renderLowStockProducts() {
    const productsData = localStorage.getItem("products");
    if (!productsData) return;

    let products;
    try {
        products = JSON.parse(productsData);
    } catch {
        console.error("Error parsing 'products' data from localStorage");
        return;
    }

    const tableBody = document.querySelector("#non-amount-product tbody");
    tableBody.innerHTML = "";

    products
        .filter(product => product.amount < 5)
        .forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.code}</td>
                <td>${product.title}</td>
                <td>${product.category}</td>
                <td>${product.amount}</td>
                <td>${product.price.toLocaleString('vi-VN')} VND</td>
            `;
            tableBody.appendChild(row);
        });
}

renderLowStockProducts()