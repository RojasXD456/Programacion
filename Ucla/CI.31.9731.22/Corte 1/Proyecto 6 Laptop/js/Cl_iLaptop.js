export default class Cl_iLaptop {
    leerPrecioDeVenta() {
        return prompt("Precio de Venta:");
    }
    
    leerCantidadDeCuotas() {
        return prompt("Cantidad de Cuotas:");
    }
    
    reporteLaptop(laptop) {
        return `
            Monto inicial: ${laptop.montoInicial().toFixed(2)}<br>
            Monto Restante: ${laptop.montoRestante().toFixed(2)}<br>
            Número de Cuotas: ${laptop.cantidadDeCuotas}<br>
            Monto de Cada Cuota: ${laptop.montoDeCadaCuota().toFixed(2)}
        `;
    }
}