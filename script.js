document.getElementById('generateBtn').addEventListener('click', function() {
    const qrInput = document.getElementById('qrInput').value;
    const qrCodeDiv = document.getElementById('qrCode');

    if (qrInput === '') {
        alert('Please enter a value to generate a QR code.');
        return;
    }

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrInput)}&size=200x200`;
    qrCodeDiv.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;
});
// // document.getElementById('generateBtn').addEventListener('click', function() {...});:

// Sử dụng document.getElementById để lấy nút có id là generateBtn.
// Thêm một sự kiện click cho nút này. Khi nút được nhấn, hàm bên trong sẽ được thực thi.
// const qrInput = document.getElementById('qrInput').value;:

// Lấy giá trị từ trường nhập liệu có id là qrInput. Giá trị này sẽ là văn bản hoặc URL mà người dùng nhập vào.
// const qrCodeDiv = document.getElementById('qrCode');:

// Lấy thẻ div có id là qrCode, nơi mà mã QR sẽ được hiển thị.
// if (qrInput === '') { ... }:

// Kiểm tra xem người dùng có nhập gì vào trường nhập liệu hay không. Nếu không có giá trị (chuỗi rỗng), một thông báo cảnh báo sẽ được hiển thị.
// alert('Please enter a value to generate a QR code.');: Hiển thị một hộp thoại cảnh báo yêu cầu người dùng nhập giá trị.
// return;: Dừng thực thi hàm nếu không có giá trị nhập vào.
// const qrCodeUrl = https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrInput)}&size=200x200;:

// Tạo URL cho API tạo mã QR.
// encodeURIComponent(qrInput): Mã hóa giá trị nhập vào để đảm bảo rằng nó an toàn cho việc sử dụng trong URL (ví dụ: chuyển đổi các ký tự đặc biệt thành định dạng URL).
// size=200x200: Đặt kích thước của mã QR là 200x200 pixel.
// qrCodeDiv.innerHTML = <img src="${qrCodeUrl}" alt="QR Code">;:

// Cập nhật nội dung của thẻ div qrCode bằng cách thêm một thẻ <img> với thuộc tính src là URL của mã QR đã được tạo.
// alt="QR Code": Cung cấp mô tả cho hình ảnh, hữu ích cho SEO và cho người dùng sử dụng trình đọc màn hình. 