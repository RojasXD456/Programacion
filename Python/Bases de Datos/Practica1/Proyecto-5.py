import random
import string

#Juego del Ahorcado


from Palabras import palabras
from diagrama import vidas_diccionario_visual

def obtener_palabra_valida(palabras):
    #selecccionar una palabra al azar de la lista
    #de palabras validas
    palabra = random.choice(palabras)
    #Jugador seleciona una Letra
    
    while '-' in palabra or ' ' in palabra:
         palabra=random.choice(palabra)
    return palabra.upper()
     


def ahorcado():
    print("===================================")
    print(" Bienvenido(a) al Juego del Ahorcado!")
    print("===================================")
    
    palabra = obtener_palabra_valida(palabras)
    
    letras_por_adivinar = set(palabra)
    letras_adivinadas = set()
    abecedario = set(string.ascii_uppercase)
    
    
    vidas = 7
    
    while len(letras_por_adivinar) > 0 and vidas > 0:
        
        print(f"Te quedan {vidas} vidas y has usado estas letras: {' '.join(letras_adivinadas)}")
        
        #Mostrar el estado actual de la palbra
        palabra_lita = [letra if letra in letras_adivinadas else '-' for letra in palabra]
        #Mostrar estado del ahorcado
        print(vidas_diccionario_visual[vidas])
        #Mostrar las letras separadas por un espacio
        print(f"Palabra: {' '.join(palabra_lista)}")
        
        letra_usuario = input("Escoge una letraletra: ").upper()
        #Si la letra escogida por el usuario esta en el abecedario y no esta en el conjunto de letras  que ya se han intentado
        if letra_usuario in abecedario - letras_adivinadas:
            letras_adivinadas.add(letra_usuario)

    
    
    


