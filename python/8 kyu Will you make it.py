# https://www.codewars.com/kata/5861d28f124b35723e00005e/train/python

def zero_fuel(distance_to_pump, mpg, fuel_left):
    return [False, True][True if(distance_to_pump / mpg <= fuel_left) else False]


with_lambda = lambda distance, mpg, gallons: mpg * gallons >= distance