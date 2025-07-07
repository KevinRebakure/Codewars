# https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/python
import math
def dating_range(age):
    if age <=14:
        min = math.floor(age - 0.10 * age)
        max = math.floor(age + 0.10 * age)
        return f'{min}-{max}'
    else: 
        min = math.floor((age/2)+7)
        max = math.floor(2*(age-7)) 
        return f'{min}-{max}'
