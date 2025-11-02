export default class Cl_Cliente {
    constructor(codigo, tipoFoto, cantidad) {
        this.codigo = codigo;
        this.tipoFoto = tipoFoto;    // 1, 2, 3
        this.cantidad = cantidad;
    }

    set codigo(c) {
        this._codigo = c;
    }
    get codigo() {
        return this._codigo;
    }

    set tipoFoto(t) {
        this._tipoFoto = +t;
    }
    get tipoFoto() {
        return this._tipoFoto;
    }

    set cantidad(c) {
        this._cantidad = +c;
    }
    get cantidad() {
        return this._cantidad;
    }

    // Calcula el monto a pagar según el tipo
    calcularMonto() {
        switch(this.tipoFoto) {
            case 1: return this.cantidad * 1;      // Carta: 1$
            case 2: return this.cantidad * 1.5;    // Oficio: 1.5$
            case 3: return this.cantidad * 2;      // Extra-oficio: 2$
            default: return 0;
        }
    }

    // Obtiene el nombre del tipo de fotocopia
    obtenerTipoNombre() {
        switch(this.tipoFoto) {
            case 1: return "Carta";
            case 2: return "Oficio";
            case 3: return "Extra-oficio";
            default: return "Desconocido";
        }
    }
}