function getBasePath() {
    const pathArray = window.location.pathname.split('/');
    const facilityIndex = pathArray.indexOf('Facility');  // Tìm vị trí của 'Facility'

    if (facilityIndex !== -1) {
        // Tạo basePath tới 'SanPham/html' từ 'Facility'
        const basePath = pathArray.slice(0, facilityIndex + 1).join('/');
        return window.location.origin + basePath;
    } else {
        // Trường hợp không tìm thấy 'Facility'
        console.warn("Không tìm thấy thư mục 'Facility' trong URL.");
        return window.location.origin;
    }
}

const productsOrigin = [{
    id: 1,
    image: "/Sanpham/img/category/Ban/cafe-tron-go-dep.png",
    title: "Bàn cafe tròn gỗ đẹp",
    price: 4500000,
    amount: "24",
    category: "Bàn gỗ",
    status: "Còn hàng",
    code: "ban1",
    Suppliers: "First Impression",
    description: `
Chất liêu: Sản xuất từ Gỗ MDF sơn Bệt 2k
Kích thước: 800x800x350mm(Quý khách có thể đặt kích thước khác để phù hợp với phòng nhà mình)
Màu: nâu
Chất lượng: Gỗ công nghiệp MDF  nhập khẩu nguyên tấm từ Malaysia, vật liệu chất lượng cao.
Với 100% nhựa nguyên chất, đảm bảo không độc hại, không mối mọt, ẩm ướt..v..v
<img src="${getBasePath()}/Sanpham/img/category/Ban/1.png">
Ghế cafe TF 018 Với thiết kế đơn giản nhưng sang trọng, được tối ưu các chi tiết góc canh,để tạo cho bạn có cảm giác ngồi thoải mái nhất có thể.
Ghế được làm bằng hộp thép tròn phi 19 , 21,.v..v  độ dày 1mm, thép mạ kém, hoặc thép sơn tĩnh điện,tùy theo khách hàng lựa chọn,.
Sợi dây nhựa giả mây cao cấp nhất Việt Nam.
Không gian của bạn cần một loại ghế đơn giản nhưng sang trọng thì đó là ghế TF 018.
Thiết kế của ghế TF 018, giúp bạn tiết kiệm không gian, ghế có thể chồng lên nhau từ 4 - 8 ghế  khi bạn cần thu dọn,  để lấy không gian
<img src="${getBasePath()}/Sanpham/img/category/Ban/2.png">`
},
{
    id: 2,
    image: "/Sanpham/img/category/Ban/GTY-091.png",
    title: "Bàn GTY 091",
    price: 3500000,
    amount: "45",
    category: "Bàn gỗ",
    status: "Còn hàng",
    code: "ban2",
    Suppliers: "First Impression",
    description: `
Nếu quý khách là người có tính cách hiện đại thì mẫu bàn ăn 11 là dành cho quý khách.
Không rườm rà, mặt bàn trong xanh được tô điểm bằng hai mép kính uốn cong bằng công nghệ hiện đại.
Bốn chân bàn và phụ kiện kết nối hình trụ tròn đồng bộ tạo nên tính logic trong thiết kế.
Mặt bàn là kính 12 ly cường lực, đợt kính (ngăn bàn) kính dầy 7 ly có nhiều mầu và hoa văn.
Khoảng cách giữa mặt bàn và đợt kính (nếu có) thường trong khoảng 16-18cm.
<img src="${getBasePath()}/Sanpham/img/category/Ban/3.png">
Bàn có chiều cao 73-75 cm.
Kích thước bàn tiêu chuẩn: 80 x 160 cm
Lưu ý:
Với thế mạnh là đơn vị sản xuất trực tiếp, chúng tôi có thể điều chỉnh: kích thước, mầu sắc cũng như hoa văn của mặt bàn và đợt kính (ngăn bàn).
Chiết khấu tốt cho các đơn hàng lớn.
<img src="${getBasePath()}/Sanpham/img/category/Ban/4.png">
`
},
{
    id: 3,
    image: "/Sanpham/img/category/Ban/tron-kinh.png",
    title: "Bàn tròn kính",
    price: 23000000,
    amount: "54",
    category: "Bàn gỗ",
    status: "Còn hàng",
    code: "ban3",
    Suppliers: "Kenny Furniture",
    description: `
Bàn trà được làm bằng gỗ veneer với thiết kế đơn giản bền đẹp phù hợp với nhiều không gian sống
Chất liêu: Sản xuất từ Gỗ veneer
Kích thước: 600x900x350mm(Quý khách có thể đặt kích thước khác để phù hợp với phòng nhà mình)
Màu: Trắng
Chất lượng: Gỗ công nghiệp veneer sơn pu, màu sắc bền đẹp
<img src="${getBasePath()}/Sanpham/img/category/Ban/5.png">
Bàn mây nhựa TF 018 được thiết kê đơn giản nhưng rất sang trọng.
Nhờ sự kết hợp tinh tế với ghế TF 018, chất liệu là khung thép tròn phi 19 và phi 21 v.v... thép mạ kẽm hoặc sơn tĩnh điện, tùy theo khách hàng lựa chọn.
Cộng kính trắng 10mm, đan mây nhưa cao cấp 100% nguyên chất hạt nhựa, đảm bảo không độc hại, sẽ tạo nên bộ bàn ghế hoàn hảo cho không gian của quý khách hàng.
Không gian của bạn cần một loại ghế đơn giản nhưng sang trọng thì đó là ghế TF 018, thiết kế của ghế TF 018, giúp bạn tiết kiệm không gian.
Ghế có thể chồng lên nhau từ 4 - 8 ghế khi bạn cần thu dọn, để lấy không gian
<img src="${getBasePath()}/Sanpham/img/category/Ban/6.png">

    `
},
{
    id: 4,
    image: "/Sanpham/img/category/Ban/go-dai.png",
    title: "Bàn gỗ dài",
    price: 189000,
    amount: "16",
    category: "Bàn gỗ",
    status: "Còn hàng",
    code: "ban4",
    Suppliers: "Kenny Furniture",
    description: `
Bàn màu ghi chì chất liệu gỗ công nghiệp nhập khẩu.
Kích thước : W1200 x D600 x H750
Ngoài ra cùng kiểu dáng còn có kích thước : W1200 x D700 x H750 và các loại từ 1,4 - 1,8m.
Ghế cafe TF 105 Với thiết kế đơn giản nhưng sang trọng, được tối ưu các chi tiết góc canh, để tạo cho bạn có cảm giác ngồi thoải mái nhất có thể.
Đảm bảo không độc hại, sẽ tạo nên bộ bàn ghế hoàn hảo cho không gian của quý khách hàng.
<img src="${getBasePath()}/Sanpham/img/category/Ban/7.png">
Ghế được làm bằng hộp thép phi 19 và 21 v.v.. độ dày 1mm, thép mạ kẽm, hoặc thép sơn tĩnh điện.
Tùy theo khách hàng lựa chọn, sợi dây nhựa giả mây cao cấp nhất Việt Nam, với 100% nhựa nguyên chất.
Đảm bảo không độc hại, không mối mọt, ẩm ướt..v..
Không gian của bạn cần một loại ghế đơn giản nhưng sang trọng thì đó là ghế TF 105
Bàn cafe chất liệu thép mạ kẽm hoặc sơn tĩnh điện, tùy theo khách hàng lựa chọn, cộng kính trắng 10mm, đan mây nhưa cao cấp 100% nguyên chất hạt nhựa.
<img src="${getBasePath()}/Sanpham/img/category/Ban/8.png">

    `
},
{
    id: 5,
    image: "/Sanpham/img/category/DenTrangTri/Netviet-NV-8825.png",
    title: "Đèn trang trí vách cao cấp NETVIET NV 8825",
    price: 780000,
    amount: "12",
    category: "Đèn trang trí",
    status: "Còn hàng",
    code: "den1",
    Suppliers: "My home",
    description: `
Kích thước (cm): 31x20x75  
Loại bóng sử dụng: E14 x 1  
Vị trí lắp: Vách tường hoặc trụ cột.  
Ứng dụng: Lắp đặt ở vị trí vách có mặt phẳng như tường phòng khách, phòng ngủ, hành lang, phù hợp cho biệt thự, nhà phố, khách sạn, nhà hàng,...  
<img src="${getBasePath()}/Sanpham/img/category/DenTrangTri/Netviet-NV-8825.png">  
Đặc điểm chính:  
SKU: NE772HLBBWK6VNAMZ-935630  
Gender: Unisex  
Kích thước sản phẩm (D x R x C cm): 31x20x75  
Bảo hành: Bảo hành 3 tháng bằng hóa đơn  
Trọng lượng (KG): 2,5kg  
Sản xuất tại: Việt Nam  
<img src="${getBasePath()}/Sanpham/img/category/DenTrangTri/1.png">  
`
},
{
    id: 6,
    image: "/Sanpham/img/category/DenTrangTri/Netviet-NV-9005-2.png",
    title: "Đèn trang trí vách cao cấp pha lê Netviet NV 9005/2",
    price: 970000,
    amount: "102",
    category: "Đèn trang trí",
    status: "Còn hàng",
    code: "den2",
    Suppliers: "My home",
    description: `
Kích thước (cm): 40x40x42  
Loại bóng sử dụng: E14 x 2  
Vị trí lắp: Vách tường hoặc trụ cột.  
Ứng dụng: Lắp đặt ở vị trí vách có mặt phẳng như tường phòng khách, phòng ngủ, hành lang, phù hợp cho biệt thự, nhà phố, khách sạn, nhà hàng,...  
<img src="${getBasePath()}/Sanpham/img/category/DenTrangTri/Netviet-NV-9005-2.png">  
Đặc điểm chính:  
SKU: NE772HLBBWM0VNAMZ-935739  
Gender: Unisex  
Kích thước sản phẩm (D x R x C cm): 40x40x42  
Bảo hành: Bảo hành 3 tháng bằng hóa đơn  
Trọng lượng (KG): 2,5kg  
Sản xuất tại: Việt Nam  
<img src="${getBasePath()}/Sanpham/img/category/DenTrangTri/3.png">             
`
},
{
    id: 7,
    image: "/Sanpham/img/category/DenTrangTri/Composite-AP-B948.png",
    title: "Đèn tường Composite An Phước B948",
    price: 10000000,
    amount: "87",
    category: "Đèn trang trí",
    status: "Còn hàng",
    code: "den3",
    Suppliers: "My home",
    description: `
đèn vách kính treo tường  
kích thước: L270 x H300  
loại bóng: E27 x 1  
Thân đèn bằng thép phun sơn chống ăn mòn  
Chao đèn làm bằng thủy tinh chịu nhiệt tốt  
<img src="${getBasePath()}/Sanpham/img/category/DenTrangTri/Netviet-NV-8205-1.png">  
Với kiểu dáng cổ điển điểm xuyến thêm vài chi tiết làm cho nổi bật không gian trang trí. Được ứng dụng rộng rãi ở nhà hàng, khách sạn, quán ăn, quán cà phê, tạo không gian ấm cúng cho ngôi nhà bạn.  
Toàn bộ khung đèn chao đèn được làm từ những vật liệu cao cấp nhất, tạo nên vẻ sang trọng, đẳng cấp cho không gian trang trí.  
Với bóng E27 dễ dàng thay thế khi hết tuổi thọ bóng, độ thắp sáng cao và tiết kiệm điện năng tiêu thụ.  
<img src="${getBasePath()}/Sanpham/img/category/DenTrangTri/5.png">              
`
},
{
    id: 8,
    image: "/Sanpham/img/category/DenTrangTri/Netviet-NV-8205-1.png",
    title: "Đèn trang trí vách Netviet NV 8205/1",
    price: 590000,
    amount: "92",
    category: "Đèn trang trí",
    status: "Còn hàng",
    code: "den4",
    Suppliers: "My home",
    description: `
Ngày nay, trang trí nội thất là sở thích và đam mê của nhiều người, thông qua cách lựa chọn và bày trí các vật dụng sẽ nói lên cá tính và thể hiện mắt thẩm mỹ bạn. Nếu bạn là người yêu thích phong cách cổ điển, tinh tế thì sản phẩm đèn tường An Phước B984 sẽ là sự lựa chọn hoàn hảo dành cho bạn. Với thiết kế đậm chất cổ điển nhưng vẫn mang một chút hơi thở của hiện đại nhờ chất liệu hợp kim và thủy tinh cao cấp, đèn tường An Phước B984 luôn có sức hút kỳ lạ đối với người nhìn và tạo nên điểm nhấn đặc sắc cho không gian của bạn.  
<img src="${getBasePath()}/Sanpham/img/category/DenTrangTri/Composite-AP-B948.png">  
ĐẶC ĐIỂM NỔI BẬT  
Chất liệu cao cấp  
Sản phẩm đèn tường An Phước B984 có phần thân làm bằng chất liệu hợp kim chống gỉ mạ đồng với độ bền rất cao để bạn có thể yên tâm sử dụng trong một thời gian dài mà không lo bị gỉ sét. Chao đèn được làm bằng thủy tinh cao cấp để giúp cho ánh sáng của đèn tỏa ra thật lung linh, huyền ảo, tạo nên một không gian đậm chất quý tộc, sang trọng.  
Thiết kế cổ điển  
Sản phẩm với màu sắc và thiết kế tinh tế khi thắp sáng nên mang đậm nét cổ điển, cá tính bởi ánh sáng dịu dàng, lan tỏa. Với chiếc đèn tường này, không gian của bạn sẽ trở nên độc đáo và thu hút hơn bao giờ hết. Công suất của bóng đèn là 40W cho ánh sáng vừa đủ và tiết kiệm điện năng hiệu quả.  
Dễ dàng vệ sinh  
Nhờ thiết kế thuận tiện và chất liệu thủy tinh cao cấp giúp sản phẩm đèn tường An Phước B984 hạn chế trầy xước, chống bám bẩn cũng như giúp cho việc vệ sinh đèn không tốn nhiều công sức, tiết kiệm thời gian hiệu quả cho bạn.  
<img src="${getBasePath()}/Sanpham/img/category/DenTrangTri/7.png">      
`
},
{
    id: 9,
    image: "/Sanpham/img/category/GiuongNgu/Bellasofa-BS701.png",
    title: "Giường Bellasofa BS701",
    price: 11000000,
    amount: "5",
    category: "Giường ngủ",
    status: "Còn hàng",
    code: "giuong1",
    Suppliers: "My home",
    description: `
Bellasofa là thương hiệu nội thất uy tín được nhiều người tin dùng ở Châu Âu, đặc biệt là Ý và Đan Mạch. Tại Việt Nam, Bellasofa Vietnam không chỉ cung cấp nội thất phòng khách như Sofa hiện đại sang trọng mà còn cung cấp trọn bộ nội thất Phòng Ngủ: Giường, Tủ Áo, Bàn Trang Điểm, Tủ Đầu Giường,...
Đặc điểm nổi bật của Giường Bellasofa BS701:
Thiết kế tinh tế và hiện đại phù hợp với phong cách Việt Nam.
<img src="${getBasePath()}/Sanpham/img/category/GiuongNgu/Bellasofa-BS701.png">
Độ cao giường vừa phải, góc cắt xéo tạo sự hài hòa trong tổng thể vững chắc.
Chất liệu ván MFC cao cấp được xử lý chống mọt và chống hút ẩm.
Cam kết:
Giao hàng chính hãng và lắp ráp tận nhà trong thời gian nhanh nhất
Dịch vụ sau bán hàng tốt nhất.
Xuất xứ: tại Bellasofa Việt Nam theo công nghệ Châu Âu.
Bảo hành: 1 năm lỗi kỹ thuật (lỗi sản xuất)
<img src="${getBasePath()}/Sanpham/img/category/GiuongNgu/1.png">
         
`
},
{
    id: 10,
    image: "/Sanpham/img/category/GiuongNgu/Furniland-01.png",
    title: "Giường ngủ FURNILAND - Jangin Haim (1.8m)",
    price: 5400000,
    amount: "11",
    category: "Giường ngủ",
    status: "Còn hàng",
    code: "giuong2",
    Suppliers: "Furniland",
    description: `
Chất liệu: giả da, gỗ tràm, MDF
Kiểu dáng sang trọng; đẹp mắt
Phù hợp nhiều không gian
Ván công nghiệp MFC và MDF cao cấp bề mặt chống trầy xước
Được xử lý chống mọt và chống hút ẩm.
<img src="${getBasePath()}/Sanpham/img/category/GiuongNgu/Furniland-02.png">
Đặc điểm chính:
SKU: JA860HLAWU4WVNAMZ-612088
Màu: nhiều màu
Chất liệu: gỗ tràm
Model: Furniland - Christine
Kích thước sản phẩm (D x R x C cm): 218 x 187 x 115
Bảo hành: 6 tháng bằng hóa đơn mua hàng
Chỉ giao hàng tại: Hà Nội
Trọng lượng (KG): 10
Sản xuất tại: Hàn Quốc
<img src="${getBasePath()}/Sanpham/img/category/GiuongNgu/5.png">
        
`
},
{
    id: 11,
    image: "/Sanpham/img/category/GiuongNgu/Furniland-02.png",
    title: "Giường ngủ FURNILAND - Jangin Christine (1m8)",
    price: 12000000,
    amount: "4",
    category: "Giường ngủ",
    status: "Còn hàng",
    code: "giuong3",
    Suppliers: "My home",
    description: `
Chất liệu: giả da, gỗ tràm, MDF
Kiểu dáng sang trọng; đẹp mắt
Phù hợp nhiều không gian
Ván công nghiệp MFC và MDF cao cấp bề mặt chống trầy xước
Được xử lý chống mọt và chống hút ẩm.
<img src="${getBasePath()}/Sanpham/img/category/GiuongNgu/Furniland-02.png">
Đặc điểm chính:
SKU: JA860HLAWU4WVNAMZ-612088
Màu: nhiều màu
Chất liệu: gỗ tràm
Model: Furniland - Christine
Kích thước sản phẩm (D x R x C cm): 218 x 187 x 115
Bảo hành: 6 tháng bằng hóa đơn mua hàng
Chỉ giao hàng tại: Hà Nội
Trọng lượng (KG): 10
Sản xuất tại: Hàn Quốc
<img src="${getBasePath()}/Sanpham/img/category/GiuongNgu/5.png">
          
`
},
{
    id: 12,
    image: "/Sanpham/img/category/GiuongNgu/Bellasofa-B1239.png",
    title: "Giường Bellasofa B1239",
    price: 9000000,
    amount: "12",
    category: "Giường ngủ",
    status: "Còn hàng",
    code: "giuong4",
    Suppliers: "Interiorvnex",
    description: `
Interiorvnex là thương hiệu nội thất uy tín được nhiều người tin dùng ở Châu Âu, đặc biệt là Ý và Đan Mạch. Tại Việt Nam, Interiorvnex Vietnam không chỉ cung cấp nội thất phòng khách như Sofa hiện đại sang trọng mà còn cung cấp trọn bộ nội thất Phòng Ngủ: Giường, Tủ Áo, Bàn Trang Điểm, Tủ Đầu Giường,...
<img src="${getBasePath()}/Sanpham/img/category/DenTrangTri/Bellasofa-B1239.png">
Đặc điểm nổi bật của Giường Interiorvnex B1239:
- Thiết kế tinh tế và hiện đại phù hợp với phong cách Việt Nam.
- Được đính các hạt đá tạo nên điểm nhấn sang trọng.
- Chất liệu ván MFC được xử lý chống mọt và chống hút ẩm.
Cam kết:
- Giao hàng chính hãng và lắp ráp tận nhà trong thời gian nhanh nhất.
- Dịch vụ sau bán hàng tốt nhất.
Xuất xứ: tại Interiorvnex Việt Nam theo công nghệ Châu Âu.
Bảo hành: 1 năm lỗi kỹ thuật
<img src="${getBasePath()}/Sanpham/img/category/DenTrangTri/7.png">

`
},
{
    id: 13,
    image: "/Sanpham/img/category/KeSach/go-4-tang-40.png",
    title: "Kệ sách gỗ 4 tầng 40",
    price: 510000,
    amount: "12",
    category: "Kệ sách",
    status: "Còn hàng",
    code: "ke1",
    Suppliers: "My home",
    description: `
Quy cách sản phẩm: Kệ sách 4 tầng cao 90 cm, chiều sâu 28cm và có chiều rộng 40cm, hồi 2cm dày dặn, chắc chắn. Bạn có thể dễ dàng chọn được một sản phẩm có chiều cao, rộng phù hợp với không gian nhà bạn.
Màu sắc sản phẩm: Có 2 màu cơ bản là màu gỗ tự nhiên và màu cánh gián. Màu tự nhiên của gỗ cao su có màu vàng sáng phù hợp với không gian nội thất hiện đại, màu cánh gián phù hợp với không gian nội thất giả cổ.
Hình thức sản phẩm: Với bộ óc sáng tạo của người thợ, thớ gỗ cao su mịn màng cùng sự hỗ trợ của công nghệ, máy móc các sản phẩm kệ sách gỗ cao su trông rất trang nhã và đẹp mắt. Kệ sách của bạn trông sinh động và đẹp hơn hẳn khi có chú gấu bông, một khung ảnh nhỏ hay vật trang trí nào đó.
Tính hữu dụng: Kệ sách – có thể gọi là kệ đa năng – với kết cấu vững chắc bạn có thể để từ sách vở, mũ bảo hiểm, giày dép, đồ dùng gia đình, có thể trưng bày hàng hóa hay bất cứ đồ dùng phù hợp. Góc gia đình trở lên gọn gàng và đáng yêu biết mấy khi có sự hiện diện của các kệ sách.
Chính sách bảo hành: Được đánh giá là sản phẩm thân thiện với môi trường vì sau 30 đến 50 năm khi hết tuổi khai thác mủ gỗ cao su mới được khai thác. Khách hàng có thể hoàn toàn an tâm về sản phẩm kệ sách do Bestgoods cung cấp với chế độ bảo hành mối mọt, cong vênh, nứt lẻ, thay thế bất cứ chi tiết nào của sản phẩm lỗi, hỏng do vận chuyển hoặc lỗi của nhà sản xuất.
<img src="${getBasePath()}/Sanpham/img/category/KeSach/go-4-tang-40.png">
Giá thành, vận chuyển, lắp đặt:
Với nguồn nguyên liệu dồi dào sẵn có trong nước cùng với công nghệ máy móc hiện đại các sản phẩm kệ sách gỗ cao su có giá rất cạnh tranh so với các sản phẩm gỗ cùng loại.
Các sản phẩm sau khi sản xuất được lót một lớp giấy xốp chống trầy xước và được bọc bìa catoon bên ngoài nên việc vận chuyển rất thuận tiện mà không ảnh hưởng đến sản phẩm.
Kệ sách Bestgoods 4 tầng 40 cm được lắp đặt hết sức dễ dàng vì trong mỗi sản phẩm đã có sẵn ốc và vít.
<img src="${getBasePath()}/Sanpham/img/category/KeSach/1.png">

`
},
{
    id: 14,
    image: "/Sanpham/img/category/KeSach/BOV-SPR-1980DK.png",
    title: "Kệ sách BIG ONE VIETNAM SPR-1980DK",
    price: 460000,
    amount: "32",
    category: "Kệ sách",
    status: "Còn hàng",
    code: "ke2",
    Suppliers: "Big One",
    description: `
Quy cách sản phẩm: Kệ sách 4 tầng cao 90 cm, chiều sâu 28cm và có chiều rộng 40cm, hồi 2cm dày dặn, chắc chắn. Bạn có thể dễ dàng chọn được một sản phẩm có chiều cao, rộng phù hợp với không gian nhà bạn.
Màu sắc sản phẩm: Có 2 màu cơ bản là màu gỗ tự nhiên và màu cánh gián. Màu tự nhiên của gỗ cao su có màu vàng sáng phù hợp với không gian nội thất hiện đại, màu cánh gián phù hợp với không gian nội thất giả cổ.
Hình thức sản phẩm: Với bộ óc sáng tạo của người thợ, thớ gỗ cao su mịn màng cùng sự hỗ trợ của công nghệ, máy móc các sản phẩm kệ sách gỗ cao su trông rất trang nhã và đẹp mắt. Kệ sách của bạn trông sinh động và đẹp hơn hẳn khi có chú gấu bông, một khung ảnh nhỏ hay vật trang trí nào đó.
Tính hữu dụng: Kệ sách – có thể gọi là kệ đa năng – với kết cấu vững chắc bạn có thể để từ sách vở, mũ bảo hiểm, giày dép, đồ dùng gia đình, có thể trưng bày hàng hóa hay bất cứ đồ dùng phù hợp. Góc gia đình trở lên gọn gàng và đáng yêu biết mấy khi có sự hiện diện của các kệ sách.
Chính sách bảo hành: Được đánh giá là sản phẩm thân thiện với môi trường vì sau 30 đến 50 năm khi hết tuổi khai thác mủ gỗ cao su mới được khai thác. Khách hàng có thể hoàn toàn an tâm về sản phẩm kệ sách do Bestgoods cung cấp với chế độ bảo hành mối mọt, cong vênh, nứt lẻ, thay thế bất cứ chi tiết nào của sản phẩm lỗi, hỏng do vận chuyển hoặc lỗi của nhà sản xuất.
<img src="${getBasePath()}/Sanpham/img/category/KeSach/go-4-tang-40.png">
Giá thành, vận chuyển, lắp đặt:
Với nguồn nguyên liệu dồi dào sẵn có trong nước cùng với công nghệ máy móc hiện đại các sản phẩm kệ sách gỗ cao su có giá rất cạnh tranh so với các sản phẩm gỗ cùng loại.
Các sản phẩm sau khi sản xuất được lót một lớp giấy xốp chống trầy xước và được bọc bìa catoon bên ngoài nên việc vận chuyển rất thuận tiện mà không ảnh hưởng đến sản phẩm.
Kệ sách Bestgoods 4 tầng 40 cm được lắp đặt hết sức dễ dàng vì trong mỗi sản phẩm đã có sẵn ốc và vít.
<img src="${getBasePath()}/Sanpham/img/category/KeSach/1.png">
           
`
},
{
    id: 15,
    image: "/Sanpham/img/category/KeSach/RubikMH-1846.png",
    title: "Kệ trang trí Rubik Modulo Home 1846",
    price: 1100000,
    amount: "17",
    category: "Kệ sách",
    status: "Còn hàng",
    code: "ke3",
    Suppliers: "Modulo Home",
    description: `
Kệ trang trí Rubik Modulo Home 1846 của Modulo Home không những là sản phẩm giúp bạn để sách, đồ lưu niệm,... mà còn là vật trang trí và tô điểm thêm cho không gian nội thất của bạn. Kệ có kết cấu chắc chắn và bền đẹp do được làm từ gỗ công nghiệp nhập khẩu từ Malaysia giúp vẻ ngoài sang trọng và bắt mắt hơn. Kệ trang trí Rubik Modulo Home 1846 có nhiều ngăn với kích thước phù hợp để bạn có thể lưu giữ bộ sưu tập sách, những khung hình kỷ niệm, những chú gấu bông đáng yêu hay một vài chai nước hoa, chai rượu với kiểu dáng lạ mắt để trang trí cho ngôi nhà của mình.
<img src="${getBasePath()}/Sanpham/img/category/KeSach/RubikMH-1846.png">
ĐẶC ĐIỂM NỔI BẬT
Chất liệu cao cấp
Bề mặt kệ được làm từ gỗ công nghiệp nhập khẩu từ Malaysia đã qua xử lý, hạn chế thấm nước và chống cong vênh, phù hợp với khí hậu Việt Nam. Bên cạnh đó, sản phẩm được giữ màu sắc tự nhiên của gỗ, vô cùng trang nhã, không bóng, đem đến sự tinh tế và sang trọng cho không gian nội thất của bạn.
<img src="${getBasePath()}/Sanpham/img/category/KeSach/5.png">

`
},
{
    id: 16,
    image: "/Sanpham/img/category/KeSach/treo-Hurakids-2130-001.png",
    title: "Giá sách treo Hurakids 2130-001",
    price: 598000,
    amount: "18",
    category: "Kệ sách",
    status: "Còn hàng",
    code: "ke4",
    Suppliers: "Hurakids",
    description: `
Đối với các không gian nội thất nhỏ hẹp thì lựa chọn những vật dụng, đồ dùng, thiết bị,... có kích thước nhỏ gọn, tiện lợi, đa năng và không chiếm nhiều không gian là một việc vô cùng cần thiết. Hãy nhanh tay sở hữu ngay chiếc kệ sách treo Hurakids 2130-002 để không gian nhà bạn được sắp xếp gọn gàng và khoa học hơn. Sản phẩm được thiết kế giúp bạn đựng sách báo, tài liệu phục vụ cho công việc, học tập,... một cách hợp lý và gọn gàng. Với màu sắc tươi sáng, trang nhã từ chất liệu gỗ cao cấp, kệ sách treo Hurakids 2130-002 vừa được trang bị độ bền tuyệt đối, chịu lực tốt vừa mang đến vẻ sang trọng, thu hút cho không gian nhà bạn. Đây chắc chắn sẽ là dụng cụ hỗ trợ đắc lực giúp không gian sống của bạn được ngăn nắp và gọn gàng hơn rất nhiều.
<img src="${getBasePath()}/Sanpham/img/category/KeSach/treo-Hurakids-2130-001.png">
ĐẶC ĐIỂM NỔI BẬT
Chất liệu cao cấp
Kệ sách treo Hurakids 2130-002 được làm từ chất liệu gỗ cao cấp hoàn toàn từ tự nhiên, không có thành phần chì và các kim loại nặng khác ảnh hưởng đến sức khỏe bởi tất cả đều phải vượt qua các tiêu chuẩn nghiêm ngặt về mặt chất lượng để đảm bảo an toàn cho sức khỏe, nhất là đối với trẻ em. Bạn có thể yên tâm sử dụng sản phẩm mà không cần lo lắng về sức khỏe lâu dài của mình và gia đình. Bên cạnh đó, sản phẩm được kết hợp với màu sắc tự nhiên của gỗ, vô cùng trang nhã, nhẹ nhàng, không bóng, tạo cảm giác thoải mái cho bạn đồng thời đem đến sự tinh tế, sang trọng và sự tiện nghi cho không gian nội thất.
Thiết kế thông minh
Kệ sách treo Hurakids 2130-002 được thiết kế để bạn sắp xếp sách
`
},
{
    id: 17,
    image: "/Sanpham/img/category/PhongTam/thanh-treo-giay.png",
    title: "Thanh treo giấy vệ sinh",
    price: 150000,
    amount: "98",
    category: "Phòng tắm",
    status: "Còn hàng",
    code: "phongtam1",
    Suppliers: "My home",
    description: `
Hộp đựng giấy vệ sinh gắn tường cỡ nhỏ Public 14cm là sản phẩm được làm từ nhựa PP có độ cứng vừa phải, luôn bền đẹp, không phai màu, khó gãy vỡ theo thời gian sử dụng.
Thiết kế hình ảnh ngộ nghĩnh ngay phía trước sản phẩm không chỉ giúp tô điểm thêm cho không gian nhà tắm mà còn kích thích các bé chăm sử dụng hơn để giữ gìn vệ sinh cho chính bản thân ngay từ khi còn nhỏ.
Đường răng cắt giấy ẩn sâu bên trong giúp ngắt đoạn dễ dàng mà không gây nguy hiểm cho mọi thành viên trong gia đình.
<img src="${getBasePath()}/Sanpham/img/category/PhongTam/thanh-treo-giay.png">
Gender: Unisex
Model: GT85
Kích thước sản phẩm (D x R x C cm): 15 x 14 x 16
Bảo hành: không bảo hành
Trọng lượng (KG): 0.3
Sản xuất tại: Hong Kong
<img src="${getBasePath()}/Sanpham/img/category/PhongTam/1.png">

`
},
{
    id: 18,
    image: "/Sanpham/img/category/PhongTam/thanh-treo-khan.png",
    title: "Thanh sắt treo khăn",
    price: 109000,
    amount: "124",
    category: "Phòng tắm",
    status: "Còn hàng",
    code: "phongtam2",
    Suppliers: "My home",
    description: `
Bộ 2 thanh treo khăn đôi Minh Bảo MAQ.I.42.1 sẽ giúp bạn treo những chiếc khăn tắm, khăn mặt ngay ngắn và gọn gàng, làm đẹp thêm không gian phòng tắm.
Thanh treo có chất liệu inox sáng bóng, không gỉ sét khi sử dụng lâu trong môi trường nhiều độ ẩm.
Vì thế bạn có thể yên tâm khi treo thanh trong phòng tắm và dùng để treo khăn ướt. Kích thước thanh treo 60 x 35cm.
<img src="${getBasePath()}/Sanpham/img/category/PhongTam/thanh-treo-khan.png">
ĐẶC ĐIỂM NỔI BẬT
Chất liệu inox sáng đẹp, không hoen gỉ
Làm bằng inox nên thanh treo có độ sáng bóng cao, không bị gỉ sét ngay cả trong môi trường nhiều độ ẩm như trong phòng tắm. Hơn nữa, hàng gia dụng làm bằng inox còn mang đến sự sang trọng cho không gian trong nhà. Tiết kiệm diện tích
Thiết kế của thanh treo khăn Minh Bảo MAQ.I.42.1 có các lỗ để bắt vít treo lên tường, do đó sản phẩm vừa gọn gàng mà vừa bảo đảm sự chắc chắn khi bạn treo khăn bên trên. Ngoài ra, với kích thước chiều dài 60cm, chiều ngang 35cm, thanh có thể được gắn trên bất cứ vị trí nào trong phòng tắm mà không gây vướng víu hay choán chỗ.
Gồm 2 thanh treo khăn đôi
Bộ sản phẩm gồm 2 thanh treo inox đôi, mỗi thanh treo có 2 ống đặt song song để bạn treo khăn mặt, khăn tắm... giữ vệ sinh cho những chiếc khăn và làm gọn không gian phòng tắm

`
},
{
    id: 19,
    image: "/Sanpham/img/category/PhongTam/ke-xa-phong.png",
    title: "Kệ chứa xà phòng",
    price: 190000,
    amount: "201",
    category: "Phòng tắm",
    status: "Còn hàng",
    code: "phongtam3",
    Suppliers: "Uncle-Billss",
    description: `
Chứa vật dùng nhà tắm và giữ nhà tắm gọn gàng
Màu sắc bát mắt
Phần trọng tâm
Sản phẩm thương hiệu Anh, lắp ráp Trung Quốc
Bộ sản phẩm bao gồm: 1x1 Kệ Đồ Cho Phòng Tắm
<img src="${getBasePath()}/Sanpham/img/category/PhongTam/ke-xa-phong.png">
THÔNG TIN THƯƠNG HIỆU
Uncle-Billss là cửa hàng khuyến mãi theo mô hình siêu thị thu nhỏ đầu tiên tại Việt Nam, cung cấp hàng ngàn mặt hàng tiêu dùng phổ biến theo nhu cầu của khách hàng với mức giá hấp dẫn. Với đa dạng các mặt hàng tiêu dùng thiết yếu từ chăm sóc cá nhân, chăm sóc gia đình, quần áo, đồ điện, phụ kiện máy tính, phụ kiện tiệc tùng, trang trí và cả các mặt hàng văn phòng phẩm…Uncle-Billss sẽ mang đến cho bạn nhiều sự chọn lựa thông minh và hữu ích.

`
},
{
    id: 20,
    image: "/Sanpham/img/category/PhongTam/den-DTY.png",
    title: "Bóng đèn DTY",
    price: 80000,
    amount: "189",
    category: "Phòng tắm",
    status: "Còn hàng",
    code: "phongtam4",
    Suppliers: "My home",
    description: `
Đèn không chỉ là sản phẩm thiết thực cho mọi gia đình, làm sáng căn phòng mà còn giúp tô điểm cho không gian thêm ấm cúng, sang trọng. Nhiều người vẫn ưa thích một căn phòng luôn sáng đèn để mong những điều tốt đẹp nhất đến với nhà mình theo nghệ thuật thiết kế phong thủy, nội thất. Vì thế mà chúng tôi mang lại cho bạn bóng đèn LED 7W giúp thắp sáng không gian nhà bạn mà vẫn tiết kiệm điện năng hiệu quả nhất.
<img src="${getBasePath()}/Sanpham/img/category/PhongTam/den-DTY.png">
ĐẶC ĐIỂM NỔI BẬT
Ánh sáng đèn LED không có tia UV an toàn cho mắt giúp bảo vệ mắt, không gây mỏi mắt, chống cận thị; chống ung thư da, không gây cháy nổ và không có thủy ngân nên đảm bảo an toàn cho sức khỏe của người tiêu dùng.
Bóng đèn LED 7W Ánh sáng trắng cho ánh sáng chiếu tốt, tiết kiệm lên đến 60% điện năng tiêu thụ so với các loại bóng đèn thường. Tuổi thọ cao lên đến 20.000h, độ bền cao hơn gấp nhiều lần so với bóng đèn compact bình thường.
Sản phẩm làm bằng chất liệu nhựa cao cấp chống trầy, không bị vỡ bể khi va chạm, rơi rớt.
         
`
},
{
    id: 21,
    image: "/Sanpham/img/category/RemCua/num-01.png",
    title: "Rèm cửa 01",
    price: 900000,
    amount: "26",
    category: "Rèm cửa",
    status: "Còn hàng",
    code: "rem1",
    Suppliers: "InterDesign",
    description: `
Rèm nhà tắm họa tiết bong bóng Bubble Fish Interdesign
Xuất xứ: là sản phẩm của Interdesign Mỹ
Kích thước: 1.83m x 1.83m
Màu sắc: Trắng, họa tiết: bong bóng cá vàng
Chất liệu: EVA vinyl
<img src="${getBasePath()}/Sanpham/img/category/RemCua/num-01.png">
Công dụng: rèm nhà tắm, che bồn tắm hoặc khu vực tắm trong phòng
1. Không thấm nước
- Với 100% chất liệu hạt nhựa EVA vinyl, sản phẩm có tính chất tương tự như cao su: đàn hồi, không dễ rách, không thấm nước, dẻo dai, có độ bền cao
- Không nhăn, không hút bụi bẩn, không hại kim loại, móc treo, dễ làm sạch
Rèm nhà tắm họa tiết bong bóng Bubble Fish Interdesign
2. Dễ sử dụng, tiện lợi
- Với thiết kế mờ đảm bảo người từ bên ngoài không nhìn rõ được người bên trong rèm
- Cạnh của rèm được may cẩn thận, chắc chắn, có thêm các lỗ để tiện cho việc treo móc
- Kích thước 1.83m của rèm cũng là một kích thước khá rộng, đủ để sử dụng với các phòng tắm thông thường
3. Thiết kế đẹp mắt, phù hợp với mọi phòng tắm
- Với màu sắc và họa tiết bong bóng cá vàng mang lại vẻ trẻ trung vui tươi, thích hợp cho trẻ nhỏ, rèm che có thể kết hợp một cách hài hòa với các vật dụng khác trong phòng tắm kể cả với các phòng tắm mang phong cách cổ điển và hiện đại
Thương hiệu InterDesign
Interdesign là một hãng sản xuất đồ dùng cho gia đình và thiết kế nhà cửa có tiếng. Công ty chuyên thiết kế và sản xuất những sản phẩm dùng tiện lợi cho ngôi nhà kết hợp giữa thiết kế thông minh, sự nhạy bén trong lĩnh vực thời trang và giá cả cực kỳ cạnh tranh. Chính sự kết hợp giữa các yếu tố này tạo nên một Interdesign với vị trí hàng đầu trong ngành công nghiệp đồ dùng gia đình, có mặt trên 40 đất nước trên toàn thế giới. Với 39 năm lớn mạnh, InterDesign tiếp tục phát triển và mở rộng dòng sản phẩm từ trụ sở chính ở Solon, Ohio
Các dòng sản phẩm của InterDesign US (Mỹ) hiện đang có mặt tại các siêu thị mua bán lớn nhất trên toàn thế giới: Walmart, Kohl's. Costco, Crate & Barrel, Lowe's, Home Depot,...
<img src="${getBasePath()}/Sanpham/img/category/RemCua/num-02.png">
   
`
},
{
    id: 22,
    image: "/Sanpham/img/category/RemCua/num-02.png",
    title: "Rèm cửa 02",
    price: 890000,
    amount: "38",
    category: "Rèm cửa",
    status: "Còn hàng",
    code: "rem2",
    Suppliers: "My home",
    description: `
Rèm cửa với họa tiết hình bướm lãng mạn, tô điểm cho không gian sống nhà bạn thêm sinh động, ấm cúng.
Có thể dùng để trang trí cho cửa phòng, cửa sổ, ngăn chặn ánh nắng, tạo không gian riêng…
Chất liệu vải sợi mềm pha nilon bền đẹp, nhiều màu sắc tươi tắn, ấn tượng.
Thích hợp với nhiều không gian như phòng khách, phòng ngủ…
<img src="${getBasePath()}/Sanpham/img/category/RemCua/num-02.png">
Thông tin sản phẩm:
Kích thước: 100 x 200cm
Màu sắc: xanh biển, tím, hồng đậm, đỏ tươi, hồng nhạt
Chất liệu: vải sợi mềm pha nilon
Họa tiết: hình bướm
Trọng lượng: 180gr
Xuất xứ Việt Nam
Sản phẩm được phân phối bởi công ty CP B&Q Việt Nam
<img src="${getBasePath()}/Sanpham/img/category/RemCua/num-03.png">

`
},
{
    id: 23,
    image: "/Sanpham/img/category/RemCua/num-03.png",
    title: "Rèm cửa 03",
    price: 750000,
    amount: "65",
    category: "Rèm cửa",
    status: "Còn hàng",
    code: "rem3",
    Suppliers: "My home",
    description: `
Cửa sổ luôn là nơi đón ánh sáng và tạo góc nhìn thoáng đãng trong phòng khách,phòng ngủ cũng như phòng sinh hoạt. Vì vậy cửa sổ có yêu cầu cao về tính thẩm mỹ cũng như không thể thiếu đi vẻ sang trọng của rèm cửa. Một bộ rèm 2 lớp với sự kết hợp giữa lớp vải bên ngoài cản sáng che chắn ánh sáng mỗi khi trời nắng nóng, cùng một lớp voan mỏng mềm mại tạo nên vẻ sang trọng mỗi khi chiều xuống. Với những cửa sổ nhỏ chúng ta có thể sử dụng những loại rèm khác như rèm roman xếp lớp, rèm sáo gỗ, rèm cuốn... rất tiết kiệm diện tích mà vẫn giữ nguyên vẻ sang trọng
Ngoài ra có thể kết hợp rèm gỗ để phù hợp với đồ nội thất như giường, tủ kệ, sàn gỗ...
<img src="${getBasePath()}/Sanpham/img/category/RemCua/num-03.png">
Rèm vải một màu đỏ đô, sang trọng hiện đại.
Chất liệu chính là vải thô tuyết, được may theo kiểu Ô rê xỏ lỗ.
Rất dễ khi kết hợp màu rèm cho các đồ đạc nội thất sáng màu như trắng, kem...
Đây là gam màu rất ấm áp mang vẻ đẹp sang trọng cho ngôi nhà, cũng là gam màu tượng trưng cho sự may mắn, nhiều tài lộc.
<img src="${getBasePath()}/Sanpham/img/category/RemCua/num-04.png">
         
`
},
{
    id: 24,
    image: "/Sanpham/img/category/RemCua/num-04.png",
    title: "Rèm cửa 04",
    price: 950000,
    amount: "87",
    category: "Rèm cửa",
    status: "Còn hàng",
    code: "rem4",
    Suppliers: "My home",
    description: `
Cửa sổ luôn là nơi đón ánh sáng và tạo góc nhìn thoáng đãng trong phòng khách, phòng ngủ cũng như phòng sinh hoạt. Vì vậy cửa sổ có yêu cầu cao về tính thẩm mỹ cũng như không thể thiếu đi vẻ sang trọng của rèm cửa. Một bộ rèm 2 lớp với sự kết hợp giữa lớp vải bên ngoài cản sáng che chắn ánh sáng mỗi khi trời nắng nóng, cùng một lớp voan mỏng mềm mại tạo nên vẻ sang trọng mỗi khi chiều xuống. Với những cửa sổ nhỏ chúng ta có thể sử dụng những loại rèm khác như rèm roman xếp lớp, rèm sáo gỗ, rèm cuốn... rất tiết kiệm diện tích mà vẫn giữ nguyên vẻ sang trọng
Ngoài ra có thể kết hợp rèm gỗ để phù hợp với đồ nội thất như giường, tủ kệ, sàn gỗ...
<img src="${getBasePath()}/Sanpham/img/category/RemCua/num-04.png">
Rèm vải một màu đỏ đô, sang trọng hiện đại.
Chất liệu chính là vải thô tuyết, được may theo kiểu Ô rê xỏ lỗ.
Rất dễ khi kết hợp màu rèm cho các đồ đạc nội thất sáng màu như trắng, kem...
Đây là gam màu rất ấm áp mang vẻ đẹp sang trọng cho ngôi nhà, cũng là gam màu tượng trưng cho sự may mắn, nhiều tài lộc.
<img src="${getBasePath()}/Sanpham/img/category/RemCua/num-01.png">
        
`
},
{
    id: 25,
    image: "/Sanpham/img/category/Sofa/kem.png",
    title: "Ghế sofa kem",
    price: 2500000,
    amount: "43",
    category: "Ghế sofa",
    status: "Còn hàng",
    code: "sofa1",
    Suppliers: "Kenny Furniture",
    description: `
Với sự kết hợp hài hoà về màu sắc, mẫu mã và không gian kiến trúc của ngôi nhà.
Những tông màu hiện đại, thiết kế trẻ trung theo từng phong cách.
Công ty sản xuất sofa đơn đẹp rẻ tại 356 Bạch Mai sẽ mang đến cho bạn những bộ ghế sofa giá rẻ hợp với không gian sống.
Với nhiều mẫu mã thiết kế đa dạng theo phong cách khác nhau. Những sản phẩm sofa giá rẻ tại đây tự hào mang đến cho bạn không gian sống hoàn hảo nhất.
Khung gỗ : tự nhiên cao cấp
<img src="${getBasePath()}/Sanpham/img/category/Sofa/1.png">
Chân ghế : tự chọn ( chân inox - chân gỗ)
Đệm mút : Cứng hoặc mềm - bông mút ( tùy chọn )
Kích thước sofa văng : 1800 * 800. ( Kích thước - màu sắc có thể thay đổi theo yêu cầu )
Cam kết đảm bảo chất lượng và giá trị của sản phẩm, nguồn gốc xuất xứ vật liệu rõ ràng.
Đặc biệt : Quý khách có thể kiểm tra giám sát chất lượng sản phẩm sofa theo từng giai đoạn
Miễn phí vận chuyển trong khu vực Hà Nội - Quý khách ở xa chúng tôi sẽ hỗ trợ vận chuyển
<img src="${getBasePath()}/Sanpham/img/category/Sofa/2.png">
          
`
},
{
    id: 26,
    image: "/Sanpham/img/category/Sofa/cafe.png",
    title: "Sofa cafe",
    price: 2300000,
    amount: "12",
    category: "Ghế sofa",
    status: "Còn hàng",
    code: "sofa2",
    Suppliers: "Kenny Furniture",
    description: `
- Chất liệu nỉ ấm áp kết hợp hài hòa cùng màu sắc
- Kiểu dáng thiết kế đặc biệt với phần tựa lưng thấp và có đệm mút dày nhưng lại không tạo cảm giác thô cho toàn bộ bộ sofa.
- Gam màu lạnh của bộ ghế sofa kết hợp cùng màu gối tạo sự hòa trộn hài hòa giữa màu sắc
- Bộ sofa này dành cho những căn phòng có không gian đủ rộng để bài trí.
- Cấu tạo: Vật liệu bọc nỉ nhập khẩu Indo
<img src="${getBasePath()}/Sanpham/img/category/Sofa/3.png">
- Khung gỗ Sồi tự nhiên đã qua xử lý, chống mối mọt và cong vênh.
- Đệm mút Vạn Thành cao cấp có độ đàn hồi lớn, lò xo cường độ cao
- Gọn gàng và mang màu sắc êm dịu, sofa đôn mã 11 là sản phẩm bạn muốn tìm cho không gian khiêm tốn trong ngôi nhà của mình.
- Được thiết kế cách điệu, bố cục chắc chắn sẽ làm bạn hài lòng và thoải mái khi sử dụng.
- Mẫu ghế sofa đôn được ưa chuộng
<img src="${getBasePath()}/Sanpham/img/category/Sofa/4.png">
        
`
},
{
    id: 27,
    image: "/Sanpham/img/category/Sofa/don-em-ai.png",
    title: "Ghế sofa đơn êm ái",
    price: 2600000,
    amount: "2",
    category: "Ghế sofa",
    status: "Còn hàng",
    code: "sofa3",
    Suppliers: "Kenny Furniture",
    description: `
Với sự kết hợp hài hoà về màu sắc, mẫu mã và không gian kiến trúc của ngôi nhà.
Những tông màu hiện đại, thiết kế trẻ trung theo từng phong cách.
Công ty sản xuất sofa đơn đẹp rẻ tại 356 Bạch Mai sẽ mang đến cho bạn những bộ ghế sofa giá rẻ hợp với không gian sống.
Với nhiều mẫu mã thiết kế đa dạng theo phong cách khác nhau. Những sản phẩm sofa giá rẻ tại đây tự hào mang đến cho bạn không gian sống hoàn hảo nhất.
Khung gỗ : tự nhiên cao cấp
<img src="${getBasePath()}/Sanpham/img/category/Sofa/don-em-ai.png">
- Khung gỗ Sồi tự nhiên đã qua xử lý, chống mối mọt và cong vênh.
- Đệm mút Vạn Thành cao cấp có độ đàn hồi lớn, lò xo cường độ cao
- Gọn gàng và mang màu sắc êm dịu, sofa đôn mã 11 là sản phẩm bạn muốn tìm cho không gian khiêm tốn trong ngôi nhà của mình.
- Được thiết kế cách điệu, bố cục chắc chắn sẽ làm bạn hài lòng và thoải mái khi sử dụng.
- Mẫu ghế sofa đôn được ưa chuộng
<img src="${getBasePath()}/Sanpham/img/category/Sofa/5.png">
           
`
},
{
    id: 28,
    image: "/Sanpham/img/category/Sofa/don-SFD18.png",
    title: "Sofa đơn SFD18",
    price: 5100000,
    amount: "12",
    category: "Ghế sofa",
    status: "Còn hàng",
    code: "sofa4",
    Suppliers: "First Impression",
    description: `
Chất liệu: khung gỗ tự nhiên đã qua xử lý chống cong vênh, mối mọt.
Đệm mút cứng hoặc mềm (tùy chọn).
Chân gỗ tròn cao 3cm.
Nỉ Indo nhập khẩu.
Ghế có 2 đệm, mỗi đệm dày 12 cm
<img src="${getBasePath()}/Sanpham/img/category/Sofa/7.png">
Một chiếc ghế sofa văng đơn đẹp có kiểu dáng độc đáo, màu sắc tươi tắn phù hợp với phong cách thiết kế của ngôi nhà nói chung và màu sắc của các đồ nội thất khác nói riêng sẽ khiến ngôi nhà có được sự đồng nhất, Sofa đẹp
    còn tạo nên sự ấn tượng cho khách khi bước chân vào ngôi nhà.
Mẫu ghế sofa văng đơn đẹp ấn tượng
Sofa don dep với gam màu nâu nhẹ tạo nên điểm nhấn cho phòng khách nhà bạn.
Dáng ghế chắc chắn cùng với lớp mút êm ái, có độ đàn hồi tốt tạo được sự thoải mái cho khách hàng sau mỗi ngày học và làm việc mệt mỏi.
<img src="${getBasePath()}/Sanpham/img/category/Sofa/8.png">

`
},
{
    id: 29,
    image: "/Sanpham/img/category/TuQuanAo/BOV-WVR-1855L.png",
    title: "Tủ quần áo BIG ONE VIETNAM WVR-1855L",
    price: 4000000,
    amount: "3",
    category: "Tủ quần áo",
    status: "Còn hàng",
    code: "tu1",
    Suppliers: "Big One",
    description: `
Sản phẩm được sản xuất từ công ty Nhật Bản được phân phối bởi Công Ty Big One Việt Nam.
Đây là sản phẩm có kiểu dáng và màu sắc đang được yêu thích và bán chạy tại thị trường Nhật Bản.
<img src="${getBasePath()}/Sanpham/img/category/TuQuanAo/BOV-WVR-1855L.png">
Đặc điểm chính:
SKU: I061HLAV7H1VNAMZ-516899
Màu: màu gỗ tự nhiên
Chất liệu: Gỗ Công Nghiệp Nhập Khẩu
Model: Weveran
Kích thước sản phẩm (D x R x C cm): 56,6x59,4x180,3
Bảo hành: Không bảo hành
Trọng lượng (KG): 35,2
Sản xuất tại: Việt Nam
<img src="${getBasePath()}/Sanpham/img/category/TuQuanAo/1.png">

`
},
{
    id: 30,
    image: "/Sanpham/img/category/TuQuanAo/B1241K.png",
    title: "Tủ áo B1241K",
    price: 5400000,
    amount: "7",
    category: "Tủ quần áo",
    status: "Còn hàng",
    code: "tu2",
    Suppliers: "Bellasofa",
    description: `
Đặc điểm nổi bật của TỦ ÁO B1241:
Thiết kế tinh tế và hiện đại phù hợp với phong cách Việt Nam.Tủ chia thành 2 ngăn đứng với 3 cánh cửa mở đóng tiện dụng:
Ngăn đứng lớn để treo quần áo, phía dưới được trang bị thêm 1 ngăn mở chứa các vật dụng cần thiết.
Ngăn đứng nhỏ hơn gồm 4 ngăn mở tiện dụng để quần áo, gối, mền hoặc các vật dụng cần thiết khác.
Viền nhôm trang trí đẹp và tay nắm cùng tông màu bạc rất bắt mắt.
Chất liệu ván MFC được xử lý chống mọt và chống hút ẩm.
<img src="${getBasePath()}/Sanpham/img/category/TuQuanAo/B1241K.png">
Cam kết:
Giao hàng chính hãng và lắp ráp tận nhà trong thời gian nhanh nhất
Dịch vụ sau bán hàng tốt nhất.
Xuất xứ: tại Bellasofa Việt Nam theo công nghệ Châu Âu.
Bảo hành: 1 năm lỗi kỹ thuật (lỗi sản xuất)
           
`
},
{
    id: 31,
    image: "/Sanpham/img/category/TuQuanAo/Bellasofa-B1239.png",
    title: "Tủ Áo Bellasofa B1239",
    price: 3790000,
    amount: "11",
    category: "Tủ quần áo",
    status: "Còn hàng",
    code: "tu3",
    Suppliers: "Bellasofa",
    description: `
Đặc điểm nổi bật của TỦ ÁO B1239:
Thiết kế tinh tế, hiện đại, sang trọng theo phong cách Châu Âu phù hợp với mọi không gian phòng ngủ.
Tủ chia thành 2 ngăn đứng với 4 cánh cửa mở đóng tiện dụng:
Ngăn đứng để treo áo, phía dưới trong ngăn treo áo có trang bị 3 ngăn mở có thể chứa gối, mền và các vật dụng cần thiết.
<img src="${getBasePath()}/Sanpham/img/category/TuQuanAo/Bellasofa-B1239.png">
Ngăn đứng để treo quần, phía dưới trong ngăn treo quần có trang bị 1 ngăn tủ khóa lớn để cất giữ các đồ có giá trị.
Viền nhôm dày cao cấp được nẹp vào cách cạnh tủ và cánh cửa rất chắc chắn.
Chất liệu ván MFC được xử lý chống mọt và chống hút ẩm, nhôm cao cấp và Inox
Cam kết:
Giao hàng chính hãng và lắp ráp tận nhà trong thời gian nhanh nhất
Dịch vụ sau bán hàng tốt nhất.
Xuất xứ: tại Bellasofa Việt Nam theo công nghệ Châu Âu.
Bảo hành: 1 năm lỗi kỹ thuật (lỗi sản xuất).
<img src="${getBasePath()}/Sanpham/img/category/TuQuanAo/5.png">

`
},
{
    id: 32,
    image: "/Sanpham/img/category/TuQuanAo/B1238.png",
    title: "Tủ áo B1238",
    price: "5.100.000",
    amount: "1",
    category: "Tủ quần áo",
    status: "Còn hàng",
    code: "tu4",
    Suppliers: "Bellasofa",
    description: `
Thiết kế tinh tế và hiện đại phù hợp với phong cách Việt Nam.
Tủ chia thành 2 ngăn đứng với 3 cánh cửa mở đóng tiện dụng:
Ngăn đứng lớn để treo áo, phía dưới trong ngăn treo áo có trang bị 2 ngăn kéo nhỏ và 3 ngăn mở có thể chứa các vật dụng cần thiết.
Ngăn đứng nhỏ hơn để treo quần, phía dưới trong ngăn treo quần có trang bị 1 ngăn mở để chứa các vật dụng cần thiết.
<img src="${getBasePath()}/Sanpham/img/category/TuQuanAo/B1238.png">
Kiếng sơn màu được ốp mặt trước tủ rất sang trọng và hiện đại.
Viền nhôm dày cao cấp được nẹp vào cách cạnh tủ và cánh cửa rất chắc chắn.
Chất liệu ván MFC được xử lý chống mọt và chống hút ẩm.
Cam kết:
Giao hàng chính hãng và lắp ráp tận nhà trong thời gian nhanh nhất
Dịch vụ sau bán hàng tốt nhất.
Xuất xứ: tại Bellasofa Việt Nam theo công nghệ Châu Âu.
Bảo hành: 1 năm lỗi kỹ thuật (lỗi sản xuất).
<img src="${getBasePath()}/Sanpham/img/category/TuQuanAo/7.png">

`
},
]

