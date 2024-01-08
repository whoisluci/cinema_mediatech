document.addEventListener('DOMContentLoaded', function () {
    const popcornContainer = document.querySelector('.popcorn-container');

    // Function to create a popcorn element
    function createPopcorn() {
        const popcorn = document.createElement('img');
        popcorn.className = 'popcorn';
        popcorn.src = 'media/images/popcorn.png'; // Replace 'path/to/popcorn.png' with the actual path to your popcorn image
        popcorn.style.left = `${Math.random() * 100}vw`; // Randomize horizontal position
        popcorn.style.animationDuration = `${Math.random() * 10 + 3}s`; // Randomize animation duration
        popcornContainer.appendChild(popcorn);

        // Remove popcorn element after animation completes
        popcorn.addEventListener('animationend', function () {
            popcorn.remove();
        });
    }

    // Create popcorn elements at intervals
    setInterval(createPopcorn, 500);
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Close modal if the user clicks outside of it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};