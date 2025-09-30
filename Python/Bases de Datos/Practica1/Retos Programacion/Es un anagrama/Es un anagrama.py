def palabras(palabra1:str, palabra2:str) -> bool :
    palabra1 = palabra1.lower()
    palabra2 = palabra2.lower()
    
    if palabra1 == palabra2:
        print("Las palabras son iguales, no es un anagrama")
        return False
        
    elif sorted(palabra1) == sorted(palabra2):
        print("¡Es un anagrama!")
        return True
    
    else:
        print("No es un anagrama")
        return False

resultado = palabras("rome","amor")

print(resultado)



    