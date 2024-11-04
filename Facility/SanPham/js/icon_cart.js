let carts = document.querySelectorAll(".add-cart");
const products = [
  {
    id: "ban1",
    title: "Bàn Gỗ Đẹp",
    link: "../../SanPham/html/category/detail_item/Ban/ban1.html",
    image: "../../SanPham/img/category/Ban/cafe-tron-go-dep.png",
    price: 4500000,
    inCart: 0,
  },
  {
    id: "ban2",
    title: "Bàn Gỗ Đẹp 2",
    link: "../../SanPham/html/category/detail_item/Ban/ban2.html",
    image: "../../SanPham/img/category/Ban/GTY-091.png",
    price: 3500000,
    inCart: 0,
  },
  {
    id: "den2",
    title: "Netviet-NV-9005-2",
    link: "../../SanPham/html/category/detail_item/den_trang_tri/den2.html",
    image: "../../SanPham/img/category/DenTrangTri/Netviet-NV-9005-2.png",
    price: 9700000,
    inCart: 0,
  },
  {
    id: "ban3",
    title: "Bàn Gỗ tròn",
    link: "../../SanPham/html/category/detail_item/Ban/ban3.html",
    image: "../../SanPham/img/category/Ban/tron-kinh.png",
    price: 23000000,
    inCart: 0,
  },
  {
    id: "ban4",
    title: "Bàn Gỗ dài",
    link: "../../SanPham/html/category/detail_item/Ban/ban4.html",
    image: "../../SanPham/img/category/Ban/go-dai.png",
    price: 1890000,
    inCart: 0,
  },
  {
    id: "den1",
    title: "Netviet-NV-8825",
    link: "../../SanPham/html/category/detail_item/den_trang_tri/den1.html",
    image: "../../SanPham/img/category/DenTrangTri/Netviet-NV-8825.png",
    price: 780000,
    inCart: 0,
  },

  {
    id: "den3",
    title: "Netviet-NV-8205-1",
    link: "../../SanPham/html/category/detail_item/den_trang_tri/den4.html",
    image: "../../SanPham/img/category/DenTrangTri/Netviet-NV-8205-1.png",
    price: 590000,
    inCart: 0,
  },
  {
    id: "den4",
    title: "Composite-AP-B948",
    link: "../../SanPham/html/category/detail_item/den_trang_tri/den3.html",
    image: "../../SanPham/img/category/DenTrangTri/Composite-AP-B948.png",
    price: 10000000,
    inCart: 0,
  },
  {
    id: "giuong1",
    link: "../../SanPham/html/category/detail_item/giuong_ngu/giuong1.html",
    image: "../../SanPham/img/category/GiuongNgu/Bellasofa-BS701.png",
    title: "Giường Bellasofa BS701",
    price: 11000000,
    inCart: 0,
  },
  {
    id: "giuong2",
    link: "../../SanPham/html/category/detail_item/giuong_ngu/giuong2.html",
    image: "../../SanPham/img/category/GiuongNgu/Furniland-01.png",
    title: "Giường ngủ FURNILAND - Jangin Haim (1.8m)",
    price: 5400000,
    inCart: 0,
  },
  {
    id: "giuong3",
    link: "../../SanPham/html/category/detail_item/giuong_ngu/giuong3.html",
    image: "../../SanPham/img/category/GiuongNgu/Furniland-02.png",
    title: "Giường ngủ FURNILAND - Jangin Christine (1m8)",
    price: 12000000,
    inCart: 0,
  },
  {
    id: "giuong4",
    link: "../../SanPham/html/category/detail_item/giuong_ngu/giuong4.html",
    image: "../../SanPham/img/category/GiuongNgu/Bellasofa-B1239.png",
    title: "Giường Bellasofa B1239",
    price: 9000000,
    inCart: 0,
  },
  {
    id: "ke1",
    link: "../../SanPham/html/category/detail_item/ke_sach/ke1.html",
    image: "../../SanPham/img/category/KeSach/go-4-tang-40.png",
    title: "Kệ sách gỗ 4 tầng 40",
    price: 510000,
    inCart: 0,
  },
  {
    id: "ke2",
    link: "../../SanPham/html/category/detail_item/ke_sach/ke2.html",
    image: "../../SanPham/img/category/KeSach/BOV-SPR-1980DK.png",
    title: "Kệ sách BIG ONE VIETNAM SPR-1980DK",
    price: 600000,
    inCart: 0,
  },
  {
    id: "ke3",
    link: "../../SanPham/html/category/detail_item/ke_sach/ke3.html",
    image: "../../SanPham/img/category/KeSach/RubikMH-1846.png",
    title: "Kệ trang trí Rubik Modulo Home 1846",
    price: 1100000,
    inCart: 0,
  },
  {
    id: "ke4",
    link: "../../SanPham/html/category/detail_item/ke_sach/ke4.html",
    image: "../../SanPham/img/category/KeSach/treo-Hurakids-2130-001.png",
    title: "Giá sách treo Hurakids 2130-001",
    price: 590000,
    inCart: 0,
  },
  {
    id: "tam1",
    link: "../../SanPham/html/category/detail_item/phong_tam/tam1.html",
    image: "../../SanPham/img/category/PhongTam/thanh-treo-giay.png",
    title: "Thanh treo giấy vệ sinh",
    price: 150000,
    inCart: 0,
  },
  {
    id: "tam2",
    link: "../../SanPham/html/category/detail_item/phong_tam/tam2.html",
    image: "../../SanPham/img/category/PhongTam/thanh-treo-khan.png",
    title: "Thanh sắt treo khăn",
    price: 109000,
    inCart: 0,
  },
  {
    id: "tam3",
    link: "../../SanPham/html/category/detail_item/phong_tam/tam3.html",
    image: "../../SanPham/img/category/PhongTam/ke-xa-phong.png",
    title: "Kệ chứa xà phòng",
    price: 190000,
    inCart: 0,
  },
  {
    id: "tam4",
    link: "../../SanPham/html/category/detail_item/phong_tam/tam4.html",
    image: "../../SanPham/img/category/PhongTam/den-DTY.png",
    title: "Bóng đèn DTY",
    price: 80000,
    inCart: 0,
  },
  {
    id: "rem1",
    link: "../../SanPham/html/category/detail_item/rem_cua/rem1.html",
    image: "../../SanPham/img/category/RemCua/num-01.png",
    title: "Rèm cửa 01",
    price: 900000,
    inCart: 0,
  },
  {
    id: "rem2",
    link: "../../SanPham/html/category/detail_item/rem_cua/rem2.html",
    image: "../../SanPham/img/category/RemCua/num-02.png",
    title: "Rèm cửa 02",
    price: 890000,
    inCart: 0,
  },
  {
    id: "rem3",
    link: "../../SanPham/html/category/detail_item/rem_cua/rem3.html",
    image: "../../SanPham/img/category/RemCua/num-03.png",
    title: "Rèm cửa 03",
    price: 750000,
    inCart: 0,
  },
  {
    id: "rem4",
    link: "../../SanPham/html/category/detail_item/rem_cua/rem4.html",
    image: "../../SanPham/img/category/RemCua/num-04.png",
    title: "Rèm cửa 04",
    price: 950000,
    inCart: 0,
  },
  {
    id: "sofa1",
    link: "../../SanPham/html/category/detail_item/sofa/sofa1.html",
    image: "../../SanPham/img/category/Sofa/kem.png",
    title: "Ghế sofa kem",
    price: 2500000,
    inCart: 0,
  },
  {
    id: "sofa2",
    link: "../../SanPham/html/category/detail_item/sofa/sofa2.html",
    image: "../../SanPham/img/category/Sofa/cafe.png",
    title: "Sofa cafe",
    price: 2300000,
    inCart: 0,
  },
  {
    id: "sofa3",
    link: "../../SanPham/html/category/detail_item/sofa/sofa3.html",
    image: "../../SanPham/img/category/Sofa/don-em-ai.png",
    title: "Ghế sofa đơn êm ái",
    price: 2600000,
    inCart: 0,
  },
  {
    id: "sofa4",
    link: "../../SanPham/html/category/detail_item/sofa/sofa4.html",
    image: "../../SanPham/img/category/Sofa/don-SFD18.png",
    title: "Sofa đơn SFD18",
    price: 5100000,
    inCart: 0,
  },
  {
    id: "tu1",
    link: "../../SanPham/html/category/detail_item/tu_quan_ao/tu1.html",
    image: "../../SanPham/img/category/TuQuanAo/BOV-WVR-1855L.png",
    title: "Tủ quần áo BIG ONE VIETNAM WVR-1855L",
    price: 4000000,
    inCart: 0,
  },
  {
    id: "tu2",
    link: "../../SanPham/html/category/detail_item/tu_quan_ao/tu1.html",
    image: "../../SanPham/img/category/TuQuanAo/B1241K.png",
    title: "Tủ áo B1241K",
    price: 5400000,
    inCart: 0,
  },
  {
    id: "tu3",
    link: "../../SanPham/html/category/detail_item/tu_quan_ao/tu1.html",
    image: "../../SanPham/img/category/TuQuanAo/Bellasofa-B1239.png",
    title: "Tủ Áo Bellasofa B1239",
    price: 3790000,
    inCart: 0,
  },
  {
    id: "tu4",
    link: "../../SanPham/html/category/detail_item/tu_quan_ao/tu1.html",
    image: "../../SanPham/img/category/TuQuanAo/B1238.png",
    title: "Tủ áo B1238",
    price: 5100000,
    inCart: 0,
  },
];
let checkSignIn2 = localStorage.getItem("issignin");

