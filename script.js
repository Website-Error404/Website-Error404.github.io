const fileInfo = [
    { duongDanAnh: 'duongdananh1.jpg', duongDanTe: 'duongdanfile1.pdf', tentep: 'Tệp 1 (PDF)' },
    { duongDanAnh: 'duongdananh2.jpg', duongDanTe: 'duongdanfile2.zip', tentep: 'Tệp 2 (ZIP)' },
    // Thêm thông tin cho các tệp khác tương tự
];

for (let i = 0; i < 80; i++) {
    const fileContainer = document.getElementById('file-container');
    const fileBox = document.createElement('div');
    fileBox.className = 'file-box';

    const fileImage = document.createElement('img');
    fileImage.src = fileInfo[i].duongDanAnh;
    fileImage.alt = `Hình ảnh tệp ${i}`;
    fileImage.className = 'file-image';

    const fileDescription = document.createElement('div');
    fileDescription.className = 'file-description';

    const fileHeader = document.createElement('h2');
    fileHeader.textContent = fileInfo[i].tentep;

    const fileText = document.createElement('p');
    fileText.textContent = `Mô tả tệp ${i}.`;

    const downloadButton = document.createElement('a');
    downloadButton.href = fileInfo[i].duongDanTe;
    downloadButton.className = 'download-button';
    downloadButton.textContent = 'Tải về';
    downloadButton.setAttribute('download', '');

    fileDescription.appendChild(fileHeader);
    fileDescription.appendChild(fileText);

    fileBox.appendChild(fileImage);
    fileBox.appendChild(fileDescription);
    fileBox.appendChild(downloadButton);

    fileContainer.appendChild(fileBox);
}
