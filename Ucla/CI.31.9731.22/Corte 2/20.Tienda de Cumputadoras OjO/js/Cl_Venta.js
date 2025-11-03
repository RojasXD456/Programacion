export default class Cl_Venta{
    constructor(cedula,tipo,precio) {
        this.cedula = +cedula;
        this.tipo = +tipo;
        this.precio = +precio;
    }
    
    descuentoTemporal(){
        return this.precio*15/100
    }
    montoTemporal(){
        return this.precio - this.descuentoTemporal()
    }
    descuentoFrecuente(){
        if(this.tipo === 1)
        return this.montoTemporal()*10/100
        else
        return 0
    }
    montoTotal(){
        return this.montoTemporal() - this.descuentoFrecuente()
    }
}
