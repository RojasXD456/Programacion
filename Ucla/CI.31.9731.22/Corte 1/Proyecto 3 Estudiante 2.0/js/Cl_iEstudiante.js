export default class Cl_iEstudiante{

    leerCedula(){
        return prompt("Cedula:");
    }
    leerNota1(){
        return prompt("Nota 1:");
    }
    leerNota2(){
        return prompt("Nota 2:");
    }
    leerNota3(){
        return prompt("Nota 3:");
    }       

    reporteNota(cedula,resultado,estado){
        return `
        <div class="Cedula">Cedula: ${cedula}</div>
        <div class="Resultado">Resultado: ${resultado}</div>
        <div class="Estado">Estado: ${estado}</div>
        `;
    }
}