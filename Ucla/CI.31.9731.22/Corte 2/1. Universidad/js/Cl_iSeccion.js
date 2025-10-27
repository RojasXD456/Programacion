// Cl_iSeccion.js
export default class iSeccion {
leerCodigo() {
return prompt("Ingresa el codigo de la seccion");
}
reportarSeccion(c, p, nombMay,nombMen) {
return `
<br> Contador de aprobados: ${c}
<br> promedio de notas: ${p}
<br> Mejor estudiante: ${nombMay}
<br> Peor estudiante: ${nombMen}
`;
}
}