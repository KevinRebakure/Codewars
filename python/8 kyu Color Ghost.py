import random

class Ghost:
    def __init__(self):
        self.color = random.choice(["white", "yellow", "purple", "red"])


random_object = Ghost()

print(random_object.color)