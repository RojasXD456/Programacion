def contar_palabras(texto):
    # Caracteres de puntuación comunes que se eliminarán
    puntuacion = ".,;:¡!¿?()[]{}\"'<>-–—"

    # Paso 1: Convertir a minúsculas para evitar diferencias por mayúsculas/minúsculas
    texto = texto.lower()

    # Paso 2: Eliminar signos de puntuación manualmente
    texto_limpio = ""
    for caracter in texto:
        if caracter not in puntuacion:
            texto_limpio += caracter
        else:
            texto_limpio += " "  # Reemplazar puntuación con espacio para separar palabras

    # Paso 3: Dividir texto en palabras (manual, sin usar split)
    palabras = []
    palabra = ""
    for caracter in texto_limpio:
        if caracter == " ":
            if palabra != "":
                palabras.append(palabra)
                palabra = ""
        else:
            palabra += caracter
    if palabra != "":
        palabras.append(palabra)

    # Paso 4: Contar ocurrencias
    recuento = {}
    for palabra in palabras:
        if palabra in recuento:
            recuento[palabra] += 1
        else:
            recuento[palabra] = 1

    # Mostrar resultado
    for palabra, cantidad in recuento.items():
        print(f"{palabra}: {cantidad}")

# Ejemplo de uso
texto_ejemplo = "¡Hola! ¿Qué tal? Hola, mundo. Mundo... mundo?"
contar_palabras(texto_ejemplo)
