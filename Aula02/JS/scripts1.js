function corFundo(){
    var cor = document.getElementById("txtCor").value;
    cor = cor.toLowerCase();
    if(cor == "red"){
        document.body.style.backgroundColor = "#FF0000";
    }
    else if(cor == "black"){
        document.body.style.backgroundColor = "#000000";
    }
    else if(cor == "green"){
        document.body.style.backgroundColor = "#00FF00";
    }
    else if(cor == "blue"){
        document.body.style.backgroundColor = "#0000FF";
    }
    else if(cor == "yellow"){
        document.body.style.backgroundColor = "#FFFF00";
    }
    else if(cor == "pink"){
        document.body.style.backgroundColor = "#FF00FF";
    }
    else{
        document.body.style.backgroundColor = "#FFFFFF";
        alert("A cor não existe na paleta");
    }

}

function textoClaro(){
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("label")[0].style.color = "white";
}
function textoEscuro(){
    document.getElementsByTagName("h1")[0].style.color = "blue";
    document.getElementsByTagName("label")[0].style.color = "blue";
}