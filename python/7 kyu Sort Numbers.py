# https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/python

# method 1
def solution(nums):
    if not nums or len(nums) == 0: return []
    return sorted(nums)

print(solution([1,2,3,10,5]))

# method 2
def solution(nums):
    return sorted(nums or [])

# method 3
def solution(nums):
    try:
        return sorted(nums)
    except TypeError:
        return []
    

# method 4
def solution(nums):
    return sorted(nums) if nums else []