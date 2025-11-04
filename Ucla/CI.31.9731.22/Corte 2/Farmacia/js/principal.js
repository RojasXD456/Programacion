/*En la farmacia Los Crepúsculos, aceptan Cashea, cuyo plan de financiamiento depende del inicial del cliente y se
exige un porcentaje sobre el monto de la compra de inicial, según lo siguiente: inicial 1 al 3 pagan 40%, inicial 4 
y 5 pagan 30%, y inicial 6 y 7 pagan 25%. Y el resto se paga en 3 partes iguales cada 15 días. De cada cliente se 
conoce: cédula, inicial (1. Básico, 2. Medio 3. Alto, 4. Bronce, 5. Plata, 6.Oro, 7.Platinum) y monto de compra. 
Reporte por cada cliente su cédula, monto de la Cuota Inicial y monto de cada cuota quincenal; y por la 
farmacia: a.- Monto total en cuentas por cobrar de los clientes de inicial 4 y 5.
b.- Porcentaje correspondiente al monto recaudado en Cuota Inicial de los clientes del inicial 6 y 7, en relación 
al monto total recaudado en Cuota Inicial
c.- Cédula del cliente con mayor monto de compra
DATOS DE PRUEBA
DATOS DE ENTRADA/CLIENTE SALIDA POR CLIENTE
Cédula inicial Monto de Compra Cédula Inicial Cuota Quincenal ($)
111 1 100 111 40 20
222 6 200 222 50 50
333 4 400 333 120 93,33
444 7 500 444 125 125
555 5 300 555 90 70
SALIDA POR LA FARMACIA
a.- Monto total en cuentas por cobrar de los clientes de inicial 4 y 5: $ 490
b.- Porcentaje correspondiente al monto recaudado en Cuota Inicial de los clientes del inicial 6 y 7, en relación 
al monto total recaudado en Cuota Inicial: 41,18%
c.- Cédula del cliente con mayor monto de compra: 444*/

import Cl_Cliente from "./Cl_Cliente.js";
import Cl_iCliente from "./Cl_iCliente.js";
import Cl_Farmacia from "./Cl_Farmacia.js";
import Cl_iFarmacia from "./Cl_iFarmacia.js";

let iFarmacia = new Cl_iFarmacia(),
    Farmacia = new Cl_Farmacia(),
    salida = document.getElementById("salida");

let opc =1;
while(opc == 1){
    let iCliente = new Cl_iCliente(),
        lc = iCliente.leercedula(),
        ln = iCliente.leerinicial(),
        lmC = iCliente.leermontoCompra(),

    Cliente = new Cl_Cliente(lc, ln, lmC);
    Farmacia.procCliente(Cliente);
    salida.innerHTML += iCliente.repCliente(Cliente.cedula, Cliente.inicial(), Cliente.quincenal()) + "<br>";
    opc = confirm("Desea agregar otra venta?")? 1 : 0;
}

salida = document.getElementById("salida");
salida.innerHTML += iFarmacia.repFarmacia(
Farmacia.MontTotCuentxCob(),
Farmacia.porcCuotInicial(),
Farmacia.CedClmay(),
);