// Cl_Seccion.js
export default class Cl_Seccion {
constructor(codigo) {
this.codigo = codigo;
this.cntAprob = 0;
this.acNotas = 0.0;
}
set codigo(c) {
this._codigo = c;
}
get codigo() {
return this._codigo;
}
procesarEstudiante(estu) {
this.acNotas += estu.notaFinal();
if (estu.notaFinal() >= 47.5) this.cntAprob++;
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
}