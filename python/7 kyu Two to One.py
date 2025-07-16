# https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/python
def longest(a1, a2):
    a = list(sorted(set(list(a1))))
    b = list(sorted(set(list(a2))))
    return ''.join((a,b)[len(a)>=len(b)])

def the_actual_question(a1,a2):
    return ''.join(sorted(set(a1 + a2)))

    
print(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"))