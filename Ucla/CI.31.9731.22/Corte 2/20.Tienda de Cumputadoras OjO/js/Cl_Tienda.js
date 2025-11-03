export default class Cl_Tienda{
    constructor(){
        this.cliente = 0
        this.totalTemporal = 0;
        this.clieFrecuente= 0 
        this.menorTotal = 10000
        this.menorCedula = ""
    }
    procesarCliente(Ventas){
        this.cliente++

        if(Ventas.tipo===1)
            this.clieFrecuente++
        
        this.totalTemporal += Ventas.descuentoTemporal()

        if(Ventas.montoTotal() < this.menorTotal){
            this.menorCedula = Ventas.cedula
            this.menorTotal = Ventas.montoTotal()
        }
    }
    porcFrecuentes(){
        return (this.clieFrecuente/this.cliente)*100
    }
}