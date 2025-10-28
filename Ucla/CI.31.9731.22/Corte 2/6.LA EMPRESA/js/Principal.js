import Cl_Empleado from "./Cl-Empleado.js";
import Cl_iEmpleados from "./Cl-iEmpleados.js";
import Cl_Empresa from "./Cl-Empresa.js";
import Cl_iEmpresa from "./Cl-iEmpresa.js";

let iEmpr = new Cl_iEmpresa;
let empr = new Cl_Empresa;
let salida = document.getElementById("salida")

let cantidad = parseInt(prompt("¿Cuántos empleados desea ingresar?"));

for (let i = 0; i < cantidad; i++){
    let iEmp = new Cl_iEmpleados;
    let n = iEmp.leerNombre();
    let e = iEmp.leerEdad();
    let s = iEmp.leerSexo();
    let eC = iEmp.leerEstCivil();
    let iO = iEmp.leerIngObtenido();
    
    let emp = new Cl_Empleado(n, e, s, eC, iO)
    
    salida.innerHTML += iEmp.repEmpleado( emp.nombre, emp.edad, emp.sexoDelEMpleado(), emp.estadoCivil(), emp.ingObtenido)
empr.procesarEmpleados(emp);
}
if (empr.cantidadEmpleados() > 0) {
    
    salida.innerHTML += iEmpr.repEmpresas(
        empr.nombreEmpleadoConMayorIngreso(),           
        empr.nombreEmpleadoMasJoven(),                 
        empr.edadEmpleadoMasJoven,                      
        empr.ingresoMayor,                              
        empr.promedioIngresosMasculinos()
    );
}