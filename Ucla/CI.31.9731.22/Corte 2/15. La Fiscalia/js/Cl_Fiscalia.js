export default class Cl_Fiscalia{
    constructor(){
        this.Agricultores = 0
        this.totalMultas = 0;
        this.cedulaMayor = "";
        this.mayorMulta = 0;
        this.AgriToneEnci9000 = 0
    }

    procesarAgricultor(Agricultor){
        this.Agricultores++
        if(this.montoMultas > Agricultor.montoTonelada){
            this.mayorMulta += Agricultor.montoTonelada
            this.cedulaMayor = Agricultor.cedula
        }
        if(Agricultor.multa() == 10 ){
            this.AgriToneEnci9000++
        }

    }
    porcAgricultoresEncima9000(){
        return this.AgriToneEnci9000/this.Agricultores*100
        
    }
}