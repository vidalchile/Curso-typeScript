/****************************************************************************/
/* CREAR UNA INTERFACE(define que propiedades o funciones debe tener la clase)
/****************************************************************************/
interface CocheBase{

	getModelo():string;
	getVelocidad():number;
}

/****************************************************************************/
/* CREAR UNA CLASE + INTERFACE (implements)
/****************************************************************************/
class Coche implements CocheBase{

	public color:string;
	public modelo:string;
	public velocidad:number;

	//Creamos constructor de la clase
	constructor(modelo:any = null){

		//Valor atributos por defecto
		this.color 		= "Blanco";
		this.velocidad 	= 0;

		if(modelo == null){
			this.modelo = "BMW Generico";
		}else{
			this.modelo = modelo;
		}
	}	

	//Metodos get
	public getColor():string{ return this.color;}
	public getModelo():string{ return this.modelo;}
	public getVelocidad():number{ return this.velocidad;}

	//Metodos set
	public setColor(color:string){ this.color = color;}
	public setModelo(modelo:string){ this.modelo = modelo;}
	public setVelocidad(velocidad:number){ this.velocidad = velocidad;}

	//Creamos metodos
	public acelerar(){
		this.velocidad++;
	}

	public frenar(){
		this.velocidad--;
	}
}

//Instanciar objeto
var coche_uno	=  new Coche("Porsche 911 turbo");
//Acelar coche tres veces
coche_uno.acelerar();
coche_uno.acelerar();
coche_uno.acelerar();

var coche_dos 	=  new Coche();
var coche_tres 	=  new Coche();

coche_uno.setColor("Rojo");//modicar color del coche 1
coche_dos.setColor("Verde");//modicar color del coche 2
coche_tres.setColor("Azul");//modicar color del coche 3

console.log("El modelo del coche 1 es: "+coche_uno.getModelo());
console.log("El color del coche 1 es: "+coche_uno.getColor());
console.log("La velocidad del coche 1 es: "+coche_uno.getVelocidad());
coche_uno.frenar();//Coche uno freno una vez
console.log("La velocidad despues de frenar el coche 1 es: "+coche_uno.getVelocidad());

console.log("El color del coche 2 es: "+coche_dos.getColor());
console.log("La velocidad del coche 2 es: "+coche_dos.getVelocidad());

console.log("El color del coche 3 es: "+coche_tres.getColor());
console.log("La velocidad del coche 3 es: "+coche_tres.getVelocidad());
