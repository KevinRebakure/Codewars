# https://www.codewars.com/kata/566dc05f855b36a031000048/train/python

def add_extra(list_of_numbers):
    copy_list = list_of_numbers[:]
    copy_list.append(1)
    return copy_list

print(add_extra([1,2]))