# https://www.codewars.com/kata/57a386117cb1f31890000039/train/python

def parse_float(string):
    try:
        return float(string)
    except:
        return None
    

print(parse_float([1]))