function saveProductsToLocalStorage(products) {
    // Kiểm tra xem 'products' đã có trong localStorage chưa
    var existingProducts = JSON.parse(localStorage.getItem("products"));

    // Nếu 'products' chưa có trong localStorage thì lưu nó vào
    if (!existingProducts) {
        localStorage.setItem("products", JSON.stringify(products));
    }
}

const urlParams = new URLSearchParams(window.location.search);
const skipSave = urlParams.get('skipSave') === 'true';

if (!skipSave) {
    saveProductsToLocalStorage(productsOrigin);
}

function loadProductsFromLocalStorage() {
    const productsData = localStorage.getItem("products");
    
    // Kiểm tra xem dữ liệu có tồn tại và có phải là JSON hợp lệ không
    if (!productsData) {
        console.log("No products data found in localStorage");
        return [];
    }

    try {
        const products = JSON.parse(productsData);
        return Array.isArray(products) ? products : [];
    } catch (error) {
        console.error("Error parsing 'products' data from localStorage:", error);
        return [];
    }
}

products = loadProductsFromLocalStorage();

const usersOrigin = [
    {
        id: 1,
        name: "Triệu Thanh Phú",
        username: "trieuthanhphu",
        address: "191 Bà Triệu, Phường Lê Đại Hành, Quận Hai Bà Trưng, Thành phố Hà Nội",
        phone: "9123369598",
        account: "PetSuppliesCT@gmail.com",
        password: "poseydo5913",
        isSignIn: 0,
        cart: [],
        banned: 0,
        birthdate: "1990-03-15",
        gender: "Nam"
    },
    {
        id: 2,
        name: "Quán Thiếu Anh",
        username: "quanthieuanh",
        address: "6, Hòa Khánh, Phường Hòa Khánh, Quận Liên Chiểu, Thành phố Đà Nẵng",
        phone: "7174378833",
        account: "FrenzyFlorists@gmail.com",
        password: "divagra3915",
        isSignIn: 0,
        cart: [],
        banned: 0,
        birthdate: "1985-07-22",
        gender: "Nam"
    },
    {
        id: 3,
        name: "Vưu Hữu Khôi",
        username: "vuuhuukhoi",
        address: "37 Đoàn Kết, Phường Tân Sơn Nhì, Quận Tân Phú, Thành phố Hồ Chí Minh",
        phone: "7034724602",
        account: "iGotItComputers@gmail.com",
        password: "perebark226",
        isSignIn: 0,
        cart: [],
        banned: 0,
        birthdate: "1992-11-30",
        gender: "Nam"
    },
    {
        id: 4,
        name: "Bạc Xuân Hiếu",
        username: "bacxuanhieu",
        address: "27/785, Đường Trương Định, Phường Giáp Bát, Quận Hoàng Mai, Thành phố Hà Nội",
        phone: "5733557157",
        account: "WackyWillie@gmail.com",
        password: "Mail33@998",
        isSignIn: 0,
        cart: [],
        banned: 0,
        birthdate: "1988-02-14",
        gender: "Nam"
    },
    {
        id: 5,
        name: "Đặng Xuân Minh",
        username: "dangxuanminh",
        address: "32 Đường Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội",
        phone: "9845631234",
        account: "BookShopOnline@gmail.com",
        password: "skydiver256",
        isSignIn: 0,
        cart: [],
        banned: 0,
        birthdate: "1995-08-19",
        gender: "Nam"
    },
    {
        id: 6,
        name: "Phan Thị Hồng",
        username: "phanthihong",
        address: "15 Đường Lý Thường Kiệt, Phường Thạch Thang, Quận Hải Châu, Thành phố Đà Nẵng",
        phone: "9432225589",
        account: "EcoHomeDesign@gmail.com",
        password: "sunshine485",
        isSignIn: 0,
        cart: [],
        banned: 0,
        birthdate: "1991-05-10",
        gender: "Nữ"
    },
    {
        id: 7,
        name: "Nguyễn Hữu Tín",
        username: "nguyenhuutin",
        address: "54 Đường Xô Viết Nghệ Tĩnh, Phường 19, Quận Bình Thạnh, Thành phố Hồ Chí Minh",
        phone: "9851127896",
        account: "CoffeeLifeVN@gmail.com",
        password: "blackbean987",
        isSignIn: 0,
        cart: [],
        banned: 0,
        birthdate: "1987-09-27",
        gender: "Nam"
    },
    {
        id: 8,
        name: "Lê Thị Mai",
        username: "lethimai",
        address: "78 Đường Nguyễn Văn Cừ, Phường An Khánh, Quận Ninh Kiều, Thành phố Cần Thơ",
        phone: "9613456789",
        account: "GreenLivingShop@gmail.com",
        password: "greenleaf561",
        isSignIn: 0,
        cart: [],
        banned: 0,
        birthdate: "1993-12-05",
        gender: "Nữ"
    },
    {
        id: 9,
        name: "Võ Anh Tú",
        username: "voanhtu",
        address: "99 Đường Võ Thị Sáu, Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh",
        phone: "9876654432",
        account: "TechHubVN@gmail.com",
        password: "securepass123",
        isSignIn: 0,
        cart: [],
        banned: 0,
        birthdate: "1989-01-17",
        gender: "Nam"
    },
    {
        id: 10,
        name: "Bùi Văn Nam",
        username: "buivannam",
        address: "12 Đường Pasteur, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
        phone: "9167789988",
        account: "SportsKing@gmail.com",
        password: "kingpin789",
        isSignIn: 0,
        cart: [],
        banned: 0,
        birthdate: "1990-06-02",
        gender: "Nam"
    }
];


