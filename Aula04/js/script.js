// Comparação entre variavel e array. Como obter dados de 
// de uma variavel e um array

var nome = "Pedro,Paulo";
console.log(nome);
// exibir apenas o Paulo
console.log(nome.substring(6,11));

// Criando um array para os nomes
const nomes = ["Pedro","Paulo"];
console.log(nomes);
// exibir apenas o Paulo
console.log(nomes[1]);
// Vamos adicionar mais nomes ao array
// usaremos o comando push
nomes.push("Roberto");
console.log(nomes);
// exibir o ultimo nome
console.log(nomes[nomes.length-1]);
// adicionar mais um nome
nomes.push("Vanessa");
console.log(nomes);
console.log("----------------------");
// Vamos criar dois objetos de produto de informatica
prod1 = {
    nome:"Mouse",
    marca:"Microsoft",
    preco:150.00
};

prod2 = {
    nome:"Teclado",
    marca:"Microsoft",
    preco:180.00
};

// Vamos criar um array de produtos
const produtos = [prod1, prod2];
console.log(produtos);
// exibir o produto1 prod1
console.log(produtos[0]);

// exibir marcar do produto
console.log(produtos[0].marca);
console.log("-------------------")

// Criar um array de objetos clientes
const clientes = [
    {
        nome: "Lucas",
        idade: 19,
        cidade:"Curitiba"
    },
    {
        nome: "Ana",
        idade: 21,
        cidade:"São Paulo"
    }
];
console.log(clientes);
// Vamos adicionar um novo cliente
clientes.push({
    nome: "Karol",
    idade: 28,
    cidade:"Sorocaba"
});
console.log(clientes);
// *************************************************************************************

// exibir os prudutos nas div no navegador
var pnome = produtos[0].nome;
var pmarca = produtos[0].marca;
var ppreco = produtos[0].preco;

// exemplo de uma saida
// document.getElementById("produtos1").innerHTML = pnome;
// document.getElementById("produtos1").innerHTML += pmarca;
// document.getElementById("produtos1").innerHTML += ppreco;

// criar uma costante para exibir os dados do produto na div
const saida = "<h2>"+pnome+"</h2><p class='m'>"+pmarca+"</p><p class='p'>"+ppreco+"</p>";
document.getElementById("produtos1").innerHTML = saida;

// exibir os dados do produto 2
// Vamos montar os dados de saida em uma constante
// usando template string

const saida2 = `<h2>${produtos[1].nome}</h2>
                <p class='m'>${produtos[1].marca}</p>
                <p class='p'>${produtos[1].preco}</p>`;
document.getElementById("produtos2").innerHTML = saida2;

