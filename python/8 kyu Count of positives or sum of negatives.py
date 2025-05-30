# https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python

def count_positives_sum_negatives(arr):
    if (not isinstance(arr, list)): return []
    if (len(arr) == 0): return []
    positive_numbers=[]
    negative_numbers=[]
    for number in arr:
        if(number > 0): 
            positive_numbers.append(number)
        elif(number < 0):
            negative_numbers.append(number)
    sum_of_negative_numbers=0
    for number in negative_numbers:
        sum_of_negative_numbers+=number
        
    return [len(positive_numbers), sum_of_negative_numbers]

# Method 2

def myFunction(arr):
    if (not arr): return []
    count_of_positive_numbers= len([number for number in arr if number > 0])
    sum_of_negative_numbers=0
    negatives=[number for number in arr if number < 0]
    for number in negatives:
        sum_of_negative_numbers+=number
    return [count_of_positive_numbers, sum_of_negative_numbers]

# Method 3       


def myFunction01(arr):
    if(not arr): return []
    count_of_positive_numbers=sum([1 for number in arr if number > 0])                          
    sum_of_negative_numbers=sum([number for number in arr if number < 0])
    return [count_of_positive_numbers, sum_of_negative_numbers]                          

print(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))