function saveUsersToLocalStorage(users) {
    // Kiểm tra xem 'users' đã có trong localStorage chưa
    var existingUsers = JSON.parse(localStorage.getItem("users"));

    // Nếu 'users' chưa có trong localStorage thì lưu nó vào
    if (!existingUsers) {
        localStorage.setItem("users", JSON.stringify(users));
    }
}


saveUsersToLocalStorage(usersOrigin);

function loadUsersFromLocalStorage() {
    const usersData = localStorage.getItem("users");

    // Kiểm tra xem dữ liệu có tồn tại và có phải là JSON hợp lệ không
    if (!usersData) {
        console.log("No users data found in localStorage");
        return [];
    }

    try {
        const users = JSON.parse(usersData);
        return Array.isArray(users) ? users : [];
    } catch (error) {
        console.error("Error parsing 'users' data from localStorage:", error);
        return [];
    }
}

const users = loadUsersFromLocalStorage();

const adminsOrigin = [
    {
      id: 1,
      name: "Nguyen Van A",
      phone: "0123456789",
      username: "adminA",
      password: "password123",
      isSignIn: 0, // 0: chưa đăng nhập, 1: đã đăng nhập
      email: "adminA@example.com" // Thêm email
    },
    {
      id: 2,
      name: "Le Thi B",
      phone: "0987654321",
      username: "adminB",
      password: "securePass456",
      isSignIn: 0,
      email: "adminB@example.com" // Thêm email
    },
    {
      id: 3,
      name: "Tran Van C",
      phone: "0912345678",
      username: "adminC",
      password: "pass7890",
      isSignIn: 0,
      email: "adminC@example.com" // Thêm email
    }
  ];
  

  function saveAdminsToLocalStorage(admins) {
    // Kiểm tra xem 'admins' đã có trong localStorage chưa
    var existingUsers = JSON.parse(localStorage.getItem("admins"));

    // Nếu 'admins' chưa có trong localStorage thì lưu nó vào
    if (!existingUsers) {
        localStorage.setItem("admins", JSON.stringify(admins));
    }
}


