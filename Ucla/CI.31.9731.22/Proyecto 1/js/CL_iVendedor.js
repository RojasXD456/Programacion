//Cl_iVendedor.js
export default class Cl_iVendedor{
    leerCedula(){
        return prompt("Cédula:");
    }
    leerMonttotVtas(){
        return prompt("Monto total de ventas:");
    }
    leerSueldoBase(){
        return prompt("Sueldo Base:");
    }
    repVendedor(ced, com, sF){
        return `Cédula: ${ced}
        <br>Comisión: ${com}
        <br>Sueldo Final: ${sF}`;
    }
}