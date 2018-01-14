/****************************************************************************/
/* GENERAR HERENCIA ENTRE CLASE PADRES E HIJAS
/****************************************************************************/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Programa = (function () {
    function Programa() {
    }
    //Metodos get y set
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
var EditorVideo = (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super.apply(this, arguments) || this;
    }
    EditorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    EditorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);
console.log(editor.getAllData());
/****************************************************************************/
/* LOGICA DEL FORMULARIO
/****************************************************************************/
var programas = [];
function guardar() {
    //Obtener el nombre
    var nombre = document.getElementById("nombre").value.toString();
    //Instanciar objeto
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);
    //agregar programa al arreglo
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    //Limpiar input
    document.getElementById("nombre").value = "";
}
