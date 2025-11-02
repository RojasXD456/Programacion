/*9. TELECOMUNICACIONES
El gerente de la empresa “Telecomunicaciones a tu alcance” informa que actualmente se
tienen dos tipos de clientes: Residencial y Empresarial, y de cada uno de ellos se conoce: código
del cliente, tipo de cliente (1.Residencial ó 2.Empresarial), lectura actual, lectura anterior.
Por lo anterior, se desea que el programa calcule e imprima por cada cliente la cantidad de
Impulsos consumidos (conociendo que la Cantidad de Impulsos = Lectura Actual – Lectura.
Anterior) y el neto a pagar por cada cliente. Cada impulso consumido se cobran a razón de:
Residencial 1.5$. Empresarial 2.5$. Adicionalmente, por la empresa se necesita generar ciertas
estadísticas como: cantidad de clientes empresariales, monto total recibido entre todos los
clientes por el servicio prestado, el menor monto neto pagado entre todos los clientes,
porcentaje que representa cliente tipo residencial con respecto al total de cliente procesados.
*/

import Cl_Cliente from "./Cl_Cliente.js";
import Cl_iCliente from "./Cl_iCliente.js";
import Cl_Empresa from "./Cl_Empresa.js";
import Cl_iEmpresa from "./Cl_iEmpresa.js";

let iCliente = new Cl_iCliente();
let iEmpresa = new Cl_iEmpresa();
let Empresa = new Cl_Empresa();
let salida = document.getElementById("salida");

for(i=0; i<5; i++){
    let codigo = iCliente.leerCodigo(i);
    let tipoCliente = iCliente.leerTipoCliente(i);
    let LecturaAct = iCliente.leerLecturaActual(i);
    let LecturaAnt = iCliente.leerLecturaAnterior(i);

    let Cliente =+ new Cl_Cliente(codigo, tipoCliente,LecturaAct,LecturaAnt);
    
    salida.innerHTML = iCliente.repCliente(Cliente)

    Empresa.procesarCliente(Cliente)
    
}
salida.innerHTML = iEmpresa.repEmpresa(Empresa)
;

