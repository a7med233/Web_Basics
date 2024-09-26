function sumInput(){
    let numbers = [];
    let value;

    while(true){

        value = prompt("Enter a number:", "");

        if (value === null || value.trim() === "" || isNaN(value)){
            break;
        }

        numbers.push(+value);
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

alert(sumInput()); 