export default class Cl_Jugador{
    constructor(nombre,valor1,valor2,valor3){
        this.nombre = nombre;
        this.valor1 = +valor1;
        this.valor2 = +valor2;
        this.valor3 = +valor3;
    }
    Puntuacion(){
        return this.valor1 + this.valor2 + this.valor3;
    }   

}