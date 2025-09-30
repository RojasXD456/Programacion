#Numeros del 1 al 100
for i in range(1, 101):
    
    numero = ""
    print(numero)
    if i % 3 == 0 and i % 5 == 0:
        numero = "fizzbuzz"
    elif i % 3 == 0:
        numero = "fizz"
    elif i % 5 == 0:
        numero = "buzz"   
    else:
        numero = i
        
        
        
