# https://www.codewars.com/kata/56598d8076ee7a0759000087/train/python
import math
def calculate_tip(amount, rating):
    match rating.lower():
        case 'terrible':
            return math.ceil(amount * 0)
        case "poor":
            return math.ceil(amount * 0.05)
        case "good":
            return math.ceil(amount * 0.1)
        case "great":
            return math.ceil(amount * 0.15)
        case 'excellent':
            return math.ceil(amount * 0.2)
        case _:
            return "Rating not recognised"
        
        
def method2(amount, rating):
    rating = rating.lower()
    tip = {
        "terrible": 0,
        "poor": 0.05,
        "good": 0.1,
        "great": 0.15,
        "excellent": 0.2
    }.get(rating)
    if (tip == None):
        return "Rating not recognised"
    
    return int(math.ceil(amount * tip))