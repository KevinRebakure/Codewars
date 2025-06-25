# https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python

def digitize(n):
    string_number = str(n)
    digits=[int(digit) for digit in list(string_number)]
    digits.reverse()
    return digits

