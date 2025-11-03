export default class Cl_Cliente{
    constructor(cedula,cantidad,precio){
        this.cedula = +cedula;
        this.cantidad = +cantidad;
        this.precio = +precio;
    }

    montoBasico(){
        return this.cantidad * this.precio
    }
    descuento(){
        if (this.montoBasico() > 25){
            return this.montoBasico()*10/100
        }
        else
            return 0
    }
    montoPagar(){
        return this.montoBasico() - this.descuento()
    }
    
}