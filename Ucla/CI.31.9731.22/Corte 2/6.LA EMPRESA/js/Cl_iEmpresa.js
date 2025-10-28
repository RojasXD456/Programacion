export default class Cl_iEmpresa{
    repEmpresas(nombreEmpleadoConMayorIngreso, nombreEmpleadoMasJoven, edadEmpleadoMasJoven, ingresoMayor, promedioIngresosMasculinos){
        return `
        <br> Empleado mas Joven
        <br> ${nombreEmpleadoMasJoven}  
        <br> Edad: ${edadEmpleadoMasJoven}
        <br>
        <br> Empleado con mas Ingresos
        <br> ${nombreEmpleadoConMayorIngreso}   
        <br> Ingreso Obtenido: ${ingresoMayor.toFixed(2)}
        <br> Promedio De los Ingresos Masculinos: ${promedioIngresosMasculinos}`;
    }
}