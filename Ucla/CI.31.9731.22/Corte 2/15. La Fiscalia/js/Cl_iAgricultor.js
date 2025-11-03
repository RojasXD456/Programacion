export default class Cl_iAgricultor {
    leerCedula(i) {
        return prompt(`Ingrese cédula del agricultor ${i + 1}:`);
    }
    
    leerToneladasBotadas(i) {
        return prompt(`Ingrese toneladas botadas del agricultor ${i + 1}:`);
    }
    
    leerMontoTonelada(i) {
        return prompt(`Ingrese monto por tonelada del agricultor ${i + 1}:`);
    }
    
    repAgricultor(agricultor) {
        return `
        =========================<br>
        Cédula: ${agricultor.cedula}<br>
        Monto perdido: ${agricultor.montoPerdido().toFixed(2)}<br>
        Monto multa: ${agricultor.montoMulta().toFixed(2)}<br>
        =========================<br>`;
    }
}