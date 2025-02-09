document.getElementById('heartButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.style.opacity = 1; // Show the message

    for (let i = 0; i < 20; i++) { // Create 20 mini hearts
        const heart = document.createElement('div');
        heart.className = 'heart';
        document.body.appendChild(heart);

        // Set random position
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.left = Math.random() * 100 + 'vw';

        // Show the heart
        heart.style.opacity = 1;

        // Remove the heart after 1 second
        setTimeout(() => {
            heart.style.opacity = 0;
            setTimeout(() => {
                heart.remove(); // Remove from DOM
            }, 500);
        }, 1000);
    }

    // Hide the message after 3 seconds
    setTimeout(() => {
        message.style.opacity = 0;
    }, 3000);
});


function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random fall duration
    document.getElementById('heartsContainer').appendChild(heart);

    // Remove heart after animation ends
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Create hearts at intervals
setInterval(createHeart, 500); // Adjust the interval for more or fewer hearts