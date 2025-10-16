export default class Cl_Chofer{
    constructor(nombre,kilometros){
        this.nombre = nombre
        this.kilometros = +kilometros
    }
    montoBase(){
        return this.kilometros * 0.50
    }
    comision(){
        if( this.kilometros > 200){
        return this.montoBase() *10/100
    }
        else{
        return 0
    }
    }
    montoFinal(){
        return this.comision() + this.montoBase()
    }

}