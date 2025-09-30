#Piedra,Papel,Tijeras
import random

print("====================")
print(" bienvenido al Juego ")
print("====================")

opciones = ['piedra', 'papel','tijera']

Jugador = input(f"Elige Piedra, Papel, Tijera:").lower()

computadora = random.choice(opciones)


print(f"Tu Elegiste: {Jugador}")
print(f"La Computadora Eligio: {computadora}")

if Jugador == computadora :
   print("Empate")

elif (Jugador == "piedra " and computadora == "tijera") or \
      (Jugador == 'tijera' and computadora == "papel") or \
      (Jugador == "papel" and computadora == "tijera"):
         print("Ganastes")
elif Jugador in opciones:
   print("!Perdistes!")
else:
   print("opcion no valida. Por favor elige piedra papel o tijera Correctamente")
   