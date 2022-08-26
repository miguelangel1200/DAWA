
# from ast import If


numero = int(input("Escriba un número del 1 al 100: "))


if numero%3==0 and numero%5==0:
    print("fizzbuzz")
elif numero%5 ==0:
    print("buzz")
elif numero%3 == 0:
    print("fizz")