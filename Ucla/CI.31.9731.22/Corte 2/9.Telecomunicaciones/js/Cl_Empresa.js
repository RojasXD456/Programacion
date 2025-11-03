export default class Cl_Empresa{
    constructor(){
        this.cntEmpresariales = 0;
        this.totalRecibido = 0;
        this.menorMontoNeto = 1000;
        this.cntResidencial = 0;
        this.totalClientes = 0; // Agregar para calcular porcentaje
    }
    
    procesarCliente(Cliente){
        // Contar tipos de clientes
        if(Cliente.tipo == 2){
            this.cntEmpresariales++;
        } else if(Cliente.tipo == 1){
            this.cntResidencial++;
        }
        
        this.totalRecibido += Cliente.netoPagar();
        this.totalClientes++;

        if (Cliente.netoPagar() < this.menorMontoNeto){
            this.menorMontoNeto = Cliente.netoPagar();
        }
    }
    
    porcentajeResidencial(){
        return (this.cntResidencial / this.totalClientes) * 100;
    }
}