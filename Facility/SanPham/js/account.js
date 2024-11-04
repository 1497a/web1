let accountusers = [{
    email: "user@gmail.com",
    sdt: "0984253741",
    diachi: "Ly thai to- quan 5",
    name: "admin",
    password: "123456",
},
{
    email: "use32r@gmail.com",
    sdt: "0984253741",
    diachi: "Ly thai to- quan 5",
    name: "admin3434",
    password: "123456",
}
]
var account = localStorage.getItem('accountusers');
if (account == null) {
    localStorage.setItem('accountusers', JSON.stringify(accountusers));
}

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

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
        } else {
            errorElement.innerText = '';
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) { formElement.submit(); }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function(rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function(inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                }
            });
        });
    }

}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || 'Vui lòng nhập '
        }
    };
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Không Phải Là Email';
        }
    };
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}
Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}

function getInfor() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var sdt = document.getElementById('SDT').value;
    var diachi = document.getElementById('Adress').value;
    var name = document.getElementById('name').value;
    var tmp = {
        email: email,
        sdt: sdt,
        password: password,
        diachi: diachi,
        name: name,
    };
    return tmp;
}

function addAcount() {
    let account = getInfor();
    accountusers.push(account);
    localStorage.setItem("accountusers", JSON.stringify(accountusers));
}

function checkSignIn() {
    var email = document.getElementById('email1').value;
    var password = document.getElementById('password1').value;
    var errorMessage = document.getElementById('form-message');
    var accountuser = localStorage.getItem('accountusers');
    accountuser = JSON.parse(accountuser);

    // if (password && email) {
    //     for (let i = 0; i < admins.length; i++)
    //         if (email === admins[i].email) {
    //             if (password === admins[i].password) {
    //                 localStorage.setItem('issignin', 1);
    //                 localStorage.setItem('email', admins[i].email);
    //                 localStorage.setItem('password', admins[i].password);
    //                 // document.getElementById('signIn').action = "./html/admin/admin.html";
    //                 // this.submit();
    //             }
    //         }
    // }
    Object.values(accountuser).map(item => {
        console.log(email)
            if (email === item.email) {
                if (password === item.password) {
                    localStorage.setItem('issignin', 1);
                    localStorage.setItem('email', item.email);
                    localStorage.setItem('username', item.name);
                    localStorage.setItem('password', item.password);
                    document.getElementById('signIn').action = "../../Index.html";
                    this.submit();
                }
            }
            else errorMessage.innerText = "Sai Mật Khẩu";

        }
    )

    return false;
}
function getBasePath() {
    const pathArray = window.location.pathname.split('/');
    const facilityIndex = pathArray.indexOf('Facility');  // Tìm vị trí của 'Facility'

    if (facilityIndex !== -1) {
        // Tạo basePath tới 'SanPham/html' từ 'Facility'
        const basePath = pathArray.slice(0, facilityIndex + 1).join('/') + '/SanPham/html/';
        return window.location.origin + basePath;
    } else {
        // Trường hợp không tìm thấy 'Facility'
        console.warn("Không tìm thấy thư mục 'Facility' trong URL.");
        const fallbackPath = '/SanPham/html/';
        return window.location.origin + fallbackPath;
    }
}


// Sử dụng getBasePath() để tạo các href động
function afterSignIn() {
    var signin = localStorage.getItem('issignin');
    var username = localStorage.getItem('username') ?? 'error';
    let headeruser = document.querySelector(".icon-user");
    
    if (signin == 1) {
        headeruser.innerHTML = ' ';
        let basePath = getBasePath();
        
        headeruser.innerHTML += `
            <li class="nav-item dropdown">
                <a class="fas fa-user nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"></a>
                <ul class="dropdown-menu">
                    <a href="${basePath}cart.html" class="dropdown-item">
                        <li>Giỏ Hàng</li>
                    </a>
                    <a href="${basePath}user_order.html" class="dropdown-item">
                        <li>Đơn Hàng</li>
                    </a>
                    <a onclick="logout()" class="dropdown-item">
                        <li>logout</li>
                    </a>
                </ul>
            </li>
        `;
        headeruser.querySelector('li > a').innerText = username;
    }
}
afterSignIn();

function logout() {
    var signin = localStorage.getItem('issignin');
    if (signin) {
        localStorage.removeItem("issignin");
        location.reload();
    }
}

function showUserInfor() {
    let signin = localStorage.getItem('issignin');
    let email = localStorage.getItem('email');
    var accountuser = localStorage.getItem('accountusers');
    accountuser = JSON.parse(accountuser);
    let headeruser = document.querySelector(".user-infor");
    if (signin) {
        Object.values(accountuser).map(item => {
            if (email === item.email) {
                headeruser.innerHTML = ' ';

                headeruser.innerHTML += `
        <div class=" ">
            <label for="ten ">Họ tên</label>
            <input type="text " class="form-control " name="ten " id="ten " value="${item.name} " readonly=" ">
        </div>
        <div class=" ">
            <label for="email ">Email</label>
            <input type="text " class="form-control " name="email " id="email " value="${item.email} " readonly=" ">
        </div>
        <div class=" ">
            <label for="SĐT ">SĐT</label>
            <input type="text " class="form-control " name="SĐT " id="SĐT " value="${item.sdt} " readonly=" ">
        </div>
        <div class=" ">
            <label for="diachi ">Địa Chỉ Giao Hàng</label>
            <input type="text " class="form-control " name="diachi " id="diachi " value="${item.diachi} " >
        </div>
`;
            }
        })
    }
}
showUserInfor();