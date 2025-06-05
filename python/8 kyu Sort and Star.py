# https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/python

def two_sort(array):
    array.sort()
    return "***".join(list(array[0]))


def two_sort02(array):
    return '***'.join(min(array))

