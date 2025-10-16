export default class Cl_DoñaEmilia{
    constructor (fruta, cantidad){
        this.fruta = fruta
        this.cantidad = cantidad
    }
    set fruta (f){
        this._fruta = +f
    }
    get fruta(){
        return this._fruta
    }
    set cantidad (c){
        this._cantidad = +c
    }
    get cantidad (){
        return this._cantidad
    }

    precioPorKlg(){
        switch(this.fruta){
            case 1: return 2.5
            case 2: return 2
            case 3: return 1.5
            case 4: return 2
            case 5: return 3
        }
    }
    montoBase(){
        return this.cantidad * this.precioPorKlg()
    }
    descuento(){
        if (this.cantidad > 10.5)
            return this.montoBase() * (3/100)
        else
            return 0;
    
    }

    montoPagar(){
        return this.montoBase() - this.descuento();
    }







}