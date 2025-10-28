export default class Cl_Empresa{
    constructor(){
        this.empleados = [];
        this.mayorIngreso = null;
        this.empleadoMasJoven = null;
        this.totalIngresosMasculinos = 0;
        this.totalEmpleadosMasculinos = 0;
    }
    procesarEmpleados(empleado){
        this.empleados.push(empleado);

    if (this.mayorIngreso === null || empleado.ingObtenido > this.mayorIngreso.ingObtenido) {
            this.mayorIngreso = empleado;
        }
        
        
        if (this.empleadoMasJoven === null || empleado.edad < this.empleadoMasJoven.edad) {
            this.empleadoMasJoven = empleado;
        
        }
        if (empleado.sexo === 2){
            this.totalIngresosMasculinos += empleado.ingObtenido;
            this.totalEmpleadosMasculinos++
        }

    }
    nombreEmpleadoConMayorIngreso(){
        return this.mayorIngreso ? this.mayorIngreso.nombre : "No hay Empleados"
    }
    nombreEmpleadoMasJoven(){
        return this.empleadoMasJoven ? this.empleadoMasJoven.nombre : "No hay empleados"
    }

    get mayorIngresoObj() {
        return this.mayorIngreso;
    }
    
    get edadEmpleadoMasJoven() {
        return this.empleadoMasJoven ? this.empleadoMasJoven.edad : 0;
    }
    
    get ingresoMayor() {
        return this.mayorIngreso ? this.mayorIngreso.ingObtenido : 0;
    }

    promedioIngresosMasculinos(){
        if (this.totalEmpleadosMasculinos === 0){
            return 0;
        }
        return this.totalIngresosMasculinos / this.totalEmpleadosMasculinos;
    }

    get cantEmpleadosMasculinos() {
        return this.totalEmpleadosMasculinos;
    }

    cantidadEmpleados(){
        return this.empleados.length;
    }
}