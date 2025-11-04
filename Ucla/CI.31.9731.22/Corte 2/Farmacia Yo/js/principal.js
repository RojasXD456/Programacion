import Cl_Cliente from "./Cl_Cliente.js";
import Cl_iCliente from "./Cl_iCliente.js";
import Cl_Farmacia from "./Cl_Farmacia.js";
import Cl_iFarmacia from "./Cl_iFarmacia.js";

let iCliente = new Cl_iCliente();
let farmacia = new Cl_Farmacia();
let iFarmacia = new Cl_iFarmacia();
let salida = document.getElementById("salida");

for (let i = 0; i < 5; i++) {
    let cedula = iCliente.leerCedula(i);
    let nivel = iCliente.leerNivel(i);
    let montoCompra = iCliente.leerMonto(i);
    
    let cliente = new Cl_Cliente(cedula, nivel, montoCompra);
    salida.innerHTML += iCliente.repCliente(cliente);
    farmacia.procCliente(cliente);
}

salida.innerHTML += iFarmacia.repFarmacia(farmacia);