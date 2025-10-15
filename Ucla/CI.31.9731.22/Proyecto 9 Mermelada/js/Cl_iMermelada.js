export default class Cl_iMermelada {
    leerSabor() {
        return prompt("Sabor (1.Fresa, 2.Melocotón, 3.Guayaba, 4.Piña, 5.Tamarindo):");
    }

    leerCosto() {
        return prompt("Costo $:");
    }

    leerCantidadVendida() {
        return prompt("Cantidad vendida:");
    }

    leerProducidaLara() {
        return prompt("Producida Lara (1.Si, 0.No):");
    }

    reporteMermelada(mr, pv, mb, md, tp) {
        return `
        El monto del recargo: $${mr.toFixed(2)}<br>
        El precio de venta: $${pv.toFixed(2)}<br>
        El monto base: $${mb.toFixed(2)}<br>
        El monto del descuento: $${md.toFixed(2)}<br>
        Total a Pagar: $${tp.toFixed(2)}
        `;
    }
}