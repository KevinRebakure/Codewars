# https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python


def to_jaden_case(string):
    string_list = string.split()
    final_list = []
    for word in string_list:
        final_list.append(word.capitalize())
    return ' '.join(final_list)

def with_map(string):
    return ' '.join(map(lambda word: word.capitalize(), string.split()))

print(with_map("How can mirrors be real if our eyes aren't real"))