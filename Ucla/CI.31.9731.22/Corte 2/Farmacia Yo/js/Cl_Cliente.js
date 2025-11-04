export default class Cl_Cliente {
    constructor(cedula, nivel, montoCompra){
        this.cedula = cedula;
        this.nivel = nivel;
        this.montoCompra = montoCompra;
    }
    
    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this._cedula;
    }
    
    set nivel(n) {
        this._nivel = +n;
    }
    get nivel() {
        return this._nivel;
    }
    
    set montoCompra(m) {
        this._montoCompra = +m;
    }
    get montoCompra() {
        return this._montoCompra;
    }
    
    cuotaInicial() {
        switch(parseInt(this.nivel)) {
            case 1: case 2: case 3: return this.montoCompra * 0.40;
            case 4: case 5: return this.montoCompra * 0.30;
            case 6: case 7: return this.montoCompra * 0.25;
            default: return 0;
        }
    }
    
    saldoPendiente() {
        return this.montoCompra - this.cuotaInicial();
    }
    
    cuotaQuincenal() {
        return this.saldoPendiente() / 3;
    }
}