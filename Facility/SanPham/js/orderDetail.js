
const detailButton = document.getElementById('detailButton');
const orderOverlay = document.getElementById('orderOverlay');
const closeButton = document.getElementById('closeButton');

detailButton.addEventListener('click', () => {
    orderOverlay.style.display = 'flex';
});


closeButton.addEventListener('click', () => {
    orderOverlay.style.display = 'none';
});

