# https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/python

def number(bus_stops):
    entered = sum([bus_stop[0] for bus_stop in bus_stops])
    dropped_off = sum([bus_stop[1] for bus_stop in bus_stops])
    return entered - dropped_off

print(number([[10,0],[3,5],[5,8]]))


def smart(bus_stops):
    return sum([stop[0] - stop[1] for stop in bus_stops])