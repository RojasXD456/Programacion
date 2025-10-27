// principal.js
/** * UNIVERSIDAD
* De una sección de Introducción a la Computación de la Universidad Centroccidental
* Lisando Alvarado, se conoce: el código. La sección tiene 25 estudiantes inscritos
* de cada uno de conoce: su nombre y la nota de cada uno de los tres (03) parciales.
* Se espera que realice un programa que reporte la nota final del estudiante,
* la cantidad de estudiantes aprobados y el promedio de la sección.
*/
import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_iEstudiante from "./Cl_iEstudiante.js";
import Cl_Seccion from "./Cl_Seccion.js";
import Cl_iSeccion from "./Cl_iSeccion.js";
let iSec = new Cl_iSeccion(),
c = iSec.leerCodigo(),
sec = new Cl_Seccion(c),
salida = document.getElementById("salida");
for (let i = 0; i < 5; i++) {
let iEstu = new Cl_iEstudiante(),
n = iEstu.leerNombre(i),
n1 = iEstu.leerNota1(),
n2 = iEstu.leerNota2(),
n3 = iEstu.leerNota3(),
estu = new Cl_Estudiante(n, n1, n2, n3);
salida.innerHTML +=
iEstu.reportarEstudiante(estu.nombre, estu.notaFinal()) + "<br>";
sec.procesarEstudiante(estu);
}
salida.innerHTML += iSec.reportarSeccion(

sec.acumuladorNotas(),
sec.contadorAprobados(),
sec.promedioSeccion() );