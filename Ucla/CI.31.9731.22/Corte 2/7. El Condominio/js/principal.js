import Cl_Apartamento from "./Cl_Apartamento.js";
import Cl_iApartamento from "./Cl_iApartamento.js";
import Cl_Condominio from "./Cl_Condominio.js";
import Cl_iCondominio from "./Cl_iCondominio.js";

let iApto = new Cl_iApartamento();
let iCond = new Cl_iCondominio();
let condominio = new Cl_Condominio();
let salida = document.getElementById("salida");

// Procesar 5 apartamentos (como en el ejemplo)
for (let i = 0; i < 5; i++) {
    // ✅ CORREGIDO: usar los métodos que SÍ existen
    let numero = iApto.leerNumero(i);
    let diasAtraso = iApto.leerDiasAtraso(i);
    let montoDeuda = iApto.leerMonto(i);
    
    let apartamento = new Cl_Apartamento(numero, diasAtraso, montoDeuda);
    
    // Mostrar datos del apartamento
    salida.innerHTML += iApto.reportarApartamento(apartamento);
    
    // Procesar en el condominio
    condominio.procesarApartamento(apartamento);
}

// Mostrar estadísticas finales
salida.innerHTML += iCond.reportarEstadisticas(condominio);