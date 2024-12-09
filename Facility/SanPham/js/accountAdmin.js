const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function logoutAdmin() {
  // Lấy danh sách admins từ localStorage
  let admins = JSON.parse(localStorage.getItem('admins')) || [];

  // Tìm admin đang đăng nhập (isSignIn = 1) và đặt isSignIn về 0
  admins = admins.map(admin => {
      if (admin.isSignIn === 1) {
          return { ...admin, isSignIn: 0 }; // Cập nhật isSignIn về 0
      }
      return admin;
  });

  // Lưu lại danh sách admins vào localStorage
  localStorage.setItem('admins', JSON.stringify(admins));

  // Chuyển hướng sang trang đăng nhập
  window.location.href = './login_signupAdmin.html'; // Thay đổi đường dẫn phù hợp
}
