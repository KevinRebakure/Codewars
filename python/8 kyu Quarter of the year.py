# https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/python
def quarter_of(month):
    match month:
        case 1|2|3:
            return 1
        case 4|5|6:
            return 2
        case 7|8|9:
            return 3
        case 10|11|12:
            return 4

def using_range(month):
    # your code here
    if month in range(1, 4):
        return 1
    elif month in range(4, 7):
        return 2
    elif month in range(7, 10):
        return 3
    elif month in range(10, 13):
        return 4