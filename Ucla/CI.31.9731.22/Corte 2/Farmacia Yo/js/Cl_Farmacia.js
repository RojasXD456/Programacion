export default class Cl_Farmacia{
    constructor(){
        this.acMontxCobrar = 0.0;
        this.acMontInicialTotal = 0.0;
        this.acMontInicialN6_7 = 0.0; 
        this.mayor = 0.0;
        this.auxCedClMay = "";
    }
    
    procCliente(cliente){
        if (cliente.nivel == 4 || cliente.nivel == 5){
            this.acMontxCobrar += cliente.saldoPendiente();
        }

        this.acMontInicialTotal += cliente.cuotaInicial();
        if (cliente.nivel == 6 || cliente.nivel == 7){
            this.acMontInicialN6_7 += cliente.cuotaInicial();
        }
        
        if(cliente.montoCompra > this.mayor){
            this.mayor = cliente.montoCompra;
            this.auxCedClMay = cliente.cedula;
        }
    }
    
    
    porcentajeInicialN6_7() {
        if (this.acMontInicialTotal === 0) return 0;
        return (this.acMontInicialN6_7 / this.acMontInicialTotal) * 100;
    }
}