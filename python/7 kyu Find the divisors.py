# https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/python

import math

def divisors(integer):
    divisors_list=[]
    for i in range(2, math.floor(integer/2)+1):
        if integer % i == 0:
            divisors_list.append(i)
    
    if len(divisors_list) == 0:
        return f'{integer} is prime'
    return divisors_list

print(divisors(4))