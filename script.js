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

// Check if the entered key is correct
document.getElementById('check-key').addEventListener('click', function () {
    const userKey = document.getElementById('user-key').value;
    const generatedKey = document.getElementById('key-display').innerText;
    if (userKey === generatedKey) {
        document.getElementById('message').innerText = 'Key is correct!';
        
        // Show random text
        const randomText = getRandomText();
        document.getElementById('random-text').innerText = randomText;
    } else {
        document.getElementById('message').innerText = 'Key is incorrect. Please try again.';
    }
});

// Function to get random text
function getRandomText() {
    const texts = [
        'Hello, world!',
        'How are you?',
        'What is your name?',
        'Welcome to our website.',
        'Have a great day!',
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}
