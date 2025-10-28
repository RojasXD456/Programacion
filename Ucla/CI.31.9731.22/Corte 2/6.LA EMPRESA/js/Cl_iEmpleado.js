export default class Cl_iEmpleados{
    leerNombre(){
        return prompt ("Ingresar Nombre")
    }
    leerEdad(){
        return prompt ("Ingresar Edad")
    }
    leerSexo(){
        return prompt ("1 = Femenino, 2 = Masculino")
    }
    leerEstCivil(){
        return prompt ("1=Soltero 2= Casado, 3= Divorciado 4= Viudo , 5=Concubino, 6= otro")
    }
    leerIngObtenido(){
        return prompt ("Ingresar ingresos obtenidos del empleado")
    }

    repEmpleado(n, e, s, eC, iO){
        return `
        <br> Nombre: ${n}    Edad:${e}
        <br> Sexo: ${s}   Estado Civil: ${eC}
        <br> Ingresos Obtenidos: ${iO}`;

    }
}