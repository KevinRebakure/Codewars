# https://www.codewars.com/kata/51c8991dee245d7ddf00000e

def reverse_words(s):
    string_list = s.split()
    string_list.reverse()
    return ' '.join(string_list)
print(reverse_words('The greatest victory is that which requires no battle'))


def with_new_reverse_method(string):
    return ' '.join(string.split()[::-1])