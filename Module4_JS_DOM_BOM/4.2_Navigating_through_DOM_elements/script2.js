function highlightDiagonal() {
    let table = document.getElementsByTagName('table')[0];
    let rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        cells[i].style.backgroundColor = 'red';
    }
}

highlightDiagonal();