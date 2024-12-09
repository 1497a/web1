        // Mảng để lưu nội dung
        const contentArray = [];

        // Lắng nghe sự kiện khi người dùng chọn hình ảnh
        const input = document.getElementById('imageInput');
        const editableDiv = document.getElementById('editableDiv');

        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                
                reader.onload = function(event) {
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    editableDiv.appendChild(img); // Chèn ảnh vào khung editable
                };
                
                reader.readAsDataURL(file); // Đọc file hình ảnh và chuyển đổi thành Data URL
            }
        });

        // Lắng nghe sự kiện nhấn nút lưu
        document.getElementById('saveButton').addEventListener('click', function() {
            let content = editableDiv.innerHTML; // Lấy nội dung trong khung contenteditable

            // Chuyển hình ảnh thành đường dẫn thư mục (ví dụ giả định đường dẫn thư mục đã có sẵn)
            content = content.replace(/<img src="([^"]+)"/g, function(match, p1) {
                return `<img src="/path/to/images/${p1.split('/').pop()}"`; // Chuyển thành đường dẫn thư mục
            });

            // Lưu nội dung vào mảng
            contentArray.push(content);

            // In mảng ra console để kiểm tra
            console.log(contentArray);

            // Hiển thị thông báo lưu thành công
            alert("Nội dung đã được lưu vào mảng!");
        });