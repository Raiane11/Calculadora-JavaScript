var numeroAtual = '';
var numeroAnterior = '';
var operator = '';

function appendNumber(number) {
    numeroAtual += number;
    document.getElementsByName('result')[0].value = numeroAtual;
}

function setOperator(op) {
    operator = op;
    numeroAnterior = numeroAtual;
    numeroAtual = '';
}

function calculate() {
    var num1 = parseFloat(numeroAnterior);
    var num2 = parseFloat(numeroAtual);
    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementsByName('result')[0].value = result;
    numeroAtual = result.toString();
    numeroAnterior = '';
    operator = '';
}

function clearAll() {
    numeroAtual = '';
    numeroAnterior = '';
    operator = '';
    document.getElementsByName('result')[0].value = '0';
}