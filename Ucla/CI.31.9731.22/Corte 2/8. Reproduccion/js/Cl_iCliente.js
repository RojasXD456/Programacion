export default class Cl_iCliente {
    leerCodigo(i) {
        return prompt(`Ingrese código del cliente ${i + 1}:`);
    }

    leerTipoFoto(i) {
        return prompt(`Ingrese tipo de fotocopia (1=Carta, 2=Oficio, 3=Extra-oficio) para cliente ${i + 1}:`);
    }

    leerCantidad(i) {
        return prompt(`Ingrese cantidad de fotocopias para cliente ${i + 1}:`);
    }

    reportarCliente(cliente) {
        let monto = cliente.calcularMonto();
        return `
        <br> Código Cliente: ${cliente.codigo}
        <br> Tipo: ${cliente.obtenerTipoNombre()}
        <br> Cantidad: ${cliente.cantidad}
        <br> Monto a pagar: $${monto.toFixed(2)}
        <br> ----------------------------
        `;
    }
}