//calculadora em javascript

//função para o cálculo de soma
function soma(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let soma = (numero1) + (numero2)
    return document.getElementById('resultado').value = soma
}

//função para o cálculo de subtração
function sub(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let sub = (numero1) - (numero2)
    return document.getElementById('resultado').value = sub
}

//função para o cálculo de multiplicação
function mult(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let mult = (numero1) * (numero2)
    return document.getElementById('resultado').value = mult
}

//função para o cálculo de divisão
function divi(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);

    let divi = (numero1) / (numero2)
    return document.getElementById('resultado').value = divi
}

//função para o cálculo de potência
function pot(){
    let numero1 = parseInt(document.getElementById('num1').value);

    let pot = (numero1) * (numero1)
    return document.getElementById('resultado').value = pot
}

//função para o cálculo de radiciação
function raiz(){
    let numero1 = parseInt(document.getElementById('num1').value);

    let raiz = (Math.sqrt(numero1))
    return document.getElementById('resultado').value = raiz
}

//função para o cálculo de fatorial
function fat(){
    let numero1 = parseInt(document.getElementById('num1').value);

    var fat = 1;
    for(var i=numero1; i>1; i--){
        fat = fat * i;
    }

    return document.getElementById('resultado').value = fat
}