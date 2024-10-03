let ageTable = document.getElementById('age-table');
console.log(ageTable);

let labelsInTable = ageTable.querySelectorAll('label');
console.log(labelsInTable); 

let firstTdInTable = ageTable.querySelector('td');
console.log(firstTdInTable);  

let searchForm = document.forms['search'];
console.log(searchForm); 

let firstInputInSearchForm = searchForm.querySelector('input[type="text"]');
console.log(firstInputInSearchForm); 

let lastInputInSearchForm = searchForm.querySelector('input[type="submit"]');
console.log(lastInputInSearchForm);  

