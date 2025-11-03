export default class Cl_iFiscalia {
    repFiscalia(fiscalia) {
        return `
        <h2>REPORTE FISCALÍA</h2>
        =========================<br>
        Monto total recaudado: ${fiscalia.totalMultas.toFixed(2)}<br>
        Cédula mayor multa: ${fiscalia.cedulaMayor}<br>
        Porcentaje encima 9000: ${fiscalia.porcAgricultoresEncima9000().toFixed(2)}%<br>
        =========================`;
    }
}