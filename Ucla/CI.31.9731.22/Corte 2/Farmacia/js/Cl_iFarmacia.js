export default class Cl_iFarmacia{

    repFarmacia(MontTotCuentxCob, porcCuotInicial, CedClmay){
        return `
    <br> Monto total en cuentas por cobrar de los clientes de inicial 4 y 5: = ${MontTotCuentxCob}$
    <br> Porcentaje correspondiente al monto recaudado en Cuota Inicial de los clientes del inicial 6 y 7, en relación
    al monto total recaudado en Cuota Inicial: = ${porcCuotInicial}%
    <br> Cédula del cliente con mayor monto de compra: ${CedClmay}
    `;
    }
}