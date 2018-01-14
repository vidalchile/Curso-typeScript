/****************************************************************************/
/* GENERAR HERENCIA ENTRE CLASE PADRES E HIJAS
/****************************************************************************/

class Programa{//Clase padre

	public nombre:string;
	public version:number;

	//Metodos get y set
	getNombre(){ 
		
		return this.nombre;
	}
	getVersion(){ 
		
		return this.version;
	}
	setNombre(nombre:string){ 
		
		this.nombre = nombre;
	}
	setVersion(version:number){ 
		
		this.version = version;
	}
}

class EditorVideo extends Programa{//Clase hija

	public timeline:number;

	getTimeline(){ 
		
		return this.timeline;
	}
	setTimeline(timeline:number){ 
		
		this.timeline = timeline
	}
	
	getAllData(){
		
		return this.getNombre()+" - "+this.getVersion()+" - "+this.getTimeline();
	}
}

var editor =  new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);
console.log(editor.getAllData());


/****************************************************************************/
/* LOGICA DEL FORMULARIO
/****************************************************************************/

var programas:Array<Programa> = [];

function guardar(){

	//Obtener el nombre
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
	
	//Instanciar objeto
	var programa = new Programa();
	programa.setNombre(nombre);
	programa.setVersion(1);

	//agregar programa al arreglo
	programas.push(programa);


	var list = "";
	for(var i = 0; i < programas.length; i++){

		list = list + "<li>"+programas[i].getNombre()+"</li>";
	}

	var listado = <HTMLInputElement>document.getElementById("listado");
	listado.innerHTML =  list;

	//Limpiar input
	(<HTMLInputElement>document.getElementById("nombre")).value = "";
}