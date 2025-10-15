import Cl_Viaje from "./Cl_Viaje.js";
import Cl_iViaje from "./Cl_iViaje.js";

let iviaje = new Cl_iViaje
let lmp = iviaje.leerMontoPeajes();
let lmg = iviaje.leerMontoGasolina();
let lmt = iviaje.leerMontoToldos();
let lmh = iviaje.leerMontoHospedaje();
let lmcb = iviaje.leerMontoComidayBebida();

let viaje = new Cl_Viaje(+lmp,+lmg,+lmt,+lmh,+lmcb)
let montoAmigos = viaje.montoAmigos()
let montoViaje = viaje.montoViaje()

let salida =document.getElementById("salida")

salida.innerHTML=iviaje.reporteViaje(montoAmigos,montoViaje)



