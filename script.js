function clearEntry() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
      display.value = '0';
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '0';
  }
  
  function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === '0' && value !== '.') {
      display.value = value;
    } else {
      display.value += value;
    }
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value.replace('x', '*').replace('÷', '/'));
    } catch {
      display.value = 'Error';
    }
  }
  
  function toggleSign() {
    const display = document.getElementById('display');
    display.value = display.value.charAt(0) === '-' ? display.value.slice(1) : '-' + display.value;
  }
  