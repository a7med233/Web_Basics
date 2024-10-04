const genresSelect = document.getElementById('genres');

console.log('Selected value:', genresSelect.value);
console.log('Selected text:', genresSelect.options[genresSelect.selectedIndex].text);

genresSelect.insertAdjacentHTML('beforeend', '<option value="classic">Classic</option>');

genresSelect.value = 'classic'; // Alternatively: genresSelect.selectedIndex = 2; or genresSelect.options[2].selected = true;

console.log('New selected value:', genresSelect.value);
console.log('New selected text:', genresSelect.options[genresSelect.selectedIndex].text);
    