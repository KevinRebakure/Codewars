# https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/python

def divisible_by(numbers, divisor):
    return [number for number in numbers if number % divisor == 0]