import Cl_Laptop from "./Cl_Laptop.js";
import Cl_iLaptop from "./Cl_iLaptop.js";

let iLaptop = new Cl_iLaptop();
let precio = iLaptop.leerPrecioDeVenta();
let cuotas = iLaptop.leerCantidadDeCuotas();

let laptop = new Cl_Laptop(precio, cuotas);
let salida = document.getElementById("salida");

salida.innerHTML = iLaptop.reporteLaptop(laptop);