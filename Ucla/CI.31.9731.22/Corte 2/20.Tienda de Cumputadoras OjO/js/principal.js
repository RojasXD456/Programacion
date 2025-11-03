import Cl_Venta from "./Cl_Venta.js";
import Cl_iVenta from "./Cl_iVenta.js";
import Cl_Tienda from "./Cl_Tienda.js";
import Cl_iTienda from "./Cl_iTienda.js";

let iVenta = new Cl_iVenta();
let iTienda = new Cl_iTienda();
let tienda = new Cl_Tienda();
let salida = document.getElementById("salida");

salida.innerHTML = "<h2>REPORTE DE VENTAS</h2>";

// Procesar 4 clientes (según datos de prueba)
for(let i = 0; i < 4; i++) {
    let cedula = iVenta.leerCedula(i);
    let tipo = iVenta.leerTipo(i);
    let precio = iVenta.leerPrecio(i);
    
    let venta = new Cl_Venta(cedula, tipo, precio);
    
    salida.innerHTML += iVenta.repVenta(venta);
    
    tienda.procesarCliente(venta);
}

// Mostrar reporte final de la tienda
salida.innerHTML += iTienda.repTienda(tienda);