// Get the checkout link and button elements
// let checkoutButton = document.getElementById("checkout-button");
// let checkoutLink = document.getElementById("checkout-link");

// // Check if the user is signed in
// if (!checkSignIn2 || !checkSignIn2 === "1") {
//     // If not signed in, disable the button
//     checkoutButton.disabled = true; // Disable the button
//     checkoutButton.style.backgroundColor = "#cccccc"; // Change background color to indicate disabled state
//     checkoutButton.style.cursor = "not-allowed"; // Change cursor style

//     // Prevent the link from being followed
//     checkoutLink.addEventListener("click", (event) => {
//         event.preventDefault(); // Prevent the default link action
//         alert("Vui lòng đăng nhập để thanh toán!"); // Alert the user
//     });
// }  else {

//     // Check if there are items in the cart
//     let cartItems = localStorage.getItem("productsInCart");
//     if (!cartItems || Object.keys(JSON.parse(cartItems)).length === 0) {
//         checkoutButton.disabled = true;
//         checkoutButton.style.backgroundColor = "#cccccc"; 
//         checkoutButton.style.cursor = "not-allowed";

//         checkoutLink.addEventListener("click", (event) => {
//             event.preventDefault();
//             alert("Giỏ hàng của bạn hiện đang trống!");
//         });
//     } else {
//         // If there are items in the cart, allow normal functionality
//         checkoutLink.addEventListener("click", () => {
//             // Here, you can proceed with normal navigation
//             // The user is signed in and has items in their cart
//             // Optional: You can add any additional functionality here
//         });
//     }
// }
if (checkSignIn2 && checkSignIn2 === "1") {
  for (let j = 0; j < products.length; j++) {
    for (let i = 0; i < carts.length; i++) {
      carts[i].addEventListener("click", () => {
        if (carts[i].id === products[j].id) {
          cartNumbers(products[j]);
          totalCost(products[j]);
        }
      });
    }
  }
}

