const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  return a / b;
};

const operate = function(operator, a, b) {
  if (operator === "+") {
    console.log(a);
    console.log(b);
    console.log(add(a, b));
    return add(a, b);
  } else if (operator === "-") {
    console.log(a);
    console.log(b);
    console.log(subtract(a, b));
    return subtract(a, b);
  } else if (operator === "x") {
    console.log(a);
    console.log(b);
    console.log(multiply(a, b));
    return multiply(a, b);
  } else if (operator === "\u00F7") {
    console.log(a);
    console.log(b);
    console.log(divide(a, b));
    if (b === 0) {
      return "LOL"}; 
    return divide(a, b);
  };
};

const display = document.querySelector(".display");
let firstNumber;
let sign;
let secondNumber;
let startAgain = true;

const buttonNumbers = document.querySelectorAll(".number");
for (const buttonNumber of buttonNumbers) {
  buttonNumber.addEventListener("click", () => {
    if (!startAgain) {
      display.textContent += buttonNumber.textContent;
    } else {
      display.textContent = buttonNumber.textContent;
      startAgain = false;
    };
  });
};

const buttonOperators = document.querySelectorAll(".operator-button");
for (const buttonOperator of buttonOperators) {
  buttonOperator.addEventListener("click", () => {
    
    if (display.textContent === "LOL") {

    } else if (!firstNumber && buttonOperator.textContent !== "=") {
    firstNumber = parseFloat(display.textContent);
    sign = buttonOperator.textContent;
    startAgain = true;
    } else if (!firstNumber && buttonOperator.textContent === "=") {
      // nothing happens
    } else if (buttonOperator.textContent === "=") {
      secondNumber = parseFloat(display.textContent);
      display.textContent = operate(sign, firstNumber, secondNumber);
      firstNumber = null;
      startAgain = true;
      } else {
      secondNumber = parseFloat(display.textContent);
      display.textContent = operate(sign, firstNumber, secondNumber);
      firstNumber = parseFloat(display.textContent);
      sign = buttonOperator.textContent;
      startAgain = true;
    };
  });
};