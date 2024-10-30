// const itemsliderbar = document.querySelectorAll(".ca_li")
// itemsliderbar.forEach(function(menu,index){
//     menu.addEventListener("click",function(){
//         menu.classList.toggle("block")
//     })
// })


// ------------------------------- paging -------------------------------
const product = [{
        id: "ban1",
        title: "Bàn Gỗ Đẹp",
        link: "detail_item/Ban/ban1.html",
        image: "../../img/category/Ban/cafe-tron-go-dep.png",
        price: 4500000,
        inCart: 0
    },
    {
        id: "ban2",
        title: "Bàn Gỗ Đẹp 2",
        link: "detail_item/Ban/ban2.html",
        image: "../../img/category/Ban/GTY-091.png",
        price: 3500000,
        inCart: 0
    },
    {
        id: "den2",
        title: "Netviet-NV-9005-2",
        link: "detail_item/den_trang_tri/den2.html",
        image: "../../img/category/DenTrangTri/Netviet-NV-9005-2.png",
        price: 9700000,
        inCart: 0
    },
    {
        id: "ban3",
        title: "Bàn Gỗ tròn",
        link: "detail_item/Ban/ban3.html",
        image: "../../img/category/Ban/tron-kinh.png",
        price: 23000000,
        inCart: 0
    },
    {
        id: "ban4",
        title: "Bàn Gỗ dài",
        link: "detail_item/Ban/ban4.html",
        image: "../../img/category/Ban/go-dai.png",
        price: 1890000,
        inCart: 0
    },
    {
        id: "den1",
        title: "Netviet-NV-8825",
        link: "detail_item/den_trang_tri/den1.html",
        image: "../../img/category/DenTrangTri/Netviet-NV-8825.png",
        price: 780000,
        inCart: 0
    },


    {
        id: "den3",
        title: "Netviet-NV-8205-1",
        link: "detail_item/den_trang_tri/den4.html",
        image: "../../img/category/DenTrangTri/Netviet-NV-8205-1.png",
        price: 590000,
        inCart: 0
    },
    {
        id: "den4",
        title: "Composite-AP-B948",
        link: "detail_item/den_trang_tri/den3.html",
        image: "../../img/category/DenTrangTri/Composite-AP-B948.png",
        price: 10000000,
        inCart: 0
    },
    {
        id: "giuong1",
        link: "detail_item/giuong_ngu/giuong1.html",
        image: "../../img/category/GiuongNgu/Bellasofa-BS701.png",
        title: "Giường Bellasofa BS701",
        price: 11000000,
        inCart: 0
    },
    {
        id: "giuong2",
        link: "detail_item/giuong_ngu/giuong2.html",
        image: "../../img/category/GiuongNgu/Furniland-01.png",
        title: "Giường ngủ FURNILAND - Jangin Haim (1.8m)",
        price: 5400000,
        inCart: 0

    },
    {
        id: "giuong3",
        link: "detail_item/giuong_ngu/giuong3.html",
        image: "../../img/category/GiuongNgu/Furniland-02.png",
        title: "Giường ngủ FURNILAND - Jangin Christine (1m8)",
        price: 12000000,
        inCart: 0
    },
    {
        id: "giuong4",
        link: "detail_item/giuong_ngu/giuong4.html",
        image: "../../img/category/GiuongNgu/Bellasofa-B1239.png",
        title: "Giường Bellasofa B1239",
        price: 9000000,
        inCart: 0
    },
    {
        id: "ke1",
        link: "detail_item/ke_sach/ke1.html",
        image: "../../img/category/KeSach/go-4-tang-40.png",
        title: "Kệ sách gỗ 4 tầng 40",
        price: 510000,
        inCart: 0
    },
    {
        id: "ke2",
        link: "detail_item/ke_sach/ke2.html",
        image: "../../img/category/KeSach/BOV-SPR-1980DK.png",
        title: "Kệ sách BIG ONE VIETNAM SPR-1980DK",
        price: 600000,
        inCart: 0
    },
    {
        id: "ke3",
        link: "detail_item/ke_sach/ke3.html",
        image: "../../img/category/KeSach/RubikMH-1846.png",
        title: "Kệ trang trí Rubik Modulo Home 1846",
        price: 1100000,
        inCart: 0
    },
    {
        id: "ke4",
        link: "detail_item/ke_sach/ke4.html",
        image: "../../img/category/KeSach/treo-Hurakids-2130-001.png",
        title: "Giá sách treo Hurakids 2130-001",
        price: 590000,
        inCart: 0
    },
    {
        id: "tam1",
        link: "detail_item/phong_tam/tam1.html",
        image: "../../img/category/PhongTam/thanh-treo-giay.png",
        title: "Thanh treo giấy vệ sinh",
        price: 150000,
        inCart: 0
    },
    {
        id: "tam2",
        link: "detail_item/phong_tam/tam2.html",
        image: "../../img/category/PhongTam/thanh-treo-khan.png",
        title: "Thanh sắt treo khăn",
        price: 109000,
        inCart: 0
    },
    {
        id: "tam3",
        link: "detail_item/phong_tam/tam3.html",
        image: "../../img/category/PhongTam/ke-xa-phong.png",
        title: "Kệ chứa xà phòng",
        price: 190000,
        inCart: 0
    },
    {
        id: "tam4",
        link: "detail_item/phong_tam/tam4.html",
        image: "../../img/category/PhongTam/den-DTY.png",
        title: "Bóng đèn DTY",
        price: 80000,
        inCart: 0
    },
    {
        id: "rem1",
        link: "detail_item/rem_cua/rem1.html",
        image: "../../img/category/RemCua/num-01.png",
        title: "Rèm cửa 01",
        price: 900000,
        inCart: 0
    },
    {
        id: "rem2",
        link: "detail_item/rem_cua/rem2.html",
        image: "../../img/category/RemCua/num-02.png",
        title: "Rèm cửa 02",
        price: 890000,
        inCart: 0
    },
    {
        id: "rem3",
        link: "detail_item/rem_cua/rem3.html",
        image: "../../img/category/RemCua/num-03.png",
        title: "Rèm cửa 03",
        price: 750000,
        inCart: 0
    },
    {
        id: "rem4",
        link: "detail_item/rem_cua/rem4.html",
        image: "../../img/category/RemCua/num-04.png",
        title: "Rèm cửa 04",
        price: 950000,
        inCart: 0
    },
    {
        id: "sofa1",
        link: "detail_item/sofa/sofa1.html",
        image: "../../img/category/Sofa/kem.png",
        title: "Ghế sofa kem",
        price: 2500000,
        inCart: 0
    },
    {
        id: "sofa2",
        link: "detail_item/sofa/sofa2.html",
        image: "../../img/category/Sofa/cafe.png",
        title: "Sofa cafe",
        price: 2300000,
        inCart: 0
    },
    {
        id: "sofa3",
        link: "detail_item/sofa/sofa3.html",
        image: "../../img/category/Sofa/don-em-ai.png",
        title: "Ghế sofa đơn êm ái",
        price: 2600000,
        inCart: 0
    },
    {
        id: "sofa4",
        link: "detail_item/sofa/sofa4.html",
        image: "../../img/category/Sofa/don-SFD18.png",
        title: "Sofa đơn SFD18",
        price: 5100000,
        inCart: 0
    },
    {
        id: "tu1",
        link: "detail_item/tu_quan_ao/tu1.html",
        image: "../../img/category/TuQuanAo/BOV-WVR-1855L.png",
        title: "Tủ quần áo BIG ONE VIETNAM WVR-1855L",
        price: 4000000,
        inCart: 0
    },
    {
        id: "tu2",
        link: "detail_item/tu_quan_ao/tu1.html",
        image: "../../img/category/TuQuanAo/B1241K.png",
        title: "Tủ áo B1241K",
        price: 5400000,
        inCart: 0
    },
    {
        id: "tu3",
        link: "detail_item/tu_quan_ao/tu1.html",
        image: "../../img/category/TuQuanAo/Bellasofa-B1239.png",
        title: "Tủ Áo Bellasofa B1239",
        price: 3790000,
        inCart: 0
    },
    {
        id: "tu4",
        link: "detail_item/tu_quan_ao/tu1.html",
        image: "../../img/category/TuQuanAo/B1238.png",
        title: "Tủ áo B1238",
        price: 5100000,
        inCart: 0
    },
];

