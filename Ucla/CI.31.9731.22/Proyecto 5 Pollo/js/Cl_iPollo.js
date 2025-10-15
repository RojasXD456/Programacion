//Cl_iCliente
export default class Cl_iPollo {
    leerCedula() {
        return prompt("Cédula del cliente:");
    }

    leerTipo() {
        return prompt("Tipo de pollo (1-Entero, 2-Muslos, 3-Pechuga, 4-Otros):");
    }

    leerCantidad() {
        return prompt("Cantidad en kilos:");
    }

    reporteVenta(cedula, tipo, total) {
        let nombreProducto ;
        
        // Switch para determinar el nombre del producto
        switch(tipo) {
            case 1: nombreProducto = "Pollo Entero"; break;
            case 2: nombreProducto = "2 Muslos"; break;
            case 3: nombreProducto = "3 Pechuga"; break;
            case 4: nombreProducto = "4 Otros"; break;
            default: nombreProducto = "Producto no válido";
        }
        return `
        <div class="cedula">Cédula: ${cedula}</div>
        <div class="producto">Producto: ${nombreProducto}</div>
        <div class="total">Monto a Pagar: $${total.toFixed(2)}</div>
        `;
    }
}