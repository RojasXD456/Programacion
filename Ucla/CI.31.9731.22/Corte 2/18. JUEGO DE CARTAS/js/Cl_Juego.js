export default class Cl_Juego {
    constructor(){
        this.jugadores = 0
        this.mayorPuntuacion = 0
        this.NombreGanador = ""
        this.jugadorMenos10 = 10
    }
    procesarJugador(jugador){
        if(jugador.puntuacion() > this.mayorPuntuacion){
            this.mayorPuntuacion = jugador.puntuacion()
            this.NombreGanador = jugador.nombre
        }
        if(jugador.puntuacion() < this.jugadorMenos10){
            this.jugadorMenos10 = jugador.puntuacion()
        }
    }
}
