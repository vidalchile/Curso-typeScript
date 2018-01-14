function holaMundo(nombre) {
    return "hola mundo ¡¡ soy: " + nombre;
}
//CASO 1 BASICO
//var nombre 			= "Cristian Vidal";
//var resultado 		= holaMundo(nombre);
var etiqueta = document.getElementById("container");
//etiqueta.innerHTML 	=  resultado;
/****************************************************************************/
/* VARIABLES Y TIPOS
/****************************************************************************/
var nombre = "Cristian Vidal Muñoz";
var edad = 26;
var programador = true;
var langs = ["PHP", "JAVASCRIPT", "CSS", "HTML"];
//Generando errores de compilación
//nombre = 23;
//edad = "3343";
//edad = true;
etiqueta.innerHTML = nombre + " - " + edad;
/****************************************************************************/
/* DIFERENCIAS ENTRE LET Y VAR
/****************************************************************************/
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4; //solo cambia valor en este bloque / fragmento
    var b = 1;
    console.log("DENTRO DEL IF: " + a_1 + " - " + b);
}
console.log("FUERA DEL IF: " + a + " - " + b);
/****************************************************************************/
/* FUNCIONES Y TIPADO
/****************************************************************************/
//Funcion que solo permite retornar un valor tipo string
function devuelveNumero(num) {
    return "Número devuelto: " + num;
}
//Funcion que solo permite retornar un valor tipo number
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 10;
    }
    else {
        var num = 20;
    }
    return num;
}
//Funcion que solo permite retornar un valor tipo boolean
function devuelveBoolean(variable) {
    if (variable == "ok") {
        return true;
    }
    else {
        return false;
    }
}
console.log(devuelveNumero(12));
console.log(devuelveString("hola"));
console.log(devuelveBoolean("ok"));
