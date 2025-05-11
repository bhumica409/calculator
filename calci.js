const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value) {
      expression += value;
      display.value = expression;
    } else if (button.id === 'clear') {
      expression = "";
      display.value = "";
    } else if (button.id === 'equals') {
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch (e) {
        display.value = "Error";
        expression = "";
      }
    }
  });
});

// Keyboard support
document.addEventListener('keydown', e => {
  const allowedKeys = '0123456789+-*/.=';
  if (allowedKeys.includes(e.key)) {
    if (e.key === '=') {
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch (err) {
        display.value = "Error";
        expression = "";
      }
    } else {
      expression += e.key;
      display.value = expression;
    }
  } else if (e.key === 'Enter') {
    try {
      expression = eval(expression).toString();
      display.value = expression;
    } catch (err) {
      display.value = "Error";
      expression = "";
    }
  } else if (e.key === 'Backspace') {
    expression = expression.slice(0, -1);
    display.value = expression;
  } else if (e.key === 'Escape') {
    expression = "";
    display.value = "";
  }
});
