# https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/python

def validate_hello(greetings):
    various_greetings = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"]
    for value in various_greetings:
        if(value in greetings.lower()):
            return True

    return False
        

print(validate_hello("ciao bella!"))