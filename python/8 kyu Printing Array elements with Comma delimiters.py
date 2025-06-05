# https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/python

def print_array(arr):
    changed_arr=[item if(isinstance(item, str)) else str(item) for item in arr]
    return ','.join(changed_arr)