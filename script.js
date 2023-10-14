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
    fileImage.src = fileInfo[i].src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Fnaruto-reveals-north-america-release-date-for-sasukes-story-000.jpg?w=960&cbr=1&q=90&fit=max";
    fileImage.alt = `Hình ảnh tệp ${i}`;
    fileImage.className = 'file-image';

    const fileDescription = document.createElement('div');
    fileDescription.className = 'file-description';

    const fileHeader = document.createElement('h2');
    fileHeader.textContent = fileInfo[i].tentep;

    const fileText = document.createElement('p');
    fileText.textContent = `Demo ${i}.`;

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
