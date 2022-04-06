import random

def gameWin(comp, you):
    if comp == you:
        return None
    if comp=="s":
        if you=="w":
            return False
        elif you=="g":
            return True
    if comp=="w":
        if you=="g":
            return False
        elif you=="s":
            return True
    if  comp =="g":
        if you=="w":
            return True
        elif you=="s":
            return False

print("comp turn: snake(s), water(w), or gun(g)?")
randomnumer = random.randint(1,3)

if randomnumer==1:
    comp = "s"
elif randomnumer==2:
    comp = "w"
elif randomnumer==3:
    comp = "g"

you= input("Enter You choice:snake(s), water(w), or gun(g)?\n")
a= gameWin(comp,you)

if a==None:
    print("The game is Tie")
elif a:
    print("you win")
else:
    print("you lose")

print(f"comp chose {comp}")    
print(f"you chose {you}")