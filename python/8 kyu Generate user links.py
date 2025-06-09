import urllib.parse
def generate_link(user):
    url="http://www.codewars.com/users/"
    return url + urllib.parse.quote(user)