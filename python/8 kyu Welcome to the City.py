# https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/python

def say_hello(name, city, state):
    names=' '.join(name)
    return f'Hello, {names}! Welcome to {city}, {state}!'

print(say_hello(['John', 'Smith'], 'Phoenix', 'Arizona'))