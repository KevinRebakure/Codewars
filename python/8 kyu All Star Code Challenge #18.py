# https://www.codewars.com/kata/5865918c6b569962950002a1

def str_count(strng, letter):
    count=0
    for character in strng:
        if character == letter:
            count += 1
    return count


def with_count_method(strng, letter):
    return strng.count(letter)