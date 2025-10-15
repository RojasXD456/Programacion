export default class Cl_Mermelada {
    constructor(sabor, costo, cantidadVendida, producidaLara) {
        this.sabor = +sabor;
        this.costo = +costo;
        this.cantidadVendida = +cantidadVendida;
        this.producidaLara = +producidaLara;
    }

    porcentajeRecargo() {
        switch (this.sabor) {
            case 1: return 35; // Fresa 35%
            case 2: return 30; // Melocotón 30%
            case 3: return 25; // Guayaba 25%
            case 4: return 20; // Piña 20%
            case 5: return 40; // Tamarindo 40%
        }
    }

    montoRecargo() {
        return this.costo * (this.porcentajeRecargo() / 100);
    }

    precioVenta() {
        return this.costo + this.montoRecargo();
    }

    montoBase() {
        return this.precioVenta() * this.cantidadVendida;
    }

    descuento() {
        if (this.producidaLara == 1) {
            return this.montoBase() * 0.05; // 5% de descuento
        } else {
            return 0;
        }
    }

    totalPagar() {
        return this.montoBase() - this.descuento();
    }
}