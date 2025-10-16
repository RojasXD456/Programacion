import Cl_iChofer from "./Cl_iChofer.js";
import Cl_Chofer from "./Cl_Chofer.js";


let iChofer = new Cl_iChofer
let ln = iChofer.leerNombre();
let lkr= iChofer.leerKmRecorridos();

let Chofer =new Cl_Chofer(ln,lkr);
let nombre= Chofer.nombre;
let montoBase= Chofer.montoBase();
let montoComision= Chofer.comision();
let montoFinal = Chofer.montoFinal();

let salida=document.getElementById("salida")

salida.innerHTML= iChofer.reporte(nombre,montoBase,montoComision,montoFinal)


