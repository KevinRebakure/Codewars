# https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/python

def find_average(numbers):
    if(len(numbers)==0): return 0
    sum=0
    for number in numbers:
        sum+=number
    return sum/len(numbers)


def shorter(numbers):
    return sum(numbers)/len(numbers) if(numbers) else 0


def with_try_except(array):
    try:
        return sum(array) / len(array)
    except ZeroDivisionError:
        return 0