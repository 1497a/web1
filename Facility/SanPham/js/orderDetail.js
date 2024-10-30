// Lấy các phần tử cần thiết
const detailButton = document.getElementById('detailButton');
const orderOverlay = document.getElementById('orderOverlay');
const closeButton = document.getElementById('closeButton');

// Hàm mở overlay
detailButton.addEventListener('click', () => {
    orderOverlay.style.display = 'flex'; // Hiển thị overlay khi nhấn nút
});

// Hàm đóng overlay
closeButton.addEventListener('click', () => {
    orderOverlay.style.display = 'none'; // Ẩn overlay khi nhấn nút đóng
});
