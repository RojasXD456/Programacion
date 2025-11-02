export default class Cl_Condominio {
    constructor() {
        this.cntApartamentos = 0;
        this.cntAptosMas120Dias = 0;
        this.totalInteresesCobrados = 0;
        this.totalMontoDeudas = 0;
        this.mayorDeudaActualizada = 0;
        this.numeroAptoMayorDeuda = "";
    }

    procesarApartamento(apartamento) {
        // Para el promedio
        this.cntApartamentos++;
        this.totalMontoDeudas += apartamento.montoDeuda;

        // Para estadística 1: Contar aptos con más de 120 días
        if (apartamento.diasAtraso > 120) {
            this.cntAptosMas120Dias++;
        }

        // Para estadística 2: Acumular intereses
        let interes = apartamento.calcularInteres();
        this.totalInteresesCobrados += interes;

        // Para estadística 3: Buscar apto con mayor deuda actualizada
        let deudaActual = apartamento.calcularDeudaActualizada();
        if (deudaActual > this.mayorDeudaActualizada) {
            this.mayorDeudaActualizada = deudaActual;
            this.numeroAptoMayorDeuda = apartamento.numero;
        }
    }

    // Métodos getter para las estadísticas
    get cantidadAptosMas120Dias() {
        return this.cntAptosMas120Dias;
    }

    get montoTotalIntereses() {
        return this.totalInteresesCobrados;
    }

    get aptoMayorDeuda() {
        return this.numeroAptoMayorDeuda;
    }

    promedioMontoDeudas() {
        return this.cntApartamentos > 0 ? this.totalMontoDeudas / this.cntApartamentos : 0;
    }
}