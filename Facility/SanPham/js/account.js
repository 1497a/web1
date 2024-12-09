function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    function validate(inputElement, rule) {
        var errorElement = getParent(
            inputElement,
            options.formGroupSelector
        ).querySelector(options.errorSelector);
        var errorMessage;

        var rules = selectorRules[rule.selector];

        for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
        } else {
            errorElement.innerText = "";
        }

        return !errorMessage;
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                if (options.onSubmit) options.onSubmit(isFormValid);
            }
        };

        options.rules.forEach(function (rule) {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };

                inputElement.oninput = function () {
                    var errorElement = getParent(
                        inputElement,
                        options.formGroupSelector
                    ).querySelector(options.errorSelector);
                    errorElement.innerText = "";
                };
            });
        });
    }
}

new Validator({
    form: "#register", 
    formGroupSelector: ".input-form", 
    errorSelector: ".form-message",
    rules: [
        {
            selector: "#email",
            test: function (value) {
                if (!value) return "Email không được để trống";
                if (!/^[a-zA-Z0-9]+@gmail\.com$/.test(value))
                    return "Email không hợp lệ";

                const users = JSON.parse(localStorage.getItem("users")) || [];
                const existingEmail = users.find(user => user.email === value);
                if (existingEmail) return "Email này đã được đăng ký!";
            },
        },
        {
            selector: "#SDT",
            test: function (value) {
                if (!value) return "SĐT không được để trống";
                if (!/^\d{10}$/.test(value)) return "SĐT phải có 10 chữ số";
            },
        },
        {
            selector: "#username",
            test: function (value) {
                if (!value) return "Tên Người Dùng không được để trống";
                if (!/^[a-zA-Z0-9_]{8,16}$/.test(value)) 
                    return "Tên Người Dùng phải từ 8-16 ký tự và không chứa ký tự đặc biệt";

                const users = JSON.parse(localStorage.getItem("users")) || [];
                const existingUsername = users.find(user => user.username === value);
                if (existingUsername) return "Tên người dùng này đã tồn tại!";
            },
        },
        {
            selector: "#name",
            test: function (value) {
                if (!value) return "Tên không được để trống";
            },
        },
        {
            selector: "#password",
            test: function (value) {
                if (!value) return "Mật khẩu không được để trống";
                if (value.length < 6) return "Mật khẩu phải có ít nhất 6 ký tự";
            },
        },
        {
            selector: "#confirmpassword",
            test: function (value) {
                var password = document.querySelector("#password").value;
                if (value !== password) return "Mật khẩu xác nhận không khớp";
            },
        },
    ],

    onSubmit: function (isValid) {
        if (isValid) {
            addAccount();
        }
    }
});


function addAccount() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const email = document.getElementById("email").value;
    const phone = document.getElementById("SDT").value;
    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const newUser = {
        id: users.length + 1,
        username: username,
        name: name,
        address: "",
        phone: phone,
        account: email,
        password: password,
        gender:"",
        cart: [],
        isSignIn: 0,
        banned: 0,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "../../SanPham/html/Dangnhap.html";
}

function checkSignIn() {
    var username = document.getElementById("username1").value.trim();
    var password = document.getElementById("password1").value.trim();

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var user = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        if (user.banned === 1) {
            document.getElementById("password-message").innerText =
                "Tài khoản của bạn đã bị cấm, vui lòng liên hệ quản trị viên!";
            return false;
        }

        users.forEach(u => (u.isSignIn = u.username === username ? 1 : 0));

        localStorage.setItem("users", JSON.stringify(users));

        window.location.href = "../../Index.html";
    } else {
        document.getElementById("password-message").innerText =
            "Tên tài khoản hoặc mật khẩu không chính xác!";
        return false;
    }
}


function getBasePath() {
    const pathArray = window.location.pathname.split("/");
    const facilityIndex = pathArray.indexOf("Facility");

    if (facilityIndex !== -1) {
        const basePath = pathArray.slice(0, facilityIndex + 1).join("/");
        return window.location.origin + basePath;
    } else {
        console.warn("Không tìm thấy thư mục 'Facility' trong URL.");
        return window.location.origin;
    }
}

function afterSignIn() {
    let headeruser = document.querySelector(".icon-user");

    let users = JSON.parse(localStorage.getItem("users"));

    let loggedInUser = users.find((user) => user.isSignIn === 1);

    if (loggedInUser) {
        headeruser.innerHTML = " ";
        let basePath = getBasePath();

        headeruser.innerHTML += `
            <li class="nav-item dropdown">
                <a class="fas fa-user nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"></a>
                <ul class="dropdown-menu">
                    <a href="${basePath}/SanPham/html/accountInfo.html" class="dropdown-item">
                        <li>Tài khoản</li>
                    </a>
                    <a href="${basePath}/SanPham/html/user_order.html" class="dropdown-item">
                        <li>Đơn mua</li>
                    </a>
                    <a onclick="logout()" class="dropdown-item">
                        <li>Đăng xuất</li>
                    </a>
                </ul>
            </li>
        `;

        headeruser.querySelector("li > a").innerText = loggedInUser.name;
    }
}

