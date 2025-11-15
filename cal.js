function clearDisplay() {
  document.getElementById('display').value = '';
}
// Adds a value (number or operator) to the display
function addToDisplay(value) {
  document.getElementById('display').value += value;
}
// Evaluates the expression in the display and shows the result
function calculate() {
  let displayValue = document.getElementById('display').value;
  let result = eval(displayValue);
  document.getElementById('display').value = result;
}
