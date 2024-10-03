let table = document.querySelector('table');

for (let row of table.rows) {
    let rowIndex = row.rowIndex;
    let cells = row.cells;

    for (let cell of cells) {
        if (cell.cellIndex === rowIndex) {
            cell.style.backgroundColor = 'red';
        }
    }
}