import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_iEstudiante from "./Cl_iEstudiante.js";

let iEstudiante = new Cl_iEstudiante();
let cedula = iEstudiante.leerCedula();
let n1 = iEstudiante.leerNota1();
let n2 = iEstudiante.leerNota2();
let n3 = iEstudiante.leerNota3();

let estudiante = new Cl_Estudiante(cedula, n1, n2, n3);
let salida = document.getElementById("salida");

let promedio = estudiante.resultado();
let estado = estudiante.estado(promedio);

// APLICAR CLASES CSS SEGÚN RESULTADO
salida.innerHTML = iEstudiante.reporteNota(cedula, promedio, estado);
salida.className = "resultado " + estado.toLowerCase();