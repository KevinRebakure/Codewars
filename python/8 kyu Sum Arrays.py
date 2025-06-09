# https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/python
def sum_array(a):
    if(len(a) == 0): return 0
    return sum(a)


def method2(a):
    return sum(a) if a else 0