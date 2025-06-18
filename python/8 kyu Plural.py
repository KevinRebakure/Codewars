# https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/python
def plural(n):
    if n == 0:
        return True
    if n == 1:
        return False
    if n > 1:
        return True
    
    
def interesting(n):
    return [True, False][n == 1]