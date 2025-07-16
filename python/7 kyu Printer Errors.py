# https://www.codewars.com/kata/56541980fa08ab47a0000040/train/python
def printer_error(s):
    # unicode of m = 109
    errors=0
    for character in s:
        if(ord(character.lower())>109): errors += 1
    return f'{errors}/{len(s)}'

def smart(s):
  return f"{sum(c > 'm' for c in s)}/{len(s)}"
print(ord('m'))