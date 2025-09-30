#Concatenar dacenas de caracteres.
#Supongamos que quetemos crear una cadena que diga:
#Aprende a programar con _____.

#organizacion = "freeDodeCamp"

#print(f"Aprende a programar con {organizacion} ")
#print("Aprende a programar con " + organizacion)
#print("Aprende a programar con {}".format(organizacion))

#Mad Libs (Historias Locas)

adj = input("Adjetivo: ")
verbo1 =input("Verbo: ")
verbo2=input("Verbo: ")
sustantivo_plural =input("Sustantivo (plural): ")

madlib = f"!Programar es tan {adj}! siempre me emociona proque me encanta{verbo1} problemas. !Aprende a {verbo2} con freeCodeCamp y alcanza tus {sustantivo_plural}!"

print(madlib)