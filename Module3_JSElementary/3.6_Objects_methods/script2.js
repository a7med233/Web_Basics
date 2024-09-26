// Task 2: Function to multiply numeric properties by 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);
