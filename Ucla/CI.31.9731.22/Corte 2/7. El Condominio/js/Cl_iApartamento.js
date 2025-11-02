// Cl_iApartamento.js - VERSIÓN CORREGIDA
export default class Cl_iApartamento {
    leerNumero(i) {  
        return prompt(`Ingrese el número del apartamento ${i + 1}:`);
    }

    leerDiasAtraso(i) {  
        return prompt(`Ingrese los días de atraso del apartamento ${i + 1}:`);
    }

    leerMonto(i) { 
        return prompt(`Ingrese el monto de la deuda del apartamento ${i + 1}:`);
    }

    reportarApartamento(apartamento) {
        let interes = apartamento.calcularInteres();
        let deudaActualizada = apartamento.calcularDeudaActualizada();
        
        return `
        <br> Apartamento: ${apartamento.numero}
        <br> Días de atraso: ${apartamento.diasAtraso}
        <br> Monto deuda: ${apartamento.montoDeuda}
        <br> Interés a pagar: ${interes.toFixed(2)}
        <br> Deuda actualizada: ${deudaActualizada.toFixed(2)}
        <br> ----------------------------
        `;
    }
}