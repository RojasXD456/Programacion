export default class Cl_iEmpresa{
    repEmpresa(Empresa){
        return `=========================================================<br>
        Cantidad de clientes empresariales: ${Empresa.cntEmpresariales}<br>
        Monto total recibido entre todos los clientes: ${Empresa.totalRecibido.toFixed(2)}<br>
        Menor monto neto pagado entre todos los clientes: ${Empresa.menorMontoNeto.toFixed(2)}<br>
        Porcentaje que representa los clientes tipo residencial: ${Empresa.porcentajeResidencial().toFixed(2)}%<br>`
    }
}