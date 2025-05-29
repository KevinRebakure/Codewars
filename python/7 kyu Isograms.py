# https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/python

def is_isogram(string):
    if(string == ''): return True
    safe_string = string.lower()
    unique = set(safe_string)
    if(len(unique) == len(string)):
        return True
    else:
        return False
    

# Refined, this could be a nice approach
def is_isogram(string):
    if(string == ''): return True
    for character in string:
        if(string.count(character) > 0):
            return False
    return True