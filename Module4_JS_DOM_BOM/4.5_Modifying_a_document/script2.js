let ul = document.getElementById('ul');

    let li2 = document.createElement('li');
    li2.textContent = '2';
    
    let li3 = document.createElement('li');
    li3.textContent = '3';

    let liTwo = document.getElementById('two');
    ul.insertBefore(li2, liTwo);
    ul.insertBefore(li3, liTwo);