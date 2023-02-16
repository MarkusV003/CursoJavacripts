







bntMesagem.onclick = () => {"oi"};



bntMesagem.addEventListener("click", () => alert("oi"));


console.log(cli.nome);
console.log(cli.idade);
console.log(`A posição do cliente acima é ${p}`);


instanceof.forEach(function (cli,p){
    console.log(`a posição é ${p}`);
    console.log(cli.nome);
});

info.forEach(exibir);



// document.body.appendChild(bntMesagem);
// document.body.appendChild(btnMsg);

info.map((cliente,i)=>{
    var divCli = document.createElement("div");
    divCli.setAttribute("class","divcli");
    divCli.innerHTML = `<h2>Nome: ${cliente.}</h2>`;
    divCli.innerHTML += `<p class="idade">Idade: ${cliente}</p>`;
    cliente.produtos.map((prod, ix)=>{
        divCli.innerHTML += `<ul>
                                <li>${prod.nome}</li>
                                <li>${prod.marca}</li>
                                <li>${prod.preco}</li>
                                </ul>`;
    })


    document.body.appendChild(divCli);
})
// ------------------------------------------------------------------------------------------
// function getUsers(){
//     return new Promise(resolve,reject) => {
        
//         setTimeout(() => {


        
//         resolve([
//             {user:"João",email:"joao@example.com"}
//             {user:"Paulo",email:"paul@example.com"}
//         ]);
//     },2000)
// }
// }

// function mostrar(usuarios){
//     console.clear();
//     console.log(usuarios);
// }

// const resultado = getUsers();
// resultado.then(mostrar);

