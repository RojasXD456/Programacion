// Cl_Estudiante.js
export default class Cl_Estudiante {
constructor(nombre, nota1, nota2, nota3) {
this.nombre = nombre;
this.nota1 = nota1;
this.nota2 = nota2;
this.nota3 = nota3;
}
set nombre(n) {
this._nombre = n;
}
get nombre() {
return this._nombre;
}
set nota1(n) {
this._nota1 = +n;
}
get nota1() {
return this._nota1;
}
set nota2(n) {
this._nota2 = +n;
}
get nota2() {
return this._nota2;
}
set nota3(n) {
this._nota3 = +n;
}
get nota3() {
return this._nota3;
}
notaFinal() {
return this.nota1 + this.nota2 + this.nota3;
}
}