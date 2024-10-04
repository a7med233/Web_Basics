function createDynamicList() {
    let ul = document.getElementById('dynamic-list');
    
    while (true) {
        let content = prompt("Enter item content for the list (or leave blank to stop):");

        if (!content) break;

        let li = document.createElement('li');
        li.textContent = content;  

        ul.appendChild(li);
    }
}

createDynamicList();
