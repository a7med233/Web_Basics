const liElements = document.querySelectorAll('li');

liElements.forEach(li => {
    const textContent = li.childNodes[0].textContent.trim(); 
    const descendantCount = li.querySelectorAll('li').length; 
    const innerHTML = li.innerHTML.trim();  

    console.log(`Text: "${textContent}"`);
    console.log(`Descendants: ${descendantCount}`);
    console.log(`InnerHTML: "${innerHTML}"`); 
});
