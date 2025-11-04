export default class Cl_iCliente {
    leerCedula(i) {
        return prompt(`Ingrese la cedula del cliente ${i + 1} `);
    }
    
    leerNivel(i) {
        return prompt(`Ingrese el nivel del cliente ${i + 1} , Nivel (1. Básico, 2. Medio 3. Alto, 4. Bronce, 5. Plata, 6.Oro, 7.Platinum) `);
    }
    
    leerMonto(i) {
        return prompt(`Ingrese el monto del cliente ${i + 1} `);
    }
    
    repCliente(cliente) {
        return `<p>Cedula: ${cliente.cedula}<br>
        Cuota Inicial: $${cliente.cuotaInicial().toFixed(2)}<br>
        Cuota Quincenal: $${cliente.cuotaQuincenal().toFixed(2)}</p>`;
    }
}