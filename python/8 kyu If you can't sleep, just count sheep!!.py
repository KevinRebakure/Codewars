# https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

def count_sheep(n):
    count=[]
    for number in range(1, n+1):
        count.append( f'{number} sheep...')
    return ''.join(count)

print(count_sheep(5))