saveAdminsToLocalStorage(adminsOrigin);

function loadAdminsFromLocalStorage() {
    const adminsData = localStorage.getItem("admins");

    // Kiểm tra xem dữ liệu có tồn tại và có phải là JSON hợp lệ không
    if (!adminsData) {
        console.log("No admins data found in localStorage");
        return [];
    }

    try {
        const admins = JSON.parse(adminsData);
        return Array.isArray(admins) ? admins : [];
    } catch (error) {
        console.error("Error parsing 'users' data from localStorage:", error);
        return [];
    }
}

const admins = loadAdminsFromLocalStorage();

const ordersOrigin = [
    {
        id: 1,
        fullname: "Nguyễn Văn A",
        email: "nguyenvana@example.com",
        phone: "0901234567",
        status: "Chưa xử lý",
        pay_method: "Thanh toán qua thẻ",
        address: "123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
        order_date: "2023-10-01",
        delivery_date: "",
        products: [
            { ...products[0], quantity: 2 },
            { ...products[1], quantity: 1 }
        ],
        userID: 1
    },
    {
        id: 2,
        fullname: "Trần Thị B",
        email: "tranthib@example.com",
        phone: "0912345678",
        status: "Đã xác nhận",
        pay_method: "Thanh toán tiền mặt",
        address: "456 Đường Nguyễn Huệ, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
        order_date: "2024-09-15",
        delivery_date: "2024-09-20",
        products: [
            { ...products[2], quantity: 1 },
            { ...products[3], quantity: 3 }
        ],
        userID: 2
    },
    {
        id: 3,
        fullname: "Lê Văn C",
        email: "levanc@example.com",
        phone: "0923456789",
        status: "Đã hủy",
        pay_method: "Chuyển khoản",
        address: "789 Đường Cách Mạng Tháng 8, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh",
        order_date: "2024-08-25",
        delivery_date: "",
        products: [
            { ...products[4], quantity: 1 },
            { ...products[5], quantity: 2 },
            { ...products[6], quantity: 1 }
        ],
        userID: 3
    },
    {
        id: 4,
        fullname: "Phạm Thị D",
        email: "phamthid@example.com",
        phone: "0934567890",
        status: "Chưa xử lý",
        pay_method: "Thanh toán qua thẻ",
        address: "321 Đường Võ Văn Kiệt, Phường Cầu Kho, Quận 5, Thành phố Hồ Chí Minh",
        order_date: "2024-10-05",
        delivery_date: "",
        products: [
            { ...products[1], quantity: 1 },
            { ...products[3], quantity: 2 }
        ],
        userID: 4
    },
    {
        id: 5,
        fullname: "Hoàng Văn E",
        email: "hoangvane@example.com",
        phone: "0945678901",
        status: "Đã giao thành công",
        pay_method: "Chuyển khoản",
        address: "654 Đường Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh",
        order_date: "2024-09-10",
        delivery_date: "2024-09-15",
        products: [
            { ...products[0], quantity: 2 },
            { ...products[2], quantity: 1 },
            { ...products[5], quantity: 3 }
        ],
        userID: 5
    },
    {
        id: 6,
        fullname: "Nguyễn Minh T",
        email: "nguyenminht@example.com",
        phone: "0987654321",
        status: "Chưa xử lý",
        pay_method: "Thanh toán tiền mặt",
        address: "45 Đường Cách Mạng Tháng 8, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh",
        order_date: "2024-10-08",
        delivery_date: "",
        products: [
            { ...products[0], quantity: 1 },
            { ...products[4], quantity: 2 }
        ],
        userID: 6
    },
    {
        id: 7,
        fullname: "Lê Thị L",
        email: "lethil@example.com",
        phone: "0934567891",
        status: "Đã giao thành công",
        pay_method: "Chuyển khoản",
        address: "123 Đường Nguyễn Văn Cừ, Phường Thảo Điền, Quận 2, Thành phố Hồ Chí Minh",
        order_date: "2024-10-09",
        delivery_date: "2024-10-15",
        products: [
            { ...products[3], quantity: 1 },
            { ...products[5], quantity: 2 }
        ],
        userID: 7
    },
    {
        id: 8,
        fullname: "Võ Minh C",
        email: "vominhca@example.com",
        phone: "0909876543",
        status: "Đã hủy",
        pay_method: "Thanh toán tiền mặt",
        address: "19 Đường Trương Định, Phường 13, Quận 4, Thành phố Hồ Chí Minh",
        order_date: "2024-09-12",
        delivery_date: "",
        products: [
            { ...products[2], quantity: 1 },
            { ...products[6], quantity: 3 }
        ],
        userID: 8
    },
    {
        id: 9,
        fullname: "Trần Văn K",
        email: "tranvank@example.com",
        phone: "0912345679",
        status: "Chưa xử lý",
        pay_method: "Thanh toán qua thẻ",
        address: "456 Đường Lê Đại Hành, Phường 15, Quận 3, Thành phố Hồ Chí Minh",
        order_date: "2024-10-13",
        delivery_date: "",
        products: [
            { ...products[1], quantity: 3 },
            { ...products[4], quantity: 1 }
        ],
        userID: 9
    },
    {
        id: 10,
        fullname: "Nguyễn Thị D",
        email: "nguyenthid@example.com",
        phone: "0918765432",
        status: "Đã xác nhận",
        pay_method: "Chuyển khoản",
        address: "234 Đường Nguyễn Văn Cừ, Phường Bình An, Quận 2, Thành phố Hồ Chí Minh",
        order_date: "2024-10-05",
        delivery_date: "2024-10-12",
        products: [
            { ...products[5], quantity: 2 },
            { ...products[3], quantity: 1 }
        ],
        userID: 10
    },
    {
        id: 11,
        fullname: "Phan Văn P",
        email: "phanvamp@example.com",
        phone: "0931234567",
        status: "Đã giao thành công",
        pay_method: "Thanh toán qua thẻ",
        address: "19 Đường Võ Thị Sáu, Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh",
        order_date: "2024-09-28",
        delivery_date: "2024-10-05",
        products: [
            { ...products[0], quantity: 1 },
            { ...products[2], quantity: 2 }
        ],
        userID: 1
    },
    {
        id: 12,
        fullname: "Vũ Hoàng T",
        email: "vuhoangt@example.com",
        phone: "0902345678",
        status: "Đã giao thành công",
        pay_method: "Chuyển khoản",
        address: "654 Đường Cách Mạng Tháng 8, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh",
        order_date: "2024-09-19",
        delivery_date: "2024-09-25",
        products: [
            { ...products[1], quantity: 2 },
            { ...products[4], quantity: 1 }
        ],
        userID: 2
    },
    {
        id: 13,
        fullname: "Bùi Hữu H",
        email: "buihuuh@example.com",
        phone: "0939876543",
        status: "Chưa xử lý",
        pay_method: "Thanh toán tiền mặt",
        address: "789 Đường Lê Lợi, Phường Bình Trị Đông, Quận 6, Thành phố Hồ Chí Minh",
        order_date: "2024-10-11",
        delivery_date: "",
        products: [
            { ...products[3], quantity: 2 },
            { ...products[5], quantity: 1 }
        ],
        userID: 3
    },
    {
        id: 14,
        fullname: "Nguyễn Văn T",
        email: "nguyenvant@example.com",
        phone: "0923456780",
        status: "Đã giao thành công",
        pay_method: "Thanh toán qua thẻ",
        address: "321 Đường Lý Thái Tổ, Phường Cầu Kho, Quận 5, Thành phố Hồ Chí Minh",
        order_date: "2024-10-05",
        delivery_date: "2024-10-10",
        products: [
            { ...products[2], quantity: 1 },
            { ...products[6], quantity: 3 }
        ],
        userID: 5
    },
    {
        id: 15,
        fullname: "Lê Hồng H",
        email: "lehhoh@example.com",
        phone: "0909876541",
        status: "Chưa xử lý",
        pay_method: "Chuyển khoản",
        address: "23 Đường Võ Văn Kiệt, Phường Tân Hưng, Quận 7, Thành phố Hồ Chí Minh",
        order_date: "2024-09-30",
        delivery_date: "",
        products: [
            { ...products[0], quantity: 2 },
            { ...products[1], quantity: 1 }
        ],
        userID: 6
    }
];



