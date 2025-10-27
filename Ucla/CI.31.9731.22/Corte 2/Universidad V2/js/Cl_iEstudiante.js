// Cl_iEstudiante.js
export default class Cl_iEstudiante {
leerNombre(i) {
return prompt("Ingresa el nombre del estudiante " + (i + 1));
}
leerNota1() {
return prompt("Ingresa la nota del primer parcial");
}
leerNota2() {

return prompt("Ingresa la nota del segundo parcial");
}
leerNota3() {
return prompt("Ingresa la nota del tercer parcial");
}
reportarEstudiante(n, nf) {
return `
<br> Nombre de estudiante: ${n}
<br> Nota final: ${nf}
`;
}
}