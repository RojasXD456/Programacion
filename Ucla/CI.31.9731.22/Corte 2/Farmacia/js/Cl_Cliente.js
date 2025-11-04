export default class Cl_Cliente{
    constructor(cedula, inicial, montoCompra){
        this.cedula=cedula;
        this.inicial=inicial;
        this.montoCompra=montoCompra;
    }

    set cedula(c){
        this._cedula=+c;
    }
    get cedula(){
        return this._cedula;
    }

    set inicial(n){
        this._inicial=+n;
    }
    get inicial(){
        return this._inicial;
    }

    set montoCompra(mC){
        this._montoCompra=+mC;
    }
    get montoCompra(){
        return this._montoCompra;
    }

    inicial(){
        switch(this.inicial){
            case 1: return this.montoCompra * 40/100; break;
            case 2: return this.montoCompra * 40/100; break;
            case 3: return this.montoCompra * 40/100; break;
            case 4: return this.montoCompra * 30/100; break;
            case 5: return this.montoCompra * 30/100; break;
            case 6: return this.montoCompra * 25/100; break;
            default: return this.montoCompra * 25/100;
    }
    }
        montTotal(){
        return this.montoCompra - this.inicial();
    }

        quincenal(){
            return this.montTotal()/3
    }
        

        montoCyC(){
            if (this.inicial == 4){
                return this.montoCompra - this.inicial();
            } else if (this.inicial == 5){
                return this.montoCompra - this.inicial();
            } else 
                return 0
    }
        cuotaInicialSyS(){
            if (this.inicial == 6){
                return this.inicial();
            } else if (this.inicial == 7){
                return this.inicial();
            } else 
                return 0
    }
}