let perPage = 12,
    currentPage = 1,
    start = 0,
    end = perPage;

function getCurrentPage() {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

function renderProduct() {
    html = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += `<div class="lazyload col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div class="lazyload_item popup category_right_content_item">
        <img src= ${item.image} >
        <h5> <a href="  ${item.link}  ">  ${item.title}  </a></h5>
        <p> ${item.price}  <u> Đ</u></p>
        <ul class="popup_item">
        <a  title="Mua hàng" class="add-cart" id="${item.id}">
        <li class="fas fa-cart-shopping" onclick="checkSignIn1();"></li>

    </a>
            <a href="${item.link}" title="Chi tiết">
                <li class="fas fa-eye"></li>
            </a>
        </ul>
        </div>
        </div>`
        }
    })
    document.getElementById('product').innerHTML = html;
}
renderProduct();

const pageNext = document.querySelector('.page_btn_next');
const pagePrev = document.querySelector('.page_btn_prev');
const totalPages = Math.ceil(product.length / perPage);

function renderListPage() {
    let html = '';
    html += `<li class="active"><a class="page-link" "> ${1} </a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li><a class="page-link "> ${i} </a></li>`;
    }
    document.getElementById('number_page').innerHTML = html;
}
renderListPage();

function changePage() {
    const currentPage2 = document.querySelectorAll('.number_page li');
    for (let i = 0; i < currentPage2.length; i++) {
        currentPage2[i].addEventListener('click', () => {
            let value = i + 1;
            currentPage = value;
            $('.number_page li').removeClass('active');
            currentPage2[i].classList.add('active');
            // if (currentPage > 1 && currentPage < totalPages) {
            //     $('.page_btn_next').removeClass('page_btn_active');
            //     $('.page_btn_next').removeClass('page_btn_active');
            // }
            // if(currentPage === 1) {
            //     $('.page_btn_prev').addClass('page_btn_active');
            // }
            // if(currentPage === totalPages) {
            //     $('.page_btn_next').addClass('page_btn_active');
            // }
            getCurrentPage(currentPage);
            renderProduct();
            reload();
        })
    }
}
changePage();