function checkSignIn1() {
  let checkSignIn = localStorage.getItem("issignin");
  if (!checkSignIn) alert("Vui Long Đăng Nhập Để Mua Hàng");
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  let checkSignIn2 = localStorage.getItem("issignin");

  if (!checkSignIn2 || checkSignIn2 === "false") {
    document.querySelector(".cart span").textContent = 0;
    return;
  }
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let checkSignIn = localStorage.getItem("issignin");

  if (!checkSignIn || checkSignIn === "false") {
    document.querySelector(".cart span").textContent = 0;
    return;
  }

  // Tiếp tục nếu người dùng đã đăng nhập
  let productNumbers = localStorage.getItem("cartNumbers");
  let qty = localStorage.getItem("newqty");
  qty = parseInt(qty);
  console.log("Can run");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    if (carts.length === 1) {
      localStorage.setItem("cartNumbers", productNumbers + qty);
      document.querySelector(".cart span").textContent = productNumbers + qty;
      console.log("Can run1");
    } else {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector(".cart span").textContent = productNumbers + 1;
      console.log("Can run2");
    }
  } else {
    if (carts.length === 1) {
      localStorage.setItem("cartNumbers", qty);
      document.querySelector(".cart span").textContent = qty;
      console.log("Can run3");
    } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector(".cart span").textContent = 1;
      console.log("Can run4");
    }
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let qty = localStorage.getItem("newqty");
  qty = parseInt(qty);
  console.log([product.title]);
  if (cartItems != null) {
    if (cartItems[product.title] == undefined) {
      cartItems = {
        ...cartItems,
        [product.title]: product,
      };
    }
    if (carts.length === 1) {
      cartItems[product.title].inCart += qty;
    } else {
      cartItems[product.title].inCart += 1;
    }
  } else {
    if (carts.length === 1) {
      product.inCart = qty;
    } else {
      product.inCart = 1;
    }
    cartItems = {
      [product.title]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  let qty = localStorage.getItem("newqty");
  console.log(product.price);
  qty = parseInt(qty);
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    if (carts.length === 1) {
      localStorage.setItem("totalCost", cartCost + qty * product.price);
    } else {
      localStorage.setItem("totalCost", cartCost + product.price);
    }
  } else {
    if (carts.length === 1) {
      localStorage.setItem("totalCost", qty * product.price);
    } else {
      localStorage.setItem("totalCost", product.price);
    }
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".product");
  let cartCost = localStorage.getItem("totalCost");
  console.log(productContainer);
  let productTotal = document.querySelector(".total");
  if (cartItems && productContainer) {
    productContainer.innerHTML = " ";
    Object.values(cartItems).map((item) => {
      console.log(item.name);
      productContainer.innerHTML += `
           <div class="product-title">
            <button class="fa fa-trash" id="${item.id}" onclick="deleteItem(${
        item.id
      })" aria-hidden="true"></button>
                <img src ="${item.image}">
                <span>${item.title}</span>
            </div>
            <div class="product-price">${item.price} Đ</div>
            <div class="product-quantity">  ${item.inCart}</div>    
            <div class="product-total">${item.inCart * item.price} Đ</div>
            `;
    });
    productTotal.innerHTML += `
        <div class="grandTotal">
        <a class="grandTotal-title">Tổng Cộng:</a>
        <a class="valueTotal">${cartCost} Đ</a>
        </div>
        
        `;
  }
}

function remove_Item(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.title] == undefined) {
      cartItems = {
        ...cartItems,
        [product.title]: product,
      };
    }
    cartItems[product.title].inCart = cartItems[product.title].inCart;
  } else {
    if (carts.length === 1) {
      product.inCart = qty;
    } else {
      product.inCart = product.inCart;
    }
    cartItems = {
      [product.title]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function retotalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);

    localStorage.setItem(
      "totalCost",
      cartCost + product.price * product.inCart
    );
  } else {
    localStorage.setItem("totalCost", product.price * product.inCart);
  }
}

function deleteItem(button) {
  console.log(button);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartItem = localStorage.getItem("cartNumbers");
  cartItem = parseInt(cartItem);
  let cartCost = localStorage.getItem("totalCost");
  if (cartItems) {
    localStorage.removeItem("productsInCart");
    localStorage.removeItem("totalCost");
    Object.values(cartItems).map((item) => {
      if (item.id === button.id) {
        cartItem = cartItem - item.inCart;
      } else {
        remove_Item(item);
        retotalCost(item);
      }
      localStorage.setItem("cartNumbers", JSON.stringify(cartItem));
    });
  }
  location.reload();
}
if (checkSignIn2) {
    displayCart();
    onLoadCartNumbers();
}
