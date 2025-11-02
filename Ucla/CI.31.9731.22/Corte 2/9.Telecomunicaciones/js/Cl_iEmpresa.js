export default class Cl_iEmpresa{
    repEmpresa(Empresa){
        return `=========================================================<br>
        Cantidad de clientes empresariales: ${Empresa.cntEmresariales}<br>
        Monto total recibido entre todos los clientes: ${Empresa.totalRecibido}<br>
        Menor monto neto pagado entre todos los clientes : ${Empresa.menorMontoNeto}<br>
        Porcentaje que representa los clientes tipo residencial: ${Empresa.porcentajeResidencial()}<br>`

    }
}