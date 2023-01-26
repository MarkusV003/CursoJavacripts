function troca(){
    var imagem = document.getElementById("foto").src;
    console.log(imagem);
    // Vamos pegar a quantidade de caracteres da varieavel da imagem
    // com o comando length;
    console.log(imagem.length);
    // vamos utilizar o comando substring para obter um trecho de texto
    // do caminho do nome do arquivo
    console.log(imagem.substring(imagem.length - 13, imagem.length));
    var rsimg = imagem.substring(imagem.length - 13, imagem.length);
    rsimg = rsimg == "img/foto1.jpg" ? "img/foto2.jpg" : "img/foto1.jpg";
    document.getElementById("foto").src = rsimg;0

    console.log(rsimg);
}

function infoData(){
    //vamos fazer uma instancia da classe Date(). Esta classe
    // possui muitas funções, tais como: getDate, getMouth
    const tempo = new Date();
    var datacompleta = tempo.toLocaleDateString();
    var diames = tempo.getDate();
    var diasemana = tempo.getDay();
    var mes = tempo.getMonth();
    var minutos = tempo.getMinutes();
    var segundos = tempo.getSeconds();
    var dias = "";
    
    // Desvio de fluxo multiplo com switch case
    switch(diasemana)
    {

        case 0:
            dias = "Domingo";
            break;
            case 1:
                dias = "Segunda-feira";
                break;
                case 2:
                    dias = "Terça-feira";
                    break;
                    case 3:
                        dias = "Quarta-feira";
                        break;
                        case 4:
                            dias = "Quinta-feira";
                            break;
                            case 5:
                                dias = "Sexta-feira";
                                break;
                                case 6:
                                    dias = "Sábado";
                                    break;
                                    default:
                                    alert("Este dia nao existente")
                                    break;
    }  
    switch(mes)
    {
        case 0:
            m = "Janeiro";
            break;
        case 1:
            m = "Fevereiro";
            break;
        case 2:
            m = "Março";
            break;
        case 3:
            m = "Abril";
            break;
        case 4:
                m = "Maio";
                break;
        case 5:
            m = "Junho";
            break;
        case 6:
            m = "Julho";
            break;
        case 7:
            m = "Agosto";
            break;
        case 8:
            m = "Setembro";
            break;
        case 9:
                m = "Outubro";
                break;
        case 10:
            m = "Novembro";
            break;
        case 11:
            m = "Dezembro";
            break;
        default:
            alert("Este mês nao existe")
            break;
    }

    console.log("Hoje é %d de %s O dia da semana é %d",diames,m,dias);
    console.log(datacompleta);
}