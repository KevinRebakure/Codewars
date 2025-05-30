# https://www.codewars.com/kata/5748a883eb737cab000022a6/train/python
def cannons_ready(gunners):
    gunners_answers = list(gunners.values())
    print(type(gunners_answers))
    for value in gunners_answers:
        if(value == 'aye'):
            aye_count=gunners_answers.count(value)
            if(aye_count == len(gunners)):
                return 'Fire!'
        if(value == 'nay'):
            if(gunners_answers.count(value) >= 1):
                return 'Shiver me timbers!'


# Method 1
def myFunction(gunners):
    for gunner in gunners:
        if(gunners[gunner] == 'nay'):
            return 'Shiver me timbers!'
    return 'Fire!'
    
        
print(cannons_ready({'Mike':'nay','Joe':'nay','Johnson':'nay','Peter':'nay'}))