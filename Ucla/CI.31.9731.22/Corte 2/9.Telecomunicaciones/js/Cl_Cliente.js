export default class Cl_Cliente{
    constructor(codigo,tipo,lecActual,lecAnterior){
        this.codigo = +codigo;
        this.tipo = +tipo;
        this.lecActual = +lecActual;
        this.lecAnterior = +lecAnterior;
    }
    cantidadImpulsosConsumidos(){
        return this.lecActual - this.lecAnterior;
    }
    netoPagar(){
        switch(this.tipo){
            case 1 : return this.cantidadImpulsosConsumidos() * 1.5;
            case 2 : return this.cantidadImpulsosConsumidos() * 2.5;
            default : return 0
        }
    }
}