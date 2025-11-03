export default class Cl_iCliente{
    leerCodigo(i){
        return prompt(`Codigo del cliente ${i +1}:`)
    }
    leerTipoCliente(i){
        return prompt(`Tipo de cliente ${i +1} (1.Residencial ó 2.Empresarial):`);
    }
    leerLecturaActual(i){
        return prompt(`Lectura actual del cliente ${i +1}:`);
    }
    leerLecturaAnterior(i){
        return prompt(`Lectura anterior del cliente ${i +1}:`);
    }
    repCliente(Cliente){
        return `===========================<br>
        Codigo Cliente: ${Cliente.codigo}<br>
        Cantidad impulsos consumidos ${Cliente.cantidadImpulsosConsumidos()}<br>
        Neto a pagar ${Cliente.netoPagar().toFixed(2)}<br>
        ===========================<br>`;
    }
}