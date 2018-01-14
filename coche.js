/****************************************************************************/
/* CREAR UNA CLASE + INTERFACE (implements)
/****************************************************************************/
var Coche = (function () {
    //Creamos constructor de la clase
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        //Valor atributos por defecto
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    //Metodos get
    Coche.prototype.getColor = function () { return this.color; };
    Coche.prototype.getModelo = function () { return this.modelo; };
    Coche.prototype.getVelocidad = function () { return this.velocidad; };
    //Metodos set
    Coche.prototype.setColor = function (color) { this.color = color; };
    Coche.prototype.setModelo = function (modelo) { this.modelo = modelo; };
    Coche.prototype.setVelocidad = function (velocidad) { this.velocidad = velocidad; };
    //Creamos metodos
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
//Instanciar objeto
var coche_uno = new Coche("Porsche 911 turbo");
//Acelar coche tres veces
coche_uno.acelerar();
coche_uno.acelerar();
coche_uno.acelerar();
var coche_dos = new Coche();
var coche_tres = new Coche();
coche_uno.setColor("Rojo"); //modicar color del coche 1
coche_dos.setColor("Verde"); //modicar color del coche 2
coche_tres.setColor("Azul"); //modicar color del coche 3
console.log("El modelo del coche 1 es: " + coche_uno.getModelo());
console.log("El color del coche 1 es: " + coche_uno.getColor());
console.log("La velocidad del coche 1 es: " + coche_uno.getVelocidad());
coche_uno.frenar(); //Coche uno freno una vez
console.log("La velocidad despues de frenar el coche 1 es: " + coche_uno.getVelocidad());
console.log("El color del coche 2 es: " + coche_dos.getColor());
console.log("La velocidad del coche 2 es: " + coche_dos.getVelocidad());
console.log("El color del coche 3 es: " + coche_tres.getColor());
console.log("La velocidad del coche 3 es: " + coche_tres.getVelocidad());
