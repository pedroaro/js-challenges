var resultado = 0;
var operador = "";
var pantalla = document.getElementById("res");

function cero(){
    pantalla.innerHTML+="0";
}
function uno(){
    pantalla.innerHTML+="1";
}
function mas(){
    resultado = parseInt(pantalla.innerHTML,2);
    pantalla.innerHTML+="+";
    operador = "+";
}
function menos(){
    resultado = parseInt(pantalla.innerHTML,2);
    pantalla.innerHTML+="-";
    operador = "-";
}
function mul(){
    resultado = parseInt(pantalla.innerHTML,2);
    pantalla.innerHTML+="*";
    operador = "*";
}
function div(){
    resultado = parseInt(pantalla.innerHTML,2);
    pantalla.innerHTML+="/";
    operador = "/";
}
function igual(){
    var ant = 0;
    if (operador == "+"){
        var ind = (pantalla.innerHTML).indexOf("+");
        resultado+= parseInt((pantalla.innerHTML).substr(ind + 1),2);
        pantalla.innerHTML= resultado.toString(2);
    }
    if (operador == "-"){
        var ind = (pantalla.innerHTML).indexOf("-");
        resultado-= parseInt((pantalla.innerHTML).substr(ind + 1),2);
        pantalla.innerHTML= resultado.toString(2);
    }
    if (operador == "*"){
        var ind = (pantalla.innerHTML).indexOf("*");
        resultado*= parseInt((pantalla.innerHTML).substr(ind + 1),2);
        pantalla.innerHTML= resultado.toString(2);
    }
    if (operador == "/"){
        var ind = (pantalla.innerHTML).indexOf("/");
        resultado/= parseInt((pantalla.innerHTML).substr(ind + 1),2);
        pantalla.innerHTML= resultado.toString(2);
    }

}
function erase(){
    pantalla.innerHTML="";
}