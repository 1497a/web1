const users = [
    {
        name: "Triệu Thanh Phú",
        address: "191 Bà Triệu, Phường Lê Đại Hành",
        phone: "912-336-9598",
        account: "PetSuppliesCT@gmail.com",
        password: "poseydo5913"
    },
    {
        name: "Quán Thiếu Anh",
        address: "6, Hòa Khánh, Phường Hòa Khánh",
        phone: "717-437-8833",
        account: "FrenzyFlorists@gmail.com",
        password: "divagra3915"
    },
    {
        name: "Vưu Hữu Khôi",
        address: "37 Đoàn Kết, Phường Tân Sơn Nhĩ",
        phone: "703-472-4602",
        account: "iGotItComputers@gmail.com",
        password: "perebark226"
    },
    {
        name: "Bạc Xuân Hiếu",
        address: "27/785, Đường Trương Định",
        phone: "573-355-7157",
        account: "WackyWillie@gmail.com",
        password: "Mail33@998"
    }
];

function hashPassword(password) {
    return CryptoJS.SHA256(password).toString(); // Mã hóa mật khẩu bằng SHA256
}

const tbody = document.querySelector('#userTable');
console.log(tbody);

// Duyệt qua mảng đảo ngược và thêm mỗi người dùng vào bảng
users.forEach((user, index) => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.address}</td>
        <td>${user.phone}</td>
        <td>${user.account}</td>
        <td>${hashPassword(user.password)}</td>
        <td>
            <button title="Khóa" class="btn btn-primary btn-sm ban lock${index + 1}" type="button"><i class="fas fa-ban"></i></button>
            <button title="Mở khóa" class="btn btn-primary btn-sm unban unlock${index + 1}" type="button"><i class="fa-solid fa-unlock"></i></button>
        </td>
    `;
    
    tbody.appendChild(row);
});


