import Cl_Cliente from "./Cl_Cliente.js";
import Cl_iCliente from "./Cl_iCliente.js";
import Cl_Empresa from "./Cl_Empresa.js";
import Cl_iEmpresa from "./Cl_iEmpresa.js";

let iCliente = new Cl_iCliente();
let iEmpresa = new Cl_iEmpresa();
let empresa = new Cl_Empresa();
let salida = document.getElementById("salida");

salida.innerHTML = "<h2>REPORTE POR CLIENTE</h2>";

// Usando FOR para 5 clientes (como en el ejemplo)
for (let i = 0; i < 5; i++) {
    let codigo = iCliente.leerCodigo(i);
    let tipoFoto = iCliente.leerTipoFoto(i);
    let cantidad = iCliente.leerCantidad(i);
    
    let cliente = new Cl_Cliente(codigo, tipoFoto, cantidad);
    
    // Mostrar datos del cliente
    salida.innerHTML += iCliente.reportarCliente(cliente);
    
    // Procesar en la empresa
    empresa.procesarCliente(cliente);
}

// Mostrar estadísticas finales
salida.innerHTML += "<h2>REPORTE DE LA EMPRESA</h2>";
salida.innerHTML += iEmpresa.reportarEstadisticas(empresa);