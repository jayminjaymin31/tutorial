let calculation = '';

function input(char) {
    calculation += char;
    document.getElementById('result').value = calculation;
}

function calculate() {
    let result = eval(calculation);
    document.getElementById('result').value = result;
    calculation = result.toString();
}

function clearDisplay() {
    calculation = '';
    document.getElementById('result').value = calculation;
}

function backspace() {
    calculation = calculation.slice(0, -1);
    document.getElementById('result').value = calculation;
}
