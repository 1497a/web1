function renderOrdersForLoggedInUser() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = users.find(user => user.isSignIn === 1);
    if (!loggedInUser) {
        console.error("Không có user nào đang đăng nhập!");
        return;
    }

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const userOrders = orders.filter(order => order.userID === loggedInUser.id);

    const orderContainer = document.querySelector('.order-history-container');
    if (!orderContainer) {
        console.error("Không tìm thấy phần tử '.order-history-container'!");
        return;
    }

    orderContainer.innerHTML = '';

    if (userOrders.length === 0) {
        orderContainer.innerHTML = '<p>Không có đơn hàng nào.</p>';
        return;
    }

    userOrders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'order-card delivered';

        const totalPrice = order.products.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);

        const itemsHTML = order.products.map(item => `
            <li>
                <div class="product-item">
                    <img src="${getBasePath() + item.image}" alt="${item.title}" class="product-img">
                    <p class="product-name">${item.title} <span style="font-weight: lighter;" class="product-quantity">x${item.quantity}</span></p>
                    <p class="product-price">${(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</p>
                </div>
            </li>
        `).join('');

        const cancelButton = order.status !== "Chưa xử lý" 
            ? `<button class="cancel-button" disabled>Hủy đơn</button>` 
            : `<button class="cancel-button" onclick="cancelOrder(${order.id})">Hủy đơn</button>`;

        let statusIcon = '';
        let statusClass = '';
        switch (order.status) {
            case 'Chưa xử lý':
                statusIcon = '&#x1F6A8;';
                statusClass = 'status-pending';
                break;
            case 'Đã xác nhận':
                statusIcon = '&#x2705;';
                statusClass = 'status-confirmed';
                break;
            case 'Đã giao thành công':
                statusIcon = '&#x2705;';
                statusClass = 'status-delivered';
                break;
            case 'Đã hủy':
                statusIcon = '&#x274C;';
                statusClass = 'status-canceled';
                break;
            default:
                statusIcon = '&#x1F6A8;';
                statusClass = 'status-pending';
                break;
        }

        orderCard.innerHTML = `
            <div class="order-header">
                <div class="order-id">
                    <p><strong>Mã đơn:</strong> #${order.id}</p>
                </div>
                <p class="order-status ${statusClass}"><span class="status-icon">${statusIcon}</span> ${order.status}</p>
            </div>
            <div class="order-details">
                <div class="order-dates-and-address">
                    <div>
                        <p><span style="display:inline-block;width:80px;font-weight:600">Ngày đặt: </span>${order.order_date}</p>
                        <p><span style="display:inline-block;width:80px;font-weight:600">Ngày giao: </span>${order.delivery_date}</p>
                    </div>
                    <div>
                        <p><strong>Họ tên người đặt:</strong> ${order.fullname}</p>
                        <p><strong>Địa chỉ giao hàng:</strong> ${order.address}</p>
                    </div>
                </div>
            </div>
            <div class="order-items" style="max-height: 300px; overflow-y: auto;">
                <ul>${itemsHTML}</ul>
            </div>
            <div class="order-total">
                <p><strong>Thành tiền:</strong> ${totalPrice.toLocaleString('vi-VN')} VNĐ</p>
            </div>
            <div class="order-actions">
                ${cancelButton}
            </div>
        `;

        orderContainer.appendChild(orderCard);
    });
}

renderOrdersForLoggedInUser();

function cancelOrder(orderId) {
    const isConfirmed = window.confirm("Bạn chắc chắn muốn hủy đơn hàng này?");
    
    if (isConfirmed) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        
        const orderIndex = orders.findIndex(order => order.id === orderId);
        
        if (orderIndex !== -1) {
            orders[orderIndex].status = 'Đã hủy';
            localStorage.setItem('orders', JSON.stringify(orders));
            renderOrdersForLoggedInUser();
        } else {
            alert("Không tìm thấy đơn hàng để hủy.");
        }
    } else {
        console.log("Hủy đơn hàng bị hủy bỏ.");
    }
}
