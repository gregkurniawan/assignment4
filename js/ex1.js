const num1 = Number(prompt("Please Enter First Number:"));
const num2 = Number(prompt("Please Enter Second Number:"));
const oper = prompt("Please Enter A Mathematical Operation (+, -, *, /):");

function calculate(num1, oper, num2) {
    let result;
    switch (oper) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    return result;
}

const total = calculate(num1, oper, num2);

console.log(`${num1} ${oper} ${num2} = ${total}`);







