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

// Generate and display a random key
document.getElementById('generate-key').addEventListener('click', function () {
    const randomKey = generateRandomKey(Math.floor(Math.random() * 5) + 6); // Random length between 6 and 10
    document.getElementById('key-display').innerText = randomKey;

    // Show the button to proceed to the check key page
    document.getElementById('proceed-button').style.display = 'block';
});
