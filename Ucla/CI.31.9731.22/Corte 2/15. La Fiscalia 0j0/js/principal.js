/**La Fiscalía necesita un programa que maneje la información de los agricultores que tuvieron
que botar su producción por falta de combustible, de cada agricultor se conoce: cédula, toneladas
botadas y monto de cada tonelada. Los agricultores tendrán que pagar una multa en base a la
información de la tabla siguiente:
Toneladas
botadas

% sobre el monto total de la mercancía

botada
>= 500 y < 3000 5
>= 3000 y <= 9000 7
> 9000 10

Se pide que imprima:
Por Agricultor: Cédula, monto perdido y monto de la multa a pagar
Por la Fiscalía:
 Monto total recaudado por las multas
 La cédula del agricultor con mayor multa a pagar.
 Porcentaje de agricultores con toneladas botadas por encima de 9000 */

import Cl_Agricultor from "./Cl_Agricultor.js";
import Cl_iAgricultor from "./Cl_iAgricultor.js";
import Cl_Fiscalia from "./Cl_Fiscalia.js";
import Cl_iFiscalia from "./Cl_iFiscalia.js"

let iAgricultor = new Cl_iAgricultor();
let iFiscalia = new Cl_iFiscalia();
let fiscalia = new Cl_Fiscalia();
let salida = document.getElementById("salida");

salida.innerHTML = "<h2>REPORTE POR AGRICULTOR</h2>";

// Procesar 5 agricultores (según datos de prueba)
for(let i = 0; i < 5; i++) {
    let cedula = iAgricultor.leerCedula(i);
    let toneladasBotadas = iAgricultor.leerToneladasBotadas(i);
    let montoTonelada = iAgricultor.leerMontoTonelada(i);
    
    let agricultor = new Cl_Agricultor(cedula, toneladasBotadas, montoTonelada);
    
    salida.innerHTML += iAgricultor.repAgricultor(agricultor);
    
    fiscalia.procesarAgricultor(agricultor);
}

// Mostrar reporte final de la fiscalía
salida.innerHTML += iFiscalia.repFiscalia(fiscalia);