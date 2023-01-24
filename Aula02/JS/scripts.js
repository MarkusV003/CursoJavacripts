function ola(){
    alert('Ola Mundo');
}


// document.getElementById('btnClick').onclick = ola;

// declação de variaveis

var nome;
var numero1,numero2;
var resultado;
nome = "";
numero1 = 0;
numero2 = 0;
resultado = 0;

// declarando variaveis

numero1 = prompt("Digite o valor");
numero2 = prompt("Digite outro valor");
resultado = numero1 * numero2;

console.log("A multiplicação entre o valor %de %d é %d", numero1, numero2,resultado);

