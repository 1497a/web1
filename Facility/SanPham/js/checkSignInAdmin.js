function checkAdminAccess() {
    const admins = JSON.parse(localStorage.getItem('admins')) || [];

    const isLoggedIn = admins.some(admin => admin.isSignIn === 1);

    if (!isLoggedIn) {
        swal({
            icon: 'warning',
            title: 'Vui lòng đăng nhập',
            text: 'Bạn cần đăng nhập để truy cập trang admin.',
            confirmButtonText: 'Đăng nhập'
        }).then(() => {
            window.location.href = './login_signupAdmin.html';
        });
    }
}

checkAdminAccess();

function logoutAdmin() {
    const admins = JSON.parse(localStorage.getItem('admins')) || [];

    admins.forEach(admin => {
        if (admin.isSignIn === 1) {
            admin.isSignIn = 0;
        }
    });

    localStorage.setItem('admins', JSON.stringify(admins));

    window.location.href = getBasePath()+"/SanPham/html/admin/login_signupAdmin.html";
}

function afterSignInAdmin() {
    const admins = JSON.parse(localStorage.getItem('admins')) || [];

    const signedInAdmin = admins.find(admin => admin.isSignIn === 1);

    const userNameElements = document.querySelectorAll('.user_name a');
    console.log(signedInAdmin ? signedInAdmin.name : 'Admin chưa đăng nhập');

    if (signedInAdmin) {
        userNameElements.forEach(element => {
            element.innerHTML = signedInAdmin.name;
        });
    } else {
        userNameElements.forEach(element => {
            element.innerHTML = 'Admin chưa đăng nhập';
        });
    }
}

document.addEventListener('DOMContentLoaded', afterSignInAdmin);



