// Principal.js actualizado
import Cl_iVendedor from "./CL_iVendedor.js";
import { Vendedor } from "./Cl_Vendedor.js";

let Ivendedor = new Cl_iVendedor();
let c = Ivendedor.leerCedula();
let m = Ivendedor.leerMonttotVtas();
let sB = Ivendedor.leerSueldoBase();
let vendedor = new Vendedor(c, m, sB);
let salida = document.getElementById("salida");

// Crear la estructura HTML con las nuevas clases
salida.innerHTML = `
<div class="contenedor-principal">
    <div class="cabecera">
        <h1 class="titulo-principal">Sistema de Vendedores</h1>
        <p class="subtitulo">Reporte de comisiones y sueldo final</p>
    </div>
    
    <div class="tarjeta-resultados">
        <div class="encabezado-tarjeta">
            <div class="icono-tarjeta">💰</div>
            <h2 class="titulo-tarjeta">Resultados del Vendedor</h2>
        </div>
        
        <div class="lista-resultados">
            <div class="item-resultado cedula">
                <span class="etiqueta">Cédula</span>
                <span class="valor">${vendedor.cedula}</span>
            </div>
            <div class="item-resultado comision">
                <span class="etiqueta">Comisión</span>
                <span class="valor">$${vendedor.comision().toFixed(2)}</span>
            </div>
            <div class="item-resultado sueldo-final">
                <span class="etiqueta">Sueldo Final</span>
                <span class="valor">$${vendedor.sueldoFinal().toFixed(2)}</span>
            </div>
        </div>
        
        <div class="resumen-destacado">
            <div class="titulo-resumen">Total a Pagar</div>
            <div class="monto-total">$${vendedor.sueldoFinal().toFixed(2)}</div>
            <div class="subtitulo">Incluye sueldo base + comisión</div>
        </div>
    </div>
    
    <div class="pie-pagina">
        Sistema de Gestión de Vendedores © ${new Date().getFullYear()}
    </div>
</div>`;