// const itemsliderbar = document.querySelectorAll(".ca_li")
// itemsliderbar.forEach(function(menu,index){
//     menu.addEventListener("click",function(){
//         menu.classList.toggle("block")
//     })
// })


// ------------------------------- paging -------------------------------
const product = [
    { id: 1, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 2, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 3, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 4, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 5, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 6, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 7, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 8, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 9, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 10, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 11, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 12, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 13, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 14, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 15, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 16, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 17, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 18, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 19, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 20, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 21, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 22, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 23, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 24, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 25, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 26, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    { id: 27, image: "/img/category/ghesofatest.png", title: "Ghế Sofa Kem", price: "2.500.000"},
    
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