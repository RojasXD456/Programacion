export default class Cl_Empresa{
    constructor(){
        this.totalCarta = 0;
        this.totalOficio = 0;
        this.totalExtraOficio = 0;
        this.mayorPago = 0;
        this.codigoMayorPago = "";
}
procesarCliente(cliente){
    let cantidad = cliente.cantidad;
    let monto = cliente.calcularMonto();

    switch(cliente.tipoFoto){
        case 1:
            this.totalCarta += cantidad;
            break;
        case 2:
            this.totalOficio += cantidad;
            break;
        case 3:
            this.totalExtraOficio += cantidad;
            break;
    }
    if (monto > this.mayorPago){
        this.mayorPago = monto
        this.codigoMayorPago = cliente.codigo
    }
}

obtenerMasSolicitada(){
    if(this.totalCarta > this.totalOficio){
        return "carta"
    }
    else if (this.totalOficio > this.total){
        return "Oficio"
    }
    else {
        return "Empate"
    }
}
    get totalFotosCarta() {
        return this.totalCarta;
    }

    get totalFotosOficio() {
        return this.totalOficio;
    }

    get totalFotosExtraOficio() {
        return this.totalExtraOficio;
    }

    get mayorPagoRealizado() {
        return this.mayorPago;
    }

    get codigoClienteMayorPago() {
        return this.codigoMayorPago;
    }
}