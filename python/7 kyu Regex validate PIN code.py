# https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/python
def validate_pin(pin):
    if(len(pin)!=4 and len(pin)!=6): return False
    return pin.isdigit()
    
print(validate_pin("1234"))
# print('1234'.isdigit())

def smart(pin):
    return len(pin) in (4, 6) and pin.isdigit()