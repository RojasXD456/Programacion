export default class Cl_iFarmacia {
    repFarmacia(farmacia) {
        return `
        a. Monto total en cuentas por cobrar de nivel 4 y 5: $${farmacia.acMontxCobrar.toFixed(2)}<br>
        b. Porcentaje de cuota inicial nivel 6 y 7: ${farmacia.porcentajeInicialN6_7().toFixed(2)}%<br>
        c. Cédula del cliente con mayor compra: ${farmacia.auxCedClMay}<br>`;
    }
}