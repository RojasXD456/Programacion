export default class Cl_iCliente{

    leercedula(){
        return prompt ("Ingrese su número de cédula:");
    }
    leerinicial(){
        return prompt ("¿Cual es su inicial? 1. Básico, 2. Medio 3. Alto, 4. Bronce, 5. Plata, 6.Oro, 7.Platinum");
    }
    leermontoCompra(){
        return prompt ("Ingrese el monto de su compra:");
    }
    repCliente(cedula, inicial, quincenal){
        return `
    <br> Cédula = ${cedula} 
    <br> Cuota inicial = ${inicial}$
    <br> Cuota quincenal = ${quincenal}$`;
    }}