/*Una tienda ofrece una promoción del 10% de descuento por la compra de más de $25 en
productos. Conociendo la cédula del cliente, la cantidad de artículos y el precio de cada uno, se
requiere:
 Calcular el monto a pagar por cada cliente y el descuento otorgado.
 Muestre un reporte (salida) con la cédula del cliente, el monto básico (sin descuento),
el monto del descuento otorgado y el monto a pagar.
 También debe reportarse el porcentaje de clientes que recibieron descuento y el
monto total que se vendió. */



import Cl_Cliente from "./Cl_Cliente.js";
import Cl_iCliente from "./Cl_iCliente.js"
import Cl_Tienda from "./Cl_Tienda.js"
import Cl_iTienda from "./Cl_iTienda.js"

let tienda = new Cl_Tienda();
let iTienda= new Cl_iTienda();
let iCliente = new Cl_iCliente();
let salida = document.getElementById("salida")
salida.innerHTML = "<h2>REPORTE CLIENTES</h2>"

for(let i=1; i< 5; i++){
    let cedula =iCliente.leerCedula(i);
    let cantidad = iCliente.leerCantidad(i);
    let precio = iCliente.leerPrecio(i);

    let cliente = new Cl_Cliente(cedula,cantidad,precio)
    salida.innerHTML += iCliente.repCliente(cliente)

    tienda.procesarCliente(cliente)
}

salida.innerHTML += "<h2>REPORTE CLIENTES</h2>"
salida.innerHTML += iTienda.repTienda(tienda)