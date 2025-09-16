# https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/python

def arithmetic(a, b, operator):
    match operator.lower(): 
        case 'add':
            return a + b
        case 'subtract':
            return a - b
        case 'multiply':
            return a * b
        case 'divide':
            return a / b
        case _:
            return 'Invalid operation!'

def arithmetic02(a, b, operator):
    op = {
        'add': '+',
        'subtract': '-',
        'multiply': '*',
        'divide': '/'
    }
    return eval("{} {} {}".format(a, op[operator], b))