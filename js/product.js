// const itemsliderbar = document.querySelectorAll(".ca_li")
// itemsliderbar.forEach(function(menu,index){
//     menu.addEventListener("click",function(){
//         menu.classList.toggle("block")
//     })
// })


// ------------------------------- paging -------------------------------
const  product = [
    { id: 1, image: "/img/category/Ban/cafe-tron-go-dep.png", title: "Bàn cafe tròn gỗ đẹp", price: "4.500.000"},
    { id: 2, image: "/img/category/Ban/GTY-091.png", title: "Bàn GTY 091", price: "3.500.000"},
    { id: 3, image: "/img/category/Ban/tron-kinh.png", title: "Bàn tròn kính", price: "23.000.000"},
    { id: 4, image: "/img/category/Ban/go-dai.png", title: "Bàn gỗ dài", price: "1.890.000"},
    { id: 5, image: "/img/category/DenTrangTri/Netviet-NV-8825.png", title: "Đèn trang trí vách cao cấp NETVIET NV 8825", price: "780.000"},
    { id: 6, image: "/img/category/DenTrangTri/Netviet-NV-9005-2.png", title: "Đèn trang trí vách cao cấp pha lê Netviet NV 9005/2", price: "970.000"},
    { id: 7, image: "/img/category/DenTrangTri/Composite-AP-B948.png", title: "Đèn tường Composite An Phước B948", price: "10.000.000"},
    { id: 8, image: "/img/category/DenTrangTri/Netviet-NV-8205-1.png", title: "Đèn trang trí vách Netviet NV 8205/1", price: "590.000"},
    { id: 9, image: "/img/category/GiuongNgu/Bellasofa-BS701.png", title: "Giường Bellasofa BS701", price: "11.000.000"},
    { id: 10, image: "/img/category/GiuongNgu/Furniland-01.png", title: "Giường ngủ FURNILAND - Jangin Haim (1.8m)", price: "5.400.000"},
    { id: 11, image: "/img/category/GiuongNgu/Furniland-02.png", title: "Giường ngủ FURNILAND - Jangin Christine (1m8)", price: "12.000.000"},
    { id: 12, image: "/img/category/GiuongNgu/Bellasofa-B1239.png", title: "Giường Bellasofa B1239", price: "9.000.000"},
    { id: 13, image: "/img/category/KeSach/go-4-tang-40.png", title: "Kệ sách gỗ 4 tầng 40", price: "510.000"},
    { id: 14, image: "/img/category/KeSach/BOV-SPR-1980DK.png", title: "Kệ sách BIG ONE VIETNAM SPR-1980DK", price: "460.000"},
    { id: 15, image: "/img/category/KeSach/RubikMH-1846.png", title: "Kệ trang trí Rubik Modulo Home 1846", price: "1.100.000"},
    { id: 16, image: "/img/category/KeSach/treo-Hurakids-2130-001.png", title: "Giá sách treo Hurakids 2130-001", price: "598.000"},
    { id: 17, image: "/img/category/PhongTam/thanh-treo-giay.png", title: "Thanh treo giấy vệ sinh", price: "150.000"},
    { id: 18, image: "/img/category/PhongTam/thanh-treo-khan.png", title: "Thanh sắt treo khăn", price: "109.000"},
    { id: 19, image: "/img/category/PhongTam/ke-xa-phong.png", title: "Kệ chứa xà phòng", price: "190.000"},
    { id: 20, image: "/img/category/PhongTam/den-DTY.png", title: "Bóng đèn DTY", price: "80.000"},
    { id: 21, image: "/img/category/RemCua/num-01.png", title: "Rèm cửa 01", price: "900.000"},
    { id: 22, image: "/img/category/RemCua/num-02.png", title: "Rèm cửa 02", price: "890.000"},
    { id: 23, image: "/img/category/RemCua/num-03.png", title: "Rèm cửa 03", price: "750.000"},
    { id: 24, image: "/img/category/RemCua/num-04.png", title: "Rèm cửa 04", price: "950.000"},
    { id: 25, image: "/img/category/Sofa/kem.png", title: "Ghế sofa kem", price: "2.500.000"},
    { id: 26, image: "/img/category/Sofa/cafe.png", title: "Sofa cafe", price: "2.300.000"},
    { id: 27, image: "/img/category/Sofa/don-em-ai.png", title: "Ghế sofa đơn êm ái", price: "2.600.000"},
    { id: 28, image: "/img/category/Sofa/don-SFD18.png", title: "Sofa đơn SFD18", price: "5.100.000"},
    { id: 29, image: "/img/category/TuQuanAo/BOV-WVR-1855L.png", title: "Tủ quần áo BIG ONE VIETNAM WVR-1855L", price: "4.000.000"},
    { id: 30, image: "/img/category/TuQuanAo/B1241K.png", title: "Tủ áo B1241K", price: "5.400.000"},
    { id: 31, image: "/img/category/TuQuanAo/Bellasofa-B1239.png", title: "Tủ Áo Bellasofa B1239", price: "3.790.000"},
    { id: 32, image: "/img/category/TuQuanAo/B1238.png", title: "Tủ áo B1238", price: "5.100.000"},

]

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
        if(index >= start && index < end) {
            html += '<div class="lazyload col-xs-12 col-sm-6 col-md-4 col-lg-4">';
            html += '<div class="lazyload_item popup category_right_content_item">'
            html += '<img src=' + item.image + '>';
            html += '<h5>' + '<a href="">' + item.title + '</a>' + '</h5>';
            html += '<p>' + item.price + '<u>đ</u></p>';
            html += '<ul class="popup_item">';
            html += '<a href="" title="Mua hàng"><li class="fas fa-cart-shopping"></li></a>';
            html += '<a href="" title="Chi tiết"><li class="fas fa-eye"></li></a>';
            html += '</ul>';
            html += '</div>';
            html += '</div>';
            return html;
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
    html += `<li class="active"><a class="page-link"> ${1} </a></li>`;
    for(let i=2;i<=totalPages;i++) {
        html += `<li><a class="page-link"> ${i} </a></li>`;
    }
    document.getElementById('number_page').innerHTML = html;
}
renderListPage();

function changePage() {
    const currentPage2 = document.querySelectorAll('.number_page li');
    for(let i=0;i<currentPage2.length;i++) {
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
        })
    }
}
changePage();

pageNext.addEventListener('click', () => {
    currentPage++;
    if(currentPage > totalPages) {
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
})
pagePrev.addEventListener('click', () => {
    currentPage--;
    if(currentPage <= 1) {
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


function renderProduct_Ban() {
    html = '';
    const content = product.map((item, index) => {
        if(index >= 4 && index < 8) {
            html += '<div class="lazyload col-xs-12 col-sm-6 col-md-4 col-lg-4">';
            html += '<div class="lazyload_item popup category_right_content_item">'
            html += '<img src=' + item.image + '>';
            html += '<h5>' + '<a href="">' + item.title + '</a>' + '</h5>';
            html += '<p>' + item.price + '<u>đ</u></p>';
            html += '<ul class="popup_item">';
            html += '<a href="" title="Mua hàng"><li class="fas fa-cart-shopping"></li></a>';
            html += '<a href="" title="Chi tiết"><li class="fas fa-eye"></li></a>';
            html += '</ul>';
            html += '</div>';
            html += '</div>';
            return html;
        }
    })
    document.getElementById('product_ban').innerHTML = html;
}
renderProduct_Ban();