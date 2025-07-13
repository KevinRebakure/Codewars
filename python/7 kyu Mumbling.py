# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python


def accum(st):
    result=[]
    list_st=list(st)
    for i in range(0, len(st)):
        result.append((list_st[i]*(i+1)).capitalize())
    return '-'.join(result)

print(accum('abcd'))