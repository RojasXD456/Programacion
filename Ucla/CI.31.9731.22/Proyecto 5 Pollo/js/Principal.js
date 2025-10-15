import Cl_Pollo from "./Cl_Pollo.js";
import Cl_iPollo from "./Cl_iPollo.js";

let iPollo = new Cl_iPollo();

let cedula = iPollo.leerCedula();
let tipo = iPollo.leerTipo();
let cantidad = iPollo.leerCantidad();

let pollo = new Cl_Pollo(cedula, tipo, cantidad);
let salida = document.getElementById("salida");

let total = pollo.totalPagar()

salida.innerHTML = iPollo.reporteVenta(
    pollo.cedula,
    pollo.tipo,
    total
);