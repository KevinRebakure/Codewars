# https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/python

def is_palindrome(s):
    no_spaces=s.lower().replace(' ', '')
    string_list=list(no_spaces)
    
    return ''.join(string_list) == ''.join(string_list[::-1])

def method_2(s):
    no_spaces=s.lower().replace(' ','')
    return no_spaces == no_spaces[::-1]