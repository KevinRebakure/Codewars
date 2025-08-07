# https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python
def reverse_words(text):
    reversed_string=text.split(' ')
    reversed_array=[word[::-1] for word in reversed_string]
    return ' '.join(reversed_array)


print(reverse_words("The quick brown fox jumps over the lazy dog."))