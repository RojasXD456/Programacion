export default class Cl_iCondominio {
    reportarEstadisticas(condominio) {
        return `
        <br> ===== ESTADÍSTICAS DEL CONDOMINIO =====
        <br> Cantidad de apartamentos con más de 120 días de atraso: ${condominio.cantidadAptosMas120Dias}
        <br> Monto total de los intereses cobrados: ${condominio.montoTotalIntereses.toFixed(2)}
        <br> Número del apto con mayor deuda actualizada: ${condominio.aptoMayorDeuda}
        <br> Promedio de monto de las deudas: ${condominio.promedioMontoDeudas().toFixed(2)}
        `;
    }
}