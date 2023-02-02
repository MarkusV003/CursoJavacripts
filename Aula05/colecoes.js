// coloeção do array de cidades
const cidades = ["Guarulhos", "Campinas", "Atibaia", "São Paulo"]

// Criação do array de objetos produtos
const produtos = [
    {
        idproduto: 01,
        nomeproduto: "Mouse",
        marca: "Microsoft",
        preco: 100.53
    },
    {
        idproduto: 02,
        nomeproduto: "Teclado",
        marca: "Microsoft",
        preco: 150.90
    },
    {
        idproduto: 03,
        nomeproduto: "SDD 480",
        marca: "SunDisk",
        preco: 430.00
    }
];

// Criando um array do objetos do clientes
const clientes = [
    {
        idcliente:15,
        nome:"Pedro",
        idade:38
    },
    {
        idcliente:16,
        nome:"Vanessa",
        idade:22
    }
];

// Criando um array do objetos vendas
const vendas = [
    {
        idvendas:1010,
        data:"02/02/2023",
        idcliente:15,
        produtos:[
            {
                idproduto:01,
                quantidade:03
            },
            {
                idproduto:02,
                quantidade:03
            }

        ]
    }
]
