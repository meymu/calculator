
function appendToResult(value) {
    const resultField = document.getElementById("result");
    resultField.value += value; // Append the value to the input field
}

function reset() {
    const resultField = document.getElementById("result");
    resultField.value = ''; // Clear the input field
}
function del(){
    const resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0,-1); 
}
function displayResult() {
    const resultField = document.getElementById("result");
    const expression = resultField.value;

    try {
        // Split the expression into numbers and operators
        const numbers = expression.split(/[\+\-\*\/]/).map(Number);
        const operators = expression.split(/[0-9.]+/).filter(op => op); // Get operators only

        if (numbers.length - 1 !== operators.length) {
            throw new Error("Invalid Expression");
        }

        let result = numbers[0]; // Start with the first number

        for (let i = 0; i < operators.length; i++) {
            const operator = operators[i];
            const number = numbers[i + 1];

            switch (operator) {
                case '+':
                    result += number;
                    break;
                case '-':
                    result -= number;
                    break;
                case '*':
                    result *= number;
                    break;
                case '/':
                    if (number === 0) {
                        throw new Error("Division by zero");
                    }
                    result /= number;
                    break;
                default:
                    throw new Error("Invalid Operator");
            }
        }

        resultField.value = result; // Display the final result
    } catch (error) {
        resultField.value = "Error"; // Handle invalid expressions
    }
}
