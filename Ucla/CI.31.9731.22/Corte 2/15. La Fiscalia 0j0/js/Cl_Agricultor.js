export default class Cl_Agricultor{
    constructor(cedula,toneladasBotadas,montoTonelada){
        this.cedula = +cedula;
        this.toneladasBotadas = +toneladasBotadas;
        this.montoTonelada = +montoTonelada;
    }
    multa(){
        if(this.toneladasBotadas >= 500 && this.toneladasBotadas < 3000){
            return 5
        }
        else if (this.toneladasBotadas >=3000 && this.toneladasBotadas <=9000){
            return 7
        }
        else{
            return 10
        }
    }
    montoPerdido(){
        return this.toneladasBotadas * this.montoTonelada
    }
    montoMulta(){
        return this.montoPerdido()*this.multa()/100
    }

}