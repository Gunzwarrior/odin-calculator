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
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
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
    firstNumber = display.textContent;
    sign = buttonOperator.textContent;
    startAgain = true;
  });
};