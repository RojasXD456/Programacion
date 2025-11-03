export default class Cl_iTienda {
    repTienda(tienda) {
        return `
        <h2>REPORTE TIENDA</h2>
        =========================<br>
        Monto total desc. temporal: ${tienda.totalTemporal.toFixed(2)}<br>
        Porcentaje clientes frecuentes: ${tienda.porcFrecuentes().toFixed(2)}%<br>
        Cédula menor total a pagar: ${tienda.menorCedula}<br>
        =========================`;
    }
}