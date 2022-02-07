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

const testDisplay = function(word) {
  display.textContent += word;
};

const buttonNumbers = document.querySelectorAll(".number");
for (const buttonNumber of buttonNumbers) {
  buttonNumber.addEventListener("click", () => {
    display.textContent += buttonNumber.textContent;
  })
}