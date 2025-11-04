export default class Cl_Farmacia{
    constructor(){
    this.acMontxCobrar= 0.0;
    this.acMontInicial= 0.0;
    this.acCuotaInicialSyS= 0.0;
    this.mayor= 0.0;
    this.auxCedClMay= "";
}

procCliente(Cliente){

    this.acMontxCobrar += Cliente.montoCyC()

    this.acCuotaInicialSyS += Cliente.cuotaInicialSyS()

    this.acMontInicial += Cliente.inicial()

    if (Cliente.montoCompra > this.mayor){
        this.mayor = Cliente.montoCompra
        this.auxCedClMay = Cliente.cedula
}

}

MontTotCuentxCob(){
    return this.acMontxCobrar;
}


porcCuotInicial(){
    if(this.acMontInicial > 0)
        return (this.acCuotaInicialSyS / this.acMontInicial)*100
    else    
        return 0
}

CedClmay(){
    return this.auxCedClMay;
}
} 