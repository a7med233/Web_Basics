document.getElementById('toggle').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Show the menu
    } else {
        menu.style.display = 'none';  // Hide the menu
    }
});