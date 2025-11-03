export default class Cl_Tienda {
    constructor(){
        this.acmClientes = 0;
        this.clienteDescuento= 0;
        this.acmMontoPagar = 0;
    }

    procesarCliente(cliente){
        this.acmClientes++
        if (cliente.montoBasico() > 25){
            this.clienteDescuento++
        }
        this.acmMontoPagar += cliente.montoPagar()
    }
    PorcentajeDescuento(){
        return (this.clienteDescuento / this.acmClientes) * 100;
    }
}