afterSignIn();

function logout() {
    let users = JSON.parse(localStorage.getItem("users"));

    let loggedInUser = users.find((user) => user.isSignIn === 1);

    if (loggedInUser) {
        loggedInUser.isSignIn = 0;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.removeItem("currentUser");
        location.reload();
    }
}

const urlTinhThanh = "https://esgoo.net/api-tinhthanh/1/0.htm";
const urlQuanHuyen = "https://esgoo.net/api-tinhthanh/2/";
const urlPhuongXa = "https://esgoo.net/api-tinhthanh/3/";

let selectedTinhThanh = "";
let selectedQuanHuyen = "";
let selectedPhuongXa = "";

const headeruser = document.querySelector(".user-infor");

function showUserInfor() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (!headeruser) {
        console.error("Không tìm thấy container để hiển thị thông tin người dùng!");
        return;
    }

    const currentUser = users.find((user) => user.isSignIn === 1);
    if (currentUser) {
        headeruser.innerHTML = "";

        const addressParts = currentUser.address.split(",");
        let specificAddress = "";
        let remainingAddress = "";

        if (addressParts.length > 3) {
            specificAddress = addressParts.slice(0, addressParts.length - 3).join(",").trim();
            remainingAddress = addressParts.slice(-3).join(",").trim();
        } else {
            specificAddress = addressParts[0]?.trim() || "";
            remainingAddress = addressParts.slice(1).join(",").trim();
        }

        headeruser.innerHTML = `
             <div class="form-container">
                 <div class="form-group">
                     <label for="ten">Họ tên</label>
                     <input type="text" class="form-control" name="ten" id="ten" value="${currentUser.name}" readonly>
                 </div>
                 <div class="form-group">
                     <label for="email">Email</label>
                     <input type="text" class="form-control" name="email" id="email" value="${currentUser.account}" readonly>
                 </div>
                 <div class="form-group">
                     <label for="sdt">SĐT</label>
                     <input type="text" class="form-control" name="sdt" id="sdt" value="${currentUser.phone}" readonly>
                 </div>
                 <div class="form-group">
                     <label for="diachi">Địa chỉ</label>
                     <div class="input-wrapper">
                         <input type="text" class="form-control" name="diachi" id="diachi" value="${remainingAddress}">
                         <div id="addressDropdown" class="dropdown"></div>
                         <div id="districtDropdown" class="dropdown"></div>
                         <div id="wardDropdown" class="dropdown"></div>
                     </div>
                 </div>
                 <div class="form-group">
                     <label for="diachicuthe">Địa chỉ cụ thể</label>
                     <input type="text" class="form-control" name="diachicuthe" id="diachicuthe" value="${specificAddress}">
                 </div>
             </div>
             `;

        setupAddressDropdown("diachi");
    } else {
        console.error("Không tìm thấy người dùng hiện tại!");
    }
}

function placeOrder() {
    let users = JSON.parse(localStorage.getItem("users"));

    let signedInUser = users.find(user => user.isSignIn === 1);

    if (signedInUser) {
        const payMethod = document.querySelector('input[name="httt_ma"]:checked')?.value;

        if (!payMethod) {
            console.log("Vui lòng chọn phương thức thanh toán.");
            return;
        }

        let paymentDetails = {};

        if (payMethod === "Chuyển khoản") {
            paymentDetails.bankName = document.getElementById("bankName").value;
            paymentDetails.bankAccount = document.getElementById("bankAccount").value;
            paymentDetails.bankTransferDate = document.getElementById("bankTransferDate").value;
        } else if (payMethod === "Thanh toán qua thẻ") {
            paymentDetails.cardNumber = document.getElementById("cardNumber").value;
            paymentDetails.expiryDate = document.getElementById("expiryDate").value;
            paymentDetails.cvv = document.getElementById("cvv").value;
        }

        const specificAddress = document.getElementById("diachicuthe").value;
        const remainingAddress = document.getElementById("diachi").value;
        const fullAddress = `${specificAddress}, ${remainingAddress}`;

        if (!signedInUser.address || signedInUser.address.trim() === "") {
            const confirmSetDefault = confirm("Địa chỉ của tài khoản bạn đang để trống. Bạn có muốn sử dụng địa chỉ này làm mặc định?");

            if (confirmSetDefault) {
                signedInUser.address = fullAddress;

                localStorage.setItem("users", JSON.stringify(users));
            }
        }

        const order = {
            id: orders.length+1,
            fullname: signedInUser.name,
            email: signedInUser.account,
            phone: signedInUser.phone,
            status: "Chưa xử lý",
            pay_method: payMethod,
            address: fullAddress,
            order_date: new Date().toISOString().split('T')[0],
            delivery_date: "",
            products: signedInUser.cart.map(item => ({
                id: item.product.id,
                image: item.product.image,
                title: item.product.title,
                price: item.product.price,
                amount: item.product.amount,
                category: item.product.category,
                status: item.product.status,
                code: item.product.code,
                Suppliers: item.product.Suppliers,
                description: item.product.description,
                quantity: item.quantity
            })),
            userID: signedInUser.id
        };

        let orders = JSON.parse(localStorage.getItem("orders")) || [];

        orders.push(order);

        localStorage.setItem("orders", JSON.stringify(orders));

        alert("Đặt hàng thành công!");
        resetCart();
        window.location.href=getBasePath()+"/SanPham/html/thanks.html"
    } else {
        console.log("Không có người dùng đăng nhập.");
    }
}


