export default class Cl_Cliente{
    contructor(codigo,tipoFoto,cantidadFoto){
        this._codigo = codigo;
        this._tipoFoto = tipoFoto;
        this._cantidadFoto = cantidadFoto;
    }
    tipoFotocopia(){
        switch(this.tipoFoto){
            case 1:
                return 1;
            case 2:
                return 1.5;
            case 3:
                return 2;
        }
    }
    montoPago(){
        return this.cantidadFoto * this.tipoFotocopia()
    }
}
