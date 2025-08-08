# https://www.codewars.com/kata/57f609022f4d534f05000024/train/python

import collections

def stray(arr):
    occurances = collections.Counter(arr)
    for number, occurance in occurances.items():
        if occurance == 1:
            return number

print(stray([1, 1, 1, 1, 1, 1, 2]))


def simple(arr):
    for x in set(arr):
        if arr.count(x) == 1: return x