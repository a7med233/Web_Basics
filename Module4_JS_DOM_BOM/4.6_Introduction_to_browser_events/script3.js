document.querySelectorAll('.pane').forEach(pane => {
    let button = document.createElement('button');
    button.classList.add('remove-button');
    button.innerHTML = '[x]';
    button.addEventListener('click', () => {
        pane.remove();  
    });
    pane.appendChild(button);  
});
