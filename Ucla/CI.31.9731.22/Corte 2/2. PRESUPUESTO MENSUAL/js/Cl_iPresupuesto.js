export default class Cl_iPresupuesto {
    leerMontoInicial(){
        return prompt("Monto Inicial:");
    }
    reporte(montoFinal,promedioGastos,montoActualizado) {
        return `
            Monto Final: ${montoFinal}<br>
            Promedio de Gastos: ${promedioGastos}<br>
            Monto Actualizado: ${montoActualizado}
        `;
    }
}