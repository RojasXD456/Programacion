#Adivina el Número (Computadora)
import random


def adivina_el_numero_computadora(x):
    
    print("==========================")
    print(" !Bienvenido(a) al Juego! ")
    print("==========================")
    print(f"Selecciona un numero entre 1 y {x} para que la computadora intente adivinarlo")
    
    limite_inferior = 1
    limite_superior = x
    
    respuesta = ""
    while respuesta!= "c":
        #Generar prediccion
        if limite_inferior != limite_superior: #[1,10]
            prediccion = random.randint(limite_inferior, limite_superior)
        else:
            prediccion = limite_inferior #tambien pofria ser el limite superior.
        
        #Obtener respuesta del usuario
        respuesta = input (f'Miprediccion es {prediccion} Si es muy alta, ingresa (A). Si es muy baja, ingresa(B). Si es correcta, ingresa (C)' ).lower()
        
        if respuesta == "a":
            limite_superior = prediccion - 1
            
        elif respuesta =="b":
            limite_inferior = prediccion + 1
    
    print(f"!Siii! La computadora adivina el numero correctamente : {prediccion} Felicitaciones")        
      
      
adivina_el_numero_computadora(10) 
        
    
    