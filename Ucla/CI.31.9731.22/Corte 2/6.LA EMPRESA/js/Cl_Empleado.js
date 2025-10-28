export default class Cl_Empleado{
    constructor (nombre, edad, sexo, estCivil, ingObtenido){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estCivil = estCivil;
        this.ingObtenido = ingObtenido;
    }
    set nombre (n){
        this._nombre = n
    }
    get nombre (){
        return this._nombre;
    }
    set edad (e){
        this._edad = +e
    }
    get edad (){
        return this._edad;
    }
    set sexo (s){
        this._sexo = +s
    }
    get sexo (){
        return this._sexo
    }
    set estCivil (eC){
        this._estCivil = +eC
    }
    get estCivil (){
        return this._estCivil;
    }
    set ingObtenido (iO){
        this._ingObtenido = +iO
    }
    get ingObtenido (){
        return this._ingObtenido;
    }

    sexoDelEMpleado(){
        switch (this.sexo){
            case 1: return "Femenino"
            case 2: return "Masculino"
            default: return "No valido"
        }
    }
    estadoCivil(){
        switch (this.estCivil){
            case 1: return "Soltero";
            case 2: return "Casado";
            case 3: return "Divorciado";
            case 4: return "Viudo";
            case 5: return "Concubino";
            default: return "Otros";
        }
    }











}