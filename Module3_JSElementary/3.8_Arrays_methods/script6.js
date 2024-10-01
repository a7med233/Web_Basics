function unique(arr) {
    let result = [];
    
    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    
    return result;
}

let strings = ["krishna", "krishna", "hare", "hare", "hare", "hare",
"krishna", "krishna", ":-O"];

alert(unique(strings)); // krishna, hare, :-O
