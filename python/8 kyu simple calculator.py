# https://www.codewars.com/kata/5810085c533d69f4980001cf/train/python

def calculator(x, y, op):
    if (not (isinstance(x, (int, float)) and isinstance(y, (int, float)))): return "unknown value"
    if (op not in ['+', '-', '/','*']): return "unknown value"
    
    calculate = {
        "+": x + y,
        "-": x - y,
        "*": x * y, 
        "/": x / y
    }
    
    return calculate[op]
    

    
print(type('asdf'))