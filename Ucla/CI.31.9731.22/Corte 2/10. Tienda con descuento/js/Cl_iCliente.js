export default class Cl_iCliente{
    leerCedula(i) {
        return prompt (`Ingresar Cedula del Cliente ${i}:`)
    }
    leerCantidad(i){
        return prompt(`Ingresar Cantidad del Cliente ${i}:`)
    }
    leerPrecio(i){
        return prompt( `Ingresar Precio del Cliente ${i}:`)
    }
    repCliente(cliente){
        return `=========================<br>
        Pagar básico: ${cliente.montoBasico()}<br>
        Descuento: ${cliente.descuento()}<br>
        Monto pagar ${cliente.montoPagar()}<br>`
    }
}