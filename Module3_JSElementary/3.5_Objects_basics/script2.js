function isEmpty(obj){
    for (let key in obj) {
        return false;
    }
    return true; 
}

let exampleObject = {};
console.log(isEmpty(exampleObject));  

exampleObject["key"] = "value";
console.log(isEmpty(exampleObject));  
