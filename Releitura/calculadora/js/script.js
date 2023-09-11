//calculadora em javascript
function soma(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let soma = (numero1) + (numero2)
    return document.getElementById('resultado').value = soma
}

function sub(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let sub = (numero1) - (numero2)
    return document.getElementById('resultado').value = sub
}

function mult(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let mult = (numero1) * (numero2)
    return document.getElementById('resultado').value = mult
}

function divi(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let divi = (numero1) / (numero2)
    return document.getElementById('resultado').value = divi
}

function pot(){
    let numero1 = parseInt(document.getElementById('num1').value);

    let pot = (numero1) * (numero1)
    return document.getElementById('resultado').value = pot
}

function raiz(){
    let numero1 = parseInt(document.getElementById('num1').value);

    let raiz = (Math.sqrt(numero1))
    return document.getElementById('resultado').value = raiz
}

function fat(){
    let numero1 = parseInt(document.getElementById('num1').value);

    var fat = 1;
    for(var i=numero1; i>1; i--){
        fat = fat *i;
    }

    return document.getElementById('resultado').value = fat
}