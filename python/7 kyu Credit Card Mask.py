# https://www.codewars.com/kata/5412509bd436bd33920011bc/train/python

# return masked string
def maskify(cc):
    return ('#'*(len(cc)-4))+cc[-4:]


def with_rjust(cc):
    return cc[-4:].rjust(len(cc), '#')

print(maskify("4556364607935616"))