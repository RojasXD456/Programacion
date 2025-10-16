import Cl_DoñaEmilia from "./Cl_DoñaEMilia.js";
import Cl_iDoñaEmilia from "./Cl_iDoñaEmilia.js";

let iDoñaEmilia = new Cl_iDoñaEmilia
let f = iDoñaEmilia.leerFruta();
let c = iDoñaEmilia.leerCantidad();

let doñaEmilia = new Cl_DoñaEmilia(f, c)
let salida = document.getElementById("Salida");

let fruta = doñaEmilia.fruta;
let montoBase = doñaEmilia.montoBase();
let descuento = doñaEmilia.descuento();
let montoPagar = doñaEmilia.montoPagar();

salida.innerHTML = iDoñaEmilia.repDoñaEmilia(fruta, montoBase, descuento, montoPagar);