export default class Cl_iDoñaEmilia{
    leerFruta(){
        return prompt ("Fruta: 1-Piña 2-Patilla 3-Naranja 4-Cambur 5- Mandarina")
    }
    leerCantidad(){
        return prompt ("Insertar Kilos")
    }
    repDoñaEmilia(f,mB,d,mP){
        let nombreFruta;
        switch (f){
            case 1: nombreFruta = "Piña";break;
            case 2: nombreFruta = "Patilla";break;
            case 3: nombreFruta = "Naraja";break;
            case 4: nombreFruta = "Cambur";break;
            case 5: nombreFruta = "Mandarina";break;
        }
        return `
        <br>=================================================================
        <br> Fruta: ${nombreFruta}
        <br> Monto Base: ${mB}
        <br> Descuento: ${d}
        <br> Monto a Pagar: ${mP}
        <br>==================================================================`;


    }
}