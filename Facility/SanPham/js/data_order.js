function showOrder() {
    var newOrderProduct = localStorage.getItem('newOrderProduct');
    var newOrderCost = localStorage.getItem('newOrderCost');
    var newOrderNumber = localStorage.getItem('newOrderNumber');
    var newOrderId = localStorage.getItem('IdOrder');
    newOrderProduct = JSON.parse(newOrderProduct);

    var order = document.querySelector('.new-order')
    var text = [];
    if (newOrderProduct && order && newOrderId) {
        order.innerHTML = '';
        Object.values(newOrderProduct).map(item => {
            text.push(`${item.title} (x${item.inCart})\n`);

        })
        console.log(text);
        order.innerHTML += `<td >${newOrderId}</td>
        <td >${text}</td>
        <td>${newOrderNumber}</td>
        <td>${newOrderCost} </td>
        <td>Chờ Xác Nhận</td>
        <td>
            <a class="btn btn-primary" href="./html/category/product.html">Đặt Lại</a>
        </td>`
    }

}
showOrder();