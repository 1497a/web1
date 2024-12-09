function hashPassword(password) {
    return CryptoJS.SHA256(password).toString(); // Mã hóa mật khẩu bằng SHA256
}

function renderUsers(paginatedUsers) {
    const tbody = document.querySelector('#userTable');
    if (tbody) {
        tbody.innerHTML = ''; // Xóa nội dung cũ trước khi render
        paginatedUsers.forEach(user => {
            const row = document.createElement('tr');
            row.id = `user-${user.id}`; // Gắn ID cho hàng để truy cập dễ hơn
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.phone}</td>
                <td>${user.account}</td>
                <td>${user.address}</td>
                <td>${user.gender}</td>
                <td>
                    <button
                    title ="Khóa người dùng" 
                        class="btn btn-primary btn-sm ban" 
                        type="button" 
                        data-user-id="${user.id}" 
                        style="${user.banned === 1 ? 'display: none;' : 'display: inline-block;'}">
                        <i class="fas fa-ban"></i> 
                    </button>
                    <button 
                        title ="Mở khóa người dùng"
                        class="btn btn-primary btn-sm unban" 
                        type="button" 
                        data-user-id="${user.id}" 
                        style="${user.banned === 0 ? 'display: none;' : 'display: inline-block;'}">
                        <i class="fa-solid fa-unlock"></i> 
                    </button>
                    <button 
                        title ="Chỉnh sửa thông tin"
                        class="btn btn-primary btn-sm edit" 
                        type="button" 
                        style="display: inline-block;"
                        onclick="openEditUserModal(${user.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });

        // Gắn sự kiện cho các nút sau khi render
        tbody.querySelectorAll('.ban').forEach(button => {
            button.addEventListener('click', () => toggleBanUnban(button, 'ban'));
        });

        tbody.querySelectorAll('.unban').forEach(button => {
            button.addEventListener('click', () => toggleBanUnban(button, 'unban'));
        });
    }
}


function toggleBanUnban(button, action) {
    const userId = parseInt(button.dataset.userId); // Lấy ID user từ nút
    const isBanAction = action === "ban";
    const confirmText = isBanAction 
        ? "Bạn có chắc chắn là muốn cấm tài khoản này?" 
        : "Bạn có chắc chắn là muốn gỡ cấm tài khoản này?";
    const successText = isBanAction 
        ? "Đã cấm thành công!" 
        : "Đã gỡ cấm thành công!";

    swal({
            title: "Cảnh báo",
            text: confirmText,
            buttons: ["Hủy bỏ", "Đồng ý"],
        })
        .then(willProceed => {
            if (willProceed) {
                // Lấy danh sách user từ localStorage
                let users = JSON.parse(localStorage.getItem("users")) || [];
                let user = users.find(u => u.id === userId);

                if (user) {
                    // Cập nhật trạng thái
                    user.banned = isBanAction ? 1 : 0;
                    localStorage.setItem("users", JSON.stringify(users));

                    // Cập nhật hiển thị nút
                    const row = document.querySelector(`#user-${userId}`);
                    const banButton = row.querySelector('.ban');
                    const unbanButton = row.querySelector('.unban');
                    
                    if (isBanAction) {
                        banButton.style.display = "none";
                        unbanButton.style.display = "inline-block";
                    } else {
                        banButton.style.display = "inline-block";
                        unbanButton.style.display = "none";
                    }

                    // Hiển thị thông báo thành công
                    swal(successText, { icon: "success" });
                } else {
                    swal("Lỗi!", "Không tìm thấy tài khoản.", { icon: "error" });
                }
            }
        });
}

// Gọi hàm phân trang và render danh sách
paginate(users, 10, renderUsers, {
    pagination: 'number_page',
    prevBtn: 'page_btn_prev',
    nextBtn: 'page_btn_next'
});

function closeEditUserModal() {
    document.querySelector('#editUserModal').style.display = 'none';
}

function openEditUserModal(userId) {
    // Lấy thông tin người dùng từ `localStorage` hoặc từ dữ liệu đã tải vào
    const users = JSON.parse(localStorage.getItem('users')) || [];
    let user = null;

    // Tìm người dùng nếu userId được truyền vào
    if (userId) {
        user = users.find(u => u.id === userId);
    }

    if (user) {
        // Điền thông tin vào các trường trong form nếu có user
        document.querySelector('#editUserId').value = user.id;
        document.querySelector('#editUsername').value = user.account;
        document.querySelector('#editFullName').value = user.name;
        document.querySelector('#editAddress').value = user.address;
        document.querySelector('#editPhone').value = user.phone;
        document.querySelector('#editEmail').value = user.account;

        // Thiết lập giới tính
        document.querySelector(`input[name="editGender"][value="${user.gender}"]`).checked = true;

        // Xử lý ngày sinh
        if (user.birthdate) {
            const date = new Date(user.birthdate); // Chuyển chuỗi thành Date
            const formattedDate = date.toISOString().split('T')[0]; // Chuyển sang 'yyyy-mm-dd'
            document.querySelector('#editBirthday').value = formattedDate; // Điền vào input ngày sinh
        } else {
            document.querySelector('#editBirthday').value = ''; // Nếu không có ngày sinh
        }

        document.getElementById('labelPassword').style.display = 'none';
        document.getElementById('labelconfirmPassword').style.display = 'none';
        // Thiết lập hành động lưu thay đổi
        document.getElementById('saveChangesBtn').onclick = function() {
            saveUserChanges(userId);
        };
    } else {
        // Nếu không có userId, form sẽ mở để thêm người dùng mới
        document.querySelector('#editUserId').value = ''; // Không có ID cho người dùng mới
        document.querySelector('#editUsername').value = '';
        document.querySelector('#editFullName').value = '';
        document.querySelector('#editAddress').value = '';
        document.querySelector('#editPhone').value = '';
        document.querySelector('#editEmail').value = '';
        document.querySelector('input[name="editGender"]').checked = false;
        document.querySelector('#editBirthday').value = '';

        // Hiển thị trường password và confirm password khi thêm mới người dùng
        document.getElementById('labelPassword').style.display = 'flex';
        document.getElementById('labelconfirmPassword').style.display = 'flex';
        document.getElementById('editPassword').style.display = 'flex';
        document.getElementById('editConfirmPassword').style.display = 'flex';

        // Thiết lập hành động lưu cho người dùng mới
        document.getElementById('saveChangesBtn').onclick = function() {
            saveUserChanges(); // Không cần truyền userId, vì đây là thêm mới
        };
    }

    // Hiển thị modal overlay chỉnh sửa
    document.querySelector('#editUserModal').style.display = 'block';
    setupAddressDropdown("editAddress");
}

function validateUserForm(isNewUser = false) {
    let isValid = true;

    // Reset thông báo lỗi
    document.querySelectorAll('.error-message').forEach(error => error.textContent = '');

    // Kiểm tra tài khoản
    const username = document.querySelector('#editUsername').value.trim();
    if (!username) {
        document.querySelector('#editUsernameError').textContent = 'Tài khoản không được để trống.';
        isValid = false;
    }

    // Kiểm tra họ và tên
    const fullName = document.querySelector('#editFullName').value.trim();
    if (!fullName) {
        document.querySelector('#editFullNameError').textContent = 'Họ và tên không được để trống.';
        isValid = false;
    }

    // Kiểm tra địa chỉ
    const address = document.querySelector('#editAddress').value.trim();
    if (!address) {
        document.querySelector('#editAddressError').textContent = 'Địa chỉ không được để trống.';
        isValid = false;
    }

    // Kiểm tra số điện thoại
    const phone = document.querySelector('#editPhone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        document.querySelector('#editPhoneError').textContent = 'Số điện thoại không hợp lệ (10 chữ số).';
        isValid = false;
    }

    // Kiểm tra email
    const email = document.querySelector('#editEmail').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.querySelector('#editEmailError').textContent = 'Email không hợp lệ.';
        isValid = false;
    }

    // Kiểm tra giới tính
    const gender = document.querySelector('input[name="editGender"]:checked');
    if (!gender) {
        document.querySelector('#editGenderError').textContent = 'Vui lòng chọn giới tính.';
        isValid = false;
    }

    // Kiểm tra ngày sinh
    const birthdate = document.querySelector('#editBirthday').value.trim();
    if (!birthdate) {
        document.querySelector('#editBirthdayError').textContent = 'Ngày sinh không được để trống.';
        isValid = false;
    }

    // Nếu thêm mới người dùng, kiểm tra mật khẩu
    if (isNewUser) {
        const password = document.querySelector('#editPassword').value.trim();
        const confirmPassword = document.querySelector('#editConfirmPassword').value.trim();

        if (!password) {
            document.querySelector('#editPasswordError').textContent = 'Mật khẩu không được để trống.';
            isValid = false;
        } else if (password.length < 6) {
            document.querySelector('#editPasswordError').textContent = 'Mật khẩu phải có ít nhất 6 ký tự.';
            isValid = false;
        }

        if (password !== confirmPassword) {
            document.querySelector('#editConfirmPasswordError').textContent = 'Mật khẩu nhập lại không khớp.';
            isValid = false;
        }
    }

    return isValid;
}


