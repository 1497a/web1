function filterOrdersByStatus() {
    const selectedStatus = document.getElementById("status").value;
    const perPage = 10;

    const filteredOrders = orders.filter(order => {
        return selectedStatus === "Tất cả" || order.status === selectedStatus;
    });

    paginate(filteredOrders, perPage, renderOrders, {
        pagination: 'number_page',
        prevBtn: 'page_btn_prev',
        nextBtn: 'page_btn_next'
    });
}

function filterOrdersByDate() {
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;
    const from = new Date(fromDate);
    const to = new Date(toDate);

    const perPage = 5;

    const filteredOrders = orders.filter(order => {
        const orderDate = new Date(order.order_date);
        return (!fromDate || orderDate >= from) && (!toDate || orderDate <= to);
    });

    paginate(filteredOrders, perPage, renderOrders, {
        pagination: 'number_page',
        prevBtn: 'page_btn_prev',
        nextBtn: 'page_btn_next'
    });
}


document.getElementById('saveButton').addEventListener('click', function() {
    const orderId = parseInt(this.getAttribute('data-order-id'));

    const statusSelect = document.getElementById('status-select');
    const newStatus = statusSelect.value;

    const dateDeliverInput = document.getElementById('dateDeliver');
    let newDeliveryDate = dateDeliverInput.value;


    if (newStatus === "Đã giao thành công") {
        const today = new Date();
        newDeliveryDate = today.toISOString().split('T')[0];
    }

    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    const orderToUpdate = orders.find(order => order.id === orderId);

    if (orderToUpdate) {
        orderToUpdate.status = newStatus;
        orderToUpdate.delivery_date = newDeliveryDate;

        localStorage.setItem('orders', JSON.stringify(orders));

        renderOrders(orders);

        alert(`Cập nhật thành công`);
    } else {
        console.log('Không tìm thấy đơn hàng');
    }

    paginate(filteredOrders, 10, renderOrders, {
        pagination: 'number_page',
        prevBtn: 'page_btn_prev',
        nextBtn: 'page_btn_next'
    });
});


function renderOrders(paginatedOrders) {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = parseInt(urlParams.get('id'));
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    let filteredOrders = paginatedOrders;
    if (userId) {
        filteredOrders = filteredOrders.filter(order => order.userID === userId);
    }

    filteredOrders.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>#ĐH${order.id}</td>
            <td>${order.fullname}</td>
            <td>${order.address}</td>
            <td>${order.order_date}</td>
            <td>${order.delivery_date || "Chưa giao"}</td>
            <td>${order.status}</td>
            <td><button onclick="showOrderDetails(${order.id})" class="btn btn-primary btn-sm btn-detail" type="button" data-order-id="${order.id}" title="Xem chi tiết">Xem chi tiết</button></td>
        `;
        tbody.appendChild(row);
    });
    return filteredOrders;
}

const filteredOrders = renderOrders(orders); 
paginate(filteredOrders, 10, renderOrders, {
    pagination: 'number_page',
    prevBtn: 'page_btn_prev',
    nextBtn: 'page_btn_next'
});

function showOrderDetails(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(o => o.id === orderId);
    
    if (order) {
        document.getElementById("name").value = order.fullname;
        document.getElementById("email").value = order.email;
        document.getElementById("phone").value = order.phone;
        document.getElementById("status-select").value = order.status;
        document.getElementById("payment").value = order.pay_method;
        document.getElementById("address").value = order.address;
        document.getElementById("dateOrder").value = order.order_date;
        document.getElementById("dateDeliver").value = order.delivery_date;

        const saveButton = document.getElementById('saveButton');
        saveButton.setAttribute('data-order-id', orderId);

        if (order.status === "Đã hủy") {
            const formElements = document.querySelectorAll("#name, #email, #phone, #status-select, #payment, #address, #dateOrder, #dateDeliver, #saveButton");
            formElements.forEach(element => {
                element.disabled = true;
            });
        } else {
            const formElements = document.querySelectorAll("#name, #email, #phone, #status-select, #payment, #address, #dateOrder, #dateDeliver, #saveButton");
            formElements.forEach(element => {
                element.disabled = false;
            });
        }

        const productTableBody = document.querySelector(".order-products-table tbody");
        productTableBody.innerHTML = "";

        order.products.forEach(product => {
            const productRow = `
                <tr>
                    <td><img src="${getBasePath()+product.image}" alt="Product Image" class="product-image"></td>
                    <td>${product.title}</td>
                    <td>${product.quantity}</td>
                    <td>${(product.price * product.quantity).toLocaleString("vi-VN")} VND</td>
                </tr>
            `;
            
            productTableBody.innerHTML += productRow;
        });

        let orderTotal = 0;
        order.products.forEach(product => {
            orderTotal += product.quantity * product.price;
        });

        const shippingFee = 20000;
        
        document.querySelector(".order-summary .summary-row:nth-child(1) span:nth-child(2)").textContent = orderTotal.toLocaleString("vi-VN") + " VND"; // Tổng tiền sản phẩm
        document.querySelector(".order-summary .summary-row:nth-child(2) span:nth-child(2)").textContent = shippingFee.toLocaleString("vi-VN") + " VND"; // Phí vận chuyển
        document.querySelector(".order-summary .summary-row:nth-child(3) span:nth-child(2)").textContent = (orderTotal + shippingFee).toLocaleString("vi-VN") + " VND"; // Tổng tiền bao gồm phí vận chuyển

        document.getElementById("orderOverlay").style.display = "flex";
    }
}

function closeOrderDetail() {
    document.getElementById("orderOverlay").style.display = "none"; // Ẩn form
}

document.getElementById("closeButton").addEventListener("click", closeOrderDetail);


function openTab(tabId, element) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');

    const tabs = document.querySelectorAll('.tab_item');
    tabs.forEach(tab => tab.classList.remove('active_tab'));

    element.classList.add('active_tab');
}