/*
A função carregarDados é ultilizada para carregar e exibir os dados relacionados
a idade, cidade e produtos em controles select do html e, para isso estamos 
usando uma estrutura de repetição fazendo contagem de 18 a 90 anos para a idade
enquanto, usamos o laço for para ler o array de cidades e produtos
*/
function carregarDados(){
    /*
    Foi criado constates como referencias aos controles de formularios 
    */
    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const cidade = document.getElementById("cidade");
    const prod = document.getElementById("prod");

    // foi adicionado um option ao select da idade
idade.innerHTML = `<option>Selecione sua idade</option>`;
    /*
    Para preencher a idade a 18 a 90 anos, fizemos uma estrutura de repetição com
    for , onde é criado um elemento option com a idade de 18 a 90 dentro do selection idade
    */
for(let i = 18; i <= 90; i++){
idade.innerHTML += `<option>${i}</option>`;
}
// adicionado um option ao controle select da cidade
cidade.innerHTML = `<option>Selecione uma filial</option>`;
    /*
    Esta estrutura de repetição foi criada para ler todo o conteudo do array cidades e obter
    um cidade por vez e assim cria um controle opition para cada cidade e adiciona ao controle
    select
    */
for(let i =0; i<=3;i++){
    cidade.innerHTML += `<option>${cidades[i]}</option>`;
}
prod.innerHTML = `<option>Selecione o produto</option>`;
    /*
    Nesta estrutura de repetição, estamos obtendo os produtos do array produtos. Exibindo os 
    nomes dos produtos por meio do controle option. Neste caso o nome do produto é uma propriedade
    do array produtos, assim foi nescessario adicionar um ponto depois do colchetes para acessar
    esta propriedade.
    */
for (let i = 0; i<= 2; i++) {
    prod.innerHTML += `<option value =${produtos[i].idproduto}>${produtos[i].nomeproduto}</option>`;
}
}
    /*
    Esta funçao é ultilizada para encontrar um determinado produto dos arrays de produtos quando o
     usuario seleciona um produto na ágina HTML ao selecionar o produto o id é passado via parametro
      para esta funçao e então ultilizado uma estrutura de repetição e exibilo em uma div 
    */


function exibirProduto(id){

    const rsprod = document.getElementById("rsprod");


    /*
    o for realizar uma leitura afim de encontrar o id passado para função array produtos, comparando o
     id passado passado com id presente nos produtos. Ao encontrar o id que o usuario passou a estrutura
     de repetição é forçada para com o comando break e os dados do produto são adicionados ao div que esta na pagina
    */
    for(let i = 0; i <=2 ; i++) {
    
    if(produtos[i].idproduto==id){
        rsprod.innerHTML = produtos[i].nomeproduto
        rsprod.innerHTML += produtos[i].marca;
        rsprod.innerHTML += produtos[i].preco;
        break; //Força a parada do laço(for)
    }
}
}