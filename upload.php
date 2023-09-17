<?php

// Tạo một client Google Cloud Storage
$storage = new StorageClient();

// Lấy các tệp được tải lên
$files = $_FILES["files"];

// Kiểm tra xem các tệp có hợp lệ hay không
foreach ($files as $file) {
  if ($file["error"] != UPLOAD_ERR_OK) {
    // Tệp không hợp lệ
    echo "Tệp không hợp lệ.";
    exit;
  }
}

// Lưu các tệp vào Google Drive
foreach ($files as $file) {
  $blob = $storage->bucket("your-bucket-name")->uploadBlob($file["tmp_name"], "uploads/" . $file["name"]);
}

// Thông báo cho người dùng rằng các tệp đã được tải lên thành công
echo "Các tệp đã được tải lên thành công.";

?>