pageNext.addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    // if(currentPage === totalPages) {
    //     $('.page_btn_next').addClass('page_btn_active');
    // }
    // $('.page_btn_next').removeClass('page_btn_active');
    $('.number_page li').removeClass('active');
    $(`.number_page li:eq(${currentPage - 1})`).addClass('active');
    getCurrentPage(currentPage);
    renderProduct();
    reload();
})
pagePrev.addEventListener('click', () => {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    // if(currentPage === 1) {
    //     $('.page_btn_prev').addClass('page_btn_active');
    // }
    // $('.page_btn_prev').removeClass('page_btn_active');
    $('.number_page li').removeClass('active');
    $(`.number_page li:eq(${currentPage - 1})`).addClass('active');
    getCurrentPage(currentPage);
    renderProduct();
})



/*------------------------------- list tung san pham -------------------------------*/


// function renderProduct_Ban() {
//     html = '';
//     const content = product.map((item, index) => {
//         if(index >= 1 && index < 4) {
//             html += '<div class="lazyload col-xs-12 col-sm-6 col-md-4 col-lg-4">';
//             html += '<div class="lazyload_item popup category_right_content_item">'
//             html += '<img src=' + item.image + '>';
//             html += '<h5>' + '<a href="' + item.link + '">' + item.title + '</a>' + '</h5>';
//             html += '<p>' + item.price + '<u>đ</u></p>';
//             html += '<ul class="popup_item">';
//             html += '<a href="" title="Mua hàng"><li class="fas fa-cart-shopping"></li></a>';
//             html += '<a href="' + item.link + '" title="Chi tiết"><li class="fas fa-eye"></li></a>';
//             html += '</ul>';
//             html += '</div>';
//             html += '</div>';
//         }
//     })
//     document.getElementById('product_ban').innerHTML = html;
// }
// renderProduct_Ban();


function reload() {
    carts = document.querySelectorAll('.add-cart');
    for (let j = 0; j < product.length; j++) {
        let checkSignIn = localStorage.getItem('issignin');
        for (let i = 0; i < carts.length; i++) {
            carts[i].addEventListener('click', () => {
                if (checkSignIn) {
                    if (carts[i].id === product[j].id) {
                        cartNumbers(product[j]);
                        totalCost(product[j]);
                    }
                }
            })
        }
    }
}
/*------------------------------- Bộ lọc  -------------------------------*/
function selectProduct() {
    var arr1 = document.getElementsByClassName("category")
    var category_arr = []
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i].checked) category_arr.push(arr1[i].value);

    }
    var arr2 = document.getElementsByClassName("price")
    var price_arr = []
    for (i = 0; i < arr2.length; i++) {
        if (arr2[i].checked == true) price_arr.push(arr2[i].value)
    }
    listProduct(category_arr, price_arr)

}

function listProduct(category_arr = [], price_arr = []) {
    var listProduct = document.getElementById("product")
    listProduct.innerHTML = ''
    for (i = 0; i < product.length; i++) {
        link = product[i].link
        image = product[i].image
        title = product[i].title
        price = product[i].price
        category = product[i].category
        if (category_arr.length > 0) {
            if (category_arr.includes(category) == false) continue
        }
        if (price_arr.length > 0) {
            if (price < 200000 && price_arr.includes('1') == false) continue
            if (price >= 200000 && price < 1000000 && price_arr.includes('2') == false) continue
            if (price >= 1000000 && price < 5000000 && price_arr.includes('3') == false) continue
            if (price >= 5000000 && price < 10000000 && price_arr.includes('4') == false) continue
            if (price >= 10000000 && price_arr.includes('5') == false) continue
        }
        listProduct.innerHTML += `
            <div class="lazyload col-6 col-sm-6 col-md-4 col-lg-4">
                <div class="lazyload_item popup category_right_content_item">
                    <img src="${product[i].image}">
                    <h5><a href="${product[i].link}">${product[i].title}</a></h5>
                    <p>${product[i].price}<u>đ</u></p>
                    <ul class="popup_item">
                        <a href="" title="Mua hàng"><li class="fas fa-cart-shopping"></li></a>
                        <a href="${product[i].link}" title="Chi tiết"><li class="fas fa-eye"></li></a>
                    </ul>
                </div>
            </div>
        `
    }
}

function sortProduct() {
    var valueSelect = document.getElementById("arrange").value;
    console.log(valueSelect);
    product.sort((a, b) => {
        if (valueSelect === "2") {
            return a.price - b.price
        } else if (valueSelect === "1") {
            return b.price - a.price
        } else {
            return a.id - b.id
        }
    })
    renderProduct()
}