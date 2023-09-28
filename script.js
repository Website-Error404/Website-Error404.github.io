// Function to generate a random key
function generateRandomKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters.charAt(randomIndex);
    }
    return key;
}

// Generate and display a random key initially
const initialRandomKey = generateRandomKey(Math.floor(Math.random() * 5) + 6); // Random length between 6 and 10
document.getElementById('key-display').innerText = initialRandomKey;

// Function to load and display random text from a file
function loadRandomText() {
    const textFiles = ['text1.txt', 'text2.txt', 'text3.txt', 'text4.txt', 'text5.txt']; // Add your file names here
    const randomIndex = Math.floor(Math.random() * textFiles.length);
    const chosenFile = textFiles[randomIndex];

    // Assuming you're using a web server, you can fetch the text from the file like this:
    fetch(chosenFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('random-text').innerText = data;
        })
        .catch(error => {
            console.error('Error loading text:', error);
        });
}

// Check if the entered key is correct
document.getElementById('check-key').addEventListener('click', function () {
    const userKey = document.getElementById('user-key').value;
    const generatedKey = document.getElementById('key-display').innerText;
    if (userKey === generatedKey) {
        document.getElementById('message').innerText = 'Key is correct!';

        // Load and display random text
        loadRandomText();

        // Hide the "Get Random Text" button
        document.getElementById('get-random-text').style.display = 'none';
    } else {
        document.getElementById('message').innerText = 'Key is incorrect. Please try again.';
    }
});
