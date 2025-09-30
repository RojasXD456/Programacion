fibonacci = [0, 1]
for i in range(2, 50):
    siguiente = fibonacci[-1] + fibonacci[-2]
    fibonacci.append(siguiente)

print(fibonacci)