export default class Cl_Laptop {
    constructor(precioDeVenta, cantidadDeCuotas) {
        this.precioDeVenta = precioDeVenta;
        this.cantidadDeCuotas = cantidadDeCuotas;
    }
    
    get precioDeVenta() {
        return this._precioVenta;
    }
    
    set precioDeVenta(v) {
        this._precioVenta = +v;
    }
    
    get cantidadDeCuotas() {
        return this._cantidadDeCuotas;
    }
    
    set cantidadDeCuotas(v) {
        this._cantidadDeCuotas = +v;
    }
    
    montoInicial() {
        return this.precioDeVenta * 0.25; // 25% del precio
    }
    
    montoRestante() {
        return this.precioDeVenta - this.montoInicial();
    }
    
    montoDeCadaCuota() {
        return this.montoRestante() / this.cantidadDeCuotas;
    }
}