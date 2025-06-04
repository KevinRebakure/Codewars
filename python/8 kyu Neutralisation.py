# https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/python
def neutralise(s1, s2):
    if(len(s1) != len(s2)): return None 
    neutral=''
    for index in range(len(s1)):
      if s1[index] == '+' and s2[index] == '+':
          neutral+= '+'
      if s1[index] == '-' and s2[index] == '-':
          neutral+= '-'
      if s1[index] == '+' and s2[index] == '-':
          neutral+= '0'
      if s1[index] == '-' and s2[index] == '+':
          neutral+= '0'
    return neutral


def neutralise2(s1, s2):
     if(len(s1) != len(s2)): return None 
     return ''.join([a if a == b else '0' for a,b in zip(s1, s2)])
 
 
neutralise3=lambda s1,s2: ''.join([a if a==b else '0'  for a,b in zip(s1, s2)])
 
print(neutralise2("--++--", "++--++"))
#  test.assert_equals(neutralise("--++--", "++--++"), "000000")
#         test.assert_equals(neutralise("-+-+-+", "-+-+-+"), "-+-+-+")
#         test.assert_equals(utralise("-++-", "-+-+"), "-+00")
#         test.assert_equals(neutralise("--++", "++++"), "00++")
#         test.assert_equals(neutralise("+++--+---", "++----++-"), "++0--000-")
#         test.assert_equals(neutralise("-----", "-----"), "-----")
#         test.assert_equals(neutralise("-+", "++"), "0+")
#         test.assert_equals(neutralise("--", "-+"), "-0")
#         test.assert_equals(neutralise("-++", "+--"), "000")
#         test.assert_equals(neutralise("++-++--++-", "-+++-++-++"), "0+0+0000+0")
#         test.assert_equals(neutralise("-++-+-++-", "+-++++---"), "00+0+000-")
#         test.assert_equals(neutralise("---++-+--", "-+++--++-"), "-00+0-+0-")
#         test.assert_equals(neutralise("+-----+++-", "--+-+-++--"), "0-0-0-++0-")
#         test.assert_equals(neutralise("+-----+-", "---++-++"), "0--00-+0")
#         test.assert_equals(neutralise("-+--+-+---", "-+--+-+-+-"), "-+--+-+-0-")
#         test.assert_equals(neutralise("+-+", "-++"), "00+")
#         test.assert_equals(neutralise("-++", "-+-"), "-+0")
#         test.assert_equals(neutralise("---+", "-+++"), "-00+")
#         test.assert_equals(neutralise("+--", "+--"), "+--")
#         test.assert_equals(neutralise("--+++-+-", "+++++---"), "00+++-0-")