function saveUserChanges(userId) {
    // Xác định đây là thêm mới hay chỉnh sửa
    const isNewUser = !userId;

    // Gọi hàm validate
    if (!validateUserForm(isNewUser)) {
        return; // Nếu không hợp lệ, dừng lại
    }

    // Lấy dữ liệu từ form
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const username = document.querySelector('#editUsername').value.trim();
    const fullName = document.querySelector('#editFullName').value.trim();
    const address = document.querySelector('#editAddress').value.trim();
    const phone = document.querySelector('#editPhone').value.trim();
    const email = document.querySelector('#editEmail').value.trim();
    const gender = document.querySelector('input[name="editGender"]:checked').value;
    const birthdate = document.querySelector('#editBirthday').value.trim();
    const password = isNewUser ? document.querySelector('#editPassword').value.trim() : null;

    if (isNewUser) {
        // Thêm mới người dùng
        const newUser = {
            id: users.length + 1,
            username: username,
            name: fullName,
            address: address,
            phone: phone,
            account: email,
            gender: gender,
            birthdate: birthdate,
            password: password,
            banned: 0,
            cart: [],
        };
        users.push(newUser);

        // Hiển thị thông báo thành công
        swal("Thành công!", "Người dùng mới đã được thêm!", "success");
    } else {
        // Cập nhật người dùng
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            users[userIndex] = {
                ...users[userIndex],
                username: username,
                name: fullName,
                address: address,
                phone: phone,
                account: email,
                gender: gender,
                birthdate: birthdate,
            };

            // Hiển thị thông báo thành công
            swal("Thành công!", "Thông tin người dùng đã được cập nhật!", "success");
        }
    }

    // Lưu lại vào localStorage và đóng modal
    localStorage.setItem('users', JSON.stringify(users));
    document.querySelector('#editUserModal').style.display = 'none';

    // Render lại danh sách người dùng nếu cần
    paginate(users, 10, renderUsers, {
        pagination: 'number_page',
        prevBtn: 'page_btn_prev',
        nextBtn: 'page_btn_next',
    });
}

document.getElementById('editUserForm').onsubmit = function (event) {
    event.preventDefault(); // Ngăn reload trang
    saveUserChanges(parseInt(document.querySelector('#editUserId').value));
};

