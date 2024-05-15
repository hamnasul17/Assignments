// Calculator project using function:
let num1 = 3;
let num2 = 5;
let operater = ["+", "-", "/", "*"];
function calculate(num1, num2, operater) {
    if (operater == "+") {
        console.log(num1 + num2);
    }
    else if (operater == "-") {
        console.log(num1 - num2);
    }
    else if (operater == "/") {
        console.log(num1 / num2);
    }
    else if (operater == "*") {
        console.log(num1 * num2);
    }
    else {
        console.log("Write your operater in string");
    }
}
calculate(3, 22, "*");
calculate(43, 29, "+");
calculate(4, 3, "*");
calculate(15, 5, "/");
export {};
