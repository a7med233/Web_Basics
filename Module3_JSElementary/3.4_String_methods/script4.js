function extractCurrencyValue(str){
    return +str.slice(1); // "+" converts the string to a number
}

console.log(extractCurrencyValue("$120"));
console.log(extractCurrencyValue("$120") === 120);

