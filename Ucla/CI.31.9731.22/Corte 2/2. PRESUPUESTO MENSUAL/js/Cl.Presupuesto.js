export default class Cl_Presupuesto{
    constructor(montoInicial){
        this.montoInicial = montoInicial
        this.acumGastos = 0;
        this.contSem = 0;
    }
    set(mon){
        this._montoInicial = mon
    }

    promGastos() {
        if (this.contSem != 0)
        return this.acumGastos / this.contSem;
        else return 0
    }
    procesarSem(sem){
        this.acumGastos += sem.montoGastos
        this.contSem++;
    }
    montoActualizado(){
        return montoInicial - this.acumGastos;
    }
    totalGastos() {
        return this.acumGastos;
    }

}