export default class Cl_iEmpresa {
    reportarEstadisticas(empresa) {
        let masSolicitada = empresa.obtenerMasSolicitada();
        
        return `
        <br> ===== ESTADÍSTICAS DE LA EMPRESA =====
        <br> Total fotocopias tipo Carta: ${empresa.totalFotosCarta}
        <br> Total fotocopias tipo Oficio: ${empresa.totalFotosOficio}
        <br> Total fotocopias tipo Extra-oficio: ${empresa.totalFotosExtraOficio}
        <br> Entre Carta y Oficio, la más solicitada fue: ${masSolicitada}
        <br> Mayor pago realizado: $${empresa.mayorPagoRealizado.toFixed(2)}
        `;
    }
}