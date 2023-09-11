<?php
  // Nhận dữ liệu ảnh
  $image = $_FILES["image"];

  // Kiểm tra kích thước ảnh
  if ($image["size"] > 10000000) {
    echo "Kích thước ảnh quá lớn.";
    exit;
  }

  // Lấy tên ảnh
  $name = uniqid() . ".jpg";

  // Lưu ảnh vào Google Drive
  $file = fopen("gs://[tên-thư-mục]/" . $name, "wb");
  fwrite($file, $image["tmp_name"]);
  fclose($file);

  // Trả về đường dẫn ảnh
  echo "https://drive.google.com/uc?id=[id-ảnh]";
?>
