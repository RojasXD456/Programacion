export default class Cl_iChofer { 
    leerNombre(){
        return prompt("Nombre:")}
    leerKmRecorridos(){
        return prompt("Km recorridos:")}
    
    reporte(nombre,montoBase,montoComision,montoFinal){
        return`Nombre:${nombre}<br>
        Monto Base:$${montoBase}<br>
        Monto Comision:$${montoComision}<br>
        Monto Final:$${montoFinal}`
    }
}
        

