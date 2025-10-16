// Cl iEstudiante.js
export default class Cl_iEstudiante {
    leerNota1() {
        return prompt("Nota 1:");
    }

    leerNota2() {
        return prompt("Nota 2:");
    }

    leerNota3() {
        return prompt("Nota 3:");
    }

    reporteEstudiante(notaFinal, resultado) {
    return `
        <div class="promedio">Promedio: ${notaFinal.toFixed(2)}</div>
        <div class="estado">Estado: ${resultado}</div>
    `;
}
}
// cierre de la clase