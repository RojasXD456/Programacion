export default class Cl_iVenta {
    leerCedula(i) {
        return prompt(`Ingrese cédula del cliente ${i + 1}:`);
    }
    
    leerTipo(i) {
        return prompt(`Tipo cliente ${i + 1} (0=Nuevo, 1=Frecuente):`);
    }
    
    leerPrecio(i) {
        return prompt(`Precio de la computadora cliente ${i + 1}:`);
    }
    
    repVenta(venta) {
        return `
        =========================<br>
        Cédula: ${venta.cedula}<br>
        Desc. temporal: ${venta.descuentoTemporal().toFixed(2)}<br>
        Monto con desc. temporal: ${venta.montoTemporal().toFixed(2)}<br>
        ${venta.tipo === 1 ? `Desc. frecuente: ${venta.descuentoFrecuente().toFixed(2)}<br>` : ''}
        Total a pagar: ${venta.montoTotal().toFixed(2)}<br>
        =========================<br>`;
    }
}