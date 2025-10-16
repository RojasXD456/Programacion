export default class Cl_Pollo {
    constructor(cedula, tipo, cantidad) {
        this.cedula = cedula;
        this.tipo = tipo;
        this.cantidad = cantidad;
    }

    set cedula(c) {
        this._cedula = String(c);
    }
    get cedula() {
        return this._cedula;
    }

    set tipo(t) {
        this._tipo = +t;
    }
    get tipo() {
        return this._tipo;
    }

    set cantidad(c) {
        this._cantidad = +c;
    }
    get cantidad() {
        return this._cantidad;
    }

    precioKilo() {
        switch(this.tipo) {
            case 1: return 4.5;
            case 2: return 5.0;
            case 3: return 5.5;
            case 4: return 3.5;
            default: return 0;
        }
    }

    subtotal() {
        return this.cantidad * this.precioKilo();
    }

    descuento() {
        if (this.cantidad > 5) {
            return this.subtotal() * 0.12;
        }
        return 0;
    }

    totalPagar() {
        return this.subtotal() - this.descuento();
    }
}