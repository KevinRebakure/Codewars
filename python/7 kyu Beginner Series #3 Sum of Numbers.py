# https://www.codewars.com/kata/55f2b110f61eb01779000053/train/python

def get_sum(a,b):
    return sum(list(range((min(a,b)), (max(a,b))+1)))    

print(get_sum(1,1))