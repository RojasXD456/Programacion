import Cl_Mermelada from "./Cl_Mermelada.js";
import Cl_iMermelada from "./Cl_iMermelada.js";

let iMermelada = new Cl_iMermelada();

let sabor = iMermelada.leerSabor();
let costo = iMermelada.leerCosto();
let cantidadVendida = iMermelada.leerCantidadVendida();
let producidaLara = iMermelada.leerProducidaLara();

let mermelada = new Cl_Mermelada(sabor, costo, cantidadVendida, producidaLara);

let montoRecargo = mermelada.montoRecargo();
let precioVenta = mermelada.precioVenta();
let montoBase = mermelada.montoBase();
let descuento = mermelada.descuento();
let totalPagar = mermelada.totalPagar();

let salida = document.getElementById("salida");
salida.innerHTML = iMermelada.reporteMermelada(montoRecargo, precioVenta, montoBase, descuento, totalPagar);