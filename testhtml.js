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
]

let perPage = 12,
    currentPage = 1,
    start = 0,
    end = perPage;

function renderProduct() {
    html = '';
    const content = product.map((item, index) => {
        if(index >= start && index < end) {
            html += '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">';
            html += '<div class="category_right_content_item">'
            html += '<img src=' + item.image + '>';
            html += '<h5>' + item.title + '</h5>';
            html += '<p>' + item.price + '<u>đ</u></p>';
            html += '</div>';
            html += '</div>';
            return html;
        }
    })
    document.getElementById('product').innerHTML = html;
}
renderProduct();