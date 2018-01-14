function holaMundo(nombre){
	return "hola mundo ¡¡ soy: "+nombre; 
}

//CASO 1 BASICO
//var nombre 			= "Cristian Vidal";
//var resultado 		= holaMundo(nombre);
var etiqueta 			= <HTMLElement>document.getElementById("container");
//etiqueta.innerHTML 	=  resultado;

/****************************************************************************/
/* VARIABLES Y TIPOS
/****************************************************************************/
var nombre:string 			= "Cristian Vidal Muñoz";
var edad:number 			= 26;
var programador:boolean		= true;
var langs:Array<string>		= ["PHP","JAVASCRIPT","CSS","HTML"];

//Generando errores de compilación
//nombre = 23;
//edad = "3343";
//edad = true;

etiqueta.innerHTML = nombre+" - "+edad;

/****************************************************************************/
/* DIFERENCIAS ENTRE LET Y VAR
/****************************************************************************/
var a = 7;
var b = 12;

if(a === 7){
	
	let a = 4;//solo cambia valor en este bloque / fragmento
	var b = 1;
	console.log("DENTRO DEL IF: "+a+" - "+b);
}
console.log("FUERA DEL IF: "+a+" - "+b);

/****************************************************************************/
/* FUNCIONES Y TIPADO
/****************************************************************************/
//Funcion que solo permite retornar un valor tipo string
function devuelveNumero(num:number):string{
	return "Número devuelto: "+num;
}

//Funcion que solo permite retornar un valor tipo number
function devuelveString(texto:string):number{

	if(texto == "hola"){
		var num = 10;
	}else{
		var num = 20;
	}
	return num;
}

//Funcion que solo permite retornar un valor tipo boolean
function devuelveBoolean(variable:string):boolean{

	if(variable == "ok"){
		return true;
	}else{
		return false;
	}
}

console.log(devuelveNumero(12));
console.log(devuelveString("hola"));
console.log(devuelveBoolean("ok"));