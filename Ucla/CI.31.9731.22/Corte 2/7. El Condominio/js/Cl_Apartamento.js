export default class Cl_Apartamento {

    constructor(numero, diasAtraso, montoDeuda) {
        this.numero = numero;
        this.diasAtraso = diasAtraso;
        this.montoDeuda = montoDeuda;
    }

    set numero(n) {
        this._numero = n;
    }
    get numero() {
        return this._numero;
    }

    set diasAtraso(d) {
        this._diasAtraso = +d;
    }
    get diasAtraso() {
        return this._diasAtraso;
    }

    set montoDeuda(m) {
        this._montoDeuda = +m;
    }
    get montoDeuda() {
        return this._montoDeuda;
    }

    // Calcula el porcentaje de interés según la tabla
    calcularPorcentaje() {
        if (this.diasAtraso >= 30 && this.diasAtraso < 60) return 2;
        if (this.diasAtraso >= 60 && this.diasAtraso <= 90) return 5;
        if (this.diasAtraso > 90 && this.diasAtraso <= 120) return 7;
        if (this.diasAtraso > 120) return 15;
        return 0;
    }

    // Calcula el monto de interés
    calcularInteres() {
        return this.montoDeuda * (this.calcularPorcentaje() / 100);
    }

    // Calcula la deuda actualizada (deuda + interés)
    calcularDeudaActualizada() {
        return this.montoDeuda + this.calcularInteres();
    }
}