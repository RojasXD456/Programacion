export default class Cl_Empresa{
    constructor(){
    this.actEmpresariales = 0;
    this.totalRecibido = 0;
    this.cntMenorMontoNeto = 1000;
    this.cntResidencial = 0;
    }
    procesarCliente(Cliente){
        if(this.tipo == 2){
            this.cntEmpresariales++;
        }
        this.totalRecibido =+ cliente.netoPagar();

        if(this.acmMenorMontoNeto < cliente.netoPagar()){
            return this.acmMenorMontoNeto = cliente.netoPagar();
        }
        if(this.tipo == 1){
            this.cntResidencial++;
        
    }
}
porcentajeResidencial(){
    return this.cntResidencial/5*100
}
get cntEmpresariales() {
    return this._cntEmpresariales;
}

get totalRecibido(){
    return this._totalRecibido;
}
get acmMenorMontoNeto(){
    return this._cntMenorMontoNeto;
}
get cntResidencial(){
    return this._cntResidencial;
}
}