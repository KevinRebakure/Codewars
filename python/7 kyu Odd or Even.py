# https://www.codewars.com/kata/5949481f86420f59480000e7/train/python

def odd_or_even(arr):
    if sum(arr)==0: 
        return 'even'
    
    elif sum(arr) % 2 == 0:
        return 'even'
    else:
        return 'odd'

# method 2

def oddOrEven(arr):
    return ('even', 'odd')[sum(arr) % 2]