document.body.innerHTML = `<!-- body -->`;

const firstChild = document.body.firstChild;

console.log("First Child's Node Name:", firstChild.nodeName); 
console.log("Comment Text:", firstChild.textContent);  
console.log("Body OuterHTML:", document.body.outerHTML);
