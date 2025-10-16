export default class Cl_Viaje{
    constructor(peajes,gasolina,toldos,hospedaje,comidasybebidas){
        this.peajes= +peajes
        this.gasolina= +gasolina
        this.toldos= +toldos
        this.hospedaje= +hospedaje
        this.comidasybebidas= +comidasybebidas
    }

    montoViaje(){
        return this.peajes + this.gasolina + this.toldos + this.hospedaje + this.comidasybebidas;
    }
    montoAmigos(){
        return this.montoViaje() / 4;
    }
}