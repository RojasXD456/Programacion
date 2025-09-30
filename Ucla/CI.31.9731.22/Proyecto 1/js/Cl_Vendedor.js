//Cl_Vendedor.js
export class Vendedor {
    constructor(cedula, montTotVtas, sueldoBase){
        this.cedula = cedula;
        this.montTotVtas = montTotVtas;
        this.sueldoBase = sueldoBase;
    }
    set cedula(c){
        this._cedula = c;
    }
    get cedula(){
        return this._cedula;
    }
    set montTotVtas(m){
        this._montTotVtas = +m;
    }
    get montTotVtas(){
        return this._montTotVtas;
    }
    set sueldoBase(s){
        this._sueldoBase = +s;
    }
    get sueldoBase(){
        return this._sueldoBase;
    }

    comision(){
        return this.montTotVtas * 20 / 100;
    }
    sueldoFinal(){
        return this.sueldoBase + this.comision();
    }
}