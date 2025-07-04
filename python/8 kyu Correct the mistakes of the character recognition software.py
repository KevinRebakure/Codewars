# https://www.codewars.com/kata/577bd026df78c19bca0002c0

def correct(s):
    corrected_string=''
    corrections={
        '5': 'S',
        '0': 'O',
        '1': 'I'
    }
    print(corrections.keys())
    for character in s:
        if(character in corrections.keys()):
            corrected_string += corrections.get(character)
        else:
            corrected_string+=character
    return corrected_string


def correct_automatic(s):
    mapping = s.maketrans({
        '5': 'S',
        '0': 'O',
        '1': 'I'
    })
    
    return s.translate(mapping)

print(correct("DUBL1N"))
    