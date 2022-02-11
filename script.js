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
  } else if (operator === "x") {
    return multiply(a, b);
  } else if (operator === "\u00F7") {
    if (b === 0) {
      return "LOL"}; 
    return divide(a, b);
  };
};

const fitIn = function(number) {
  
  if (number === "LOL") {
    return number;
  }
  number = Math.round((number + Number.EPSILON) * 1000) / 1000
  if (number.toString().length <= 12) {
    return number;
  } else {
    return number.toExponential(3);
  };
};

const display = document.querySelector(".display");
let firstNumber;
let sign;
let secondNumber;
let startAgain = true;
let isPostive = true;

const buttonNumbers = document.querySelectorAll(".number");
for (const buttonNumber of buttonNumbers) {
  buttonNumber.addEventListener("click", () => {
    if (!startAgain) {
      if (display.textContent.length < 12) {
        display.textContent += buttonNumber.textContent;
      } else {
        // nothing happens
      }
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
      display.textContent = fitIn(operate(sign, firstNumber, secondNumber));
      firstNumber = null;
      startAgain = true;
      } else {
      secondNumber = parseFloat(display.textContent);
      display.textContent = fitIn(operate(sign, firstNumber, secondNumber));
      firstNumber = parseFloat(display.textContent);
      sign = buttonOperator.textContent;
      startAgain = true;
    };
  });
};

const buttonSign = document.querySelector(".sign-button");
buttonSign.addEventListener("click", () => {
    if (display.textContent.charAt(0) !== "-" && display.textContent !== "0") {
      if (display.textContent.length < 12) {
        display.textContent = "-" + display.textContent;
      } else {
        // nothing happens
      }
    } else {
      display.textContent = display.textContent.replace("-", "");
    };
  });

const buttonReset = document.querySelector(".reset-button");
buttonReset.addEventListener("click", () => {
  firstNumber = null;
  sign = null;
  secondNumber = null;
  startAgain = true;
  isPostive = true;
  display.textContent = "0";
})

const buttonDot = document.querySelector(".dot-button");
buttonDot.addEventListener("click", () => {
  if (!startAgain) {
    if (display.textContent.length < 12 && !display.textContent.includes(".")) {
      display.textContent += ".";
    } else {
      // nothing happens
    }
  } else {
    display.textContent = "0.";
    startAgain = false;
  };
})

const buttonCorrect = document.querySelector(".correct-button");
buttonCorrect.addEventListener("click", () => {
  startAgain = true;
  isPostive = true;
  display.textContent = "0";
})
  // make it look nice
  // add keyboard support