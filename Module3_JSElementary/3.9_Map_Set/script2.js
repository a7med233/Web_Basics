function Calculator() {
    this.methods = new Map();
    this.methods.set("+", (a, b) => a + b);
    this.methods.set("-", (a, b) => a - b);

    this.calculate = function(str) {
        let [a, operator, b] = str.split(" ");
        a = +a;
        b = +b;

        if (!this.methods.has(operator) || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods.get(operator)(a, b);
    };

    this.addMethod = function(name, func) {
        this.methods.set(name, func);
    };
}


let calc = new Calculator();
alert(calc.calculate("3 + 7"));  // Output: 10
alert(calc.calculate("10 - 2")); // Output: 8

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);  // Output: 8

let multiplicationResult = powerCalc.calculate("4 * 5");
alert(multiplicationResult);  // Output: 20

let divisionResult = powerCalc.calculate("10 / 2");
alert(divisionResult);  // Output: 5
