
 # Temos 18 ingressos. Se a pessoa <12 -- filme 1, se 12 =< a pessoa < 18 -- fime 2, se a pessoa >= 18 -- filme 3


age = int(input("Digite sua idade:"))
if age < 12:
        print("Filme 1")
elif 12 <= age < 18:
        print("Filme 2")
elif age >= 18:
        print("filme 3")

tickets = 0
if tickets > 0:
    print("Ingressos disponiveis")
else:
    print("Ingressos esgotados")