function saveOrdersToLocalStorage(orders) {
    // Kiểm tra xem 'orders' đã có trong localStorage chưa
    var existingOrders = JSON.parse(localStorage.getItem("orders"));

    // Nếu 'orders' chưa có trong localStorage thì lưu nó vào
    if (!existingOrders) {
        localStorage.setItem("orders", JSON.stringify(orders));
    }
}


saveOrdersToLocalStorage(ordersOrigin);

function loadOrdersFromLocalStorage() {
    const ordersData = localStorage.getItem("orders");

    // Kiểm tra xem dữ liệu có tồn tại và có phải là JSON hợp lệ không
    if (!ordersData) {
        console.log("No orders data found in localStorage");
        return [];
    }

    try {
        const orders = JSON.parse(ordersData);
        return Array.isArray(orders) ? orders : [];
    } catch (error) {
        console.error("Error parsing 'orders' data from localStorage:", error);
        return [];
    }
}

const orders = loadOrdersFromLocalStorage(); 
function addProductToOrder(productId, quantity) {
    // Tìm sản phẩm trong mảng products
    const product = products.find(prod => prod.id === productId);
    
    // Kiểm tra nếu sản phẩm tồn tại và số lượng hợp lệ
    if (product && quantity > 0) {
        const orderItem = {
            ...product,       // Sao chép thông tin sản phẩm
            quantity: quantity,  // Thêm số lượng vào đối tượng
            orderDate: new Date().toISOString() // Thêm ngày đặt hàng nếu cần
        };
        
        orders.push(orderItem);  // Thêm sản phẩm vào mảng orders
        localStorage.setItem("orders", JSON.stringify(orders)); // Lưu orders vào localStorage
    } else {
        console.log("Sản phẩm không tồn tại hoặc số lượng không hợp lệ.");
    }
}