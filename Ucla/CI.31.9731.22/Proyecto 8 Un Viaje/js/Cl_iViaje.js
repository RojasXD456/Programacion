export default class Cl_Viaje{
    leerMontoPeajes(){
        return prompt("Monto gastado en peajes:");
    }
    leerMontoGasolina(){
        return prompt("Monto gastado en gasolina:");
    }
    leerMontoToldos(){
        return prompt("Monto gastado en toldos:");
    }
    leerMontoHospedaje(){
        return prompt("Monto gastado en hospedaje:");
    }
    leerMontoComidayBebida(){
        return prompt("Monto gastado en Comida y Bebidas:");

    }
    reporteViaje(montoViaje,montoAmigos){
        return`Monto Total gastado en el viajes: $${montoViaje}<br>
        Cada amigo debe pagar $${montoAmigos}
        `
    }
}