function setupAddressDropdown(idAdress) {
    const diachiInput = document.getElementById(idAdress);
    const addressDropdown = document.getElementById("addressDropdown");
    const districtDropdown = document.getElementById("districtDropdown");
    const wardDropdown = document.getElementById("wardDropdown");

    diachiInput.addEventListener("click", function () {
        addressDropdown.style.display = "block";
        addressDropdown.innerHTML = ""; // Reset dropdown
        fetch(urlTinhThanh)
            .then((response) => response.json())
            .then((tinhThanhData) => {
                tinhThanhData.data.forEach((item) => {
                    const div = document.createElement("div");
                    div.textContent = item.full_name;
                    div.classList.add("dropdown-item");
                    div.addEventListener("click", function () {
                        selectedTinhThanh = item.full_name;
                        diachiInput.value = selectedTinhThanh;
                        addressDropdown.style.display = "none";
                        loadQuanHuyen(item.id);
                    });
                    addressDropdown.appendChild(div);
                });
            })
            .catch((error) =>
                console.error("Lỗi khi lấy dữ liệu tỉnh/thành:", error)
            );
    });


    function loadQuanHuyen(tinhThanhId) {
        fetch(`${urlQuanHuyen}${tinhThanhId}.htm`)
            .then((response) => response.json())
            .then((quanHuyenData) => {
                districtDropdown.style.display = "block";
                districtDropdown.innerHTML = "";
                quanHuyenData.data.forEach((item) => {
                    const div = document.createElement("div");
                    div.textContent = item.full_name;
                    div.classList.add("dropdown-item");
                    div.addEventListener("click", function () {
                        selectedQuanHuyen = item.full_name;
                        diachiInput.value = `${selectedQuanHuyen}, ${selectedTinhThanh}`;
                        districtDropdown.style.display = "none";
                        loadPhuongXa(item.id);
                    });
                    districtDropdown.appendChild(div);
                });
            })
            .catch((error) =>
                console.error("Lỗi khi lấy dữ liệu quận/huyện:", error)
            );
    }

    function loadPhuongXa(quanHuyenId) {
        fetch(`${urlPhuongXa}${quanHuyenId}.htm`)
            .then((response) => response.json())
            .then((phuongXaData) => {
                wardDropdown.style.display = "block";
                wardDropdown.innerHTML = "";
                phuongXaData.data.forEach((item) => {
                    const div = document.createElement("div");
                    div.textContent = item.full_name;
                    div.classList.add("dropdown-item");
                    div.addEventListener("click", function () {
                        selectedPhuongXa = item.full_name;
                        diachiInput.value = `${selectedPhuongXa}, ${selectedQuanHuyen}, ${selectedTinhThanh}`;
                        wardDropdown.style.display = "none";
                    });
                    wardDropdown.appendChild(div);
                });
            })
            .catch((error) => console.error("Lỗi khi lấy dữ liệu phường/xã:", error));
    }

    document.addEventListener("click", function (event) {
        if (
            !diachiInput.contains(event.target) &&
            !addressDropdown.contains(event.target)
        ) {
            addressDropdown.style.display = "none";
        }
        if (!districtDropdown.contains(event.target)) {
            districtDropdown.style.display = "none";
        }
        if (!wardDropdown.contains(event.target)) {
            wardDropdown.style.display = "none";
        }
    });
}


document.addEventListener("DOMContentLoaded", showUserInfor);
