const medicamentos =
    document.querySelectorAll( '#medicamentos li' );

medicamentos.forEach( (item) => {
    item.addEventListener('blur', () => {
        console.log(item.innerText);
    });
});

// calculadora
function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = num1 + num2;
}

function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = num1 - num2;
}

function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = num1 * num2;
}

function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = num1 / num2;
}