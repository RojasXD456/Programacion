// Cl-Seccion.js
export default class Cl_Seccion {
constructor(codigo) {
this.codigo = codigo;
this.cntAprob = 0;
this.acNotas = 0.0;
this.cntAprobados = 0;
this.acNotasFinales = 0.0;
this.mayor = 0.0;
this.auxNombEstuMay = "";
this.menor = 105;
this.auxNombEstuMen = "";
}
set codigo(c) {
this._codigo = c;
}
get codigo() {
return this._codigo;
}
procesarEstudiante(estu) {
// contar los aprobados
if (estu.notaFinal() >= 47.5)
this.cntAprob++;
//acumular las notas finales
this.acNotas += estu.notaFinal();
// Estudiante con la mayor Nota
if (estu.notaFinal() > this.mayor) {
this.mayor = estu.notaFinal()
this.auxNombEstuMay = estu.nombre
}
// Estudiante con la menor Nota
if (estu.notaFinal() < this.menor) {
this.menor = estu.notaFinal()
this.auxNombEstuMen = estu.nombre
}

}
acumuladorNotas() {
return this.acNotas;
}
contadorAprobados() {
return this.cntAprob;
}
promedioSeccion() {
return this.acNotas / 5;
}
contadorAprobados(){
return this.cntAprob;
}
nombreEstudianteMayorNota()
{
return this.auxNombEstuMay
}
nombreEstudianteMenorNota(){
return this.auxNombEstuMen
}
}