function AppendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
