# https://www.codewars.com/kata/534ea96ebb17181947000ada/train/python

def break_chocolate(n, m):
    breaks = (n * m) - 1
    return 0 if breaks < 0 else breaks 


def with_max(n, m):
    return max(n*m-1,0)