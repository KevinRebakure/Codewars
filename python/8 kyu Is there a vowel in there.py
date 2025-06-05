def is_vow(inp):
   vowels=['a','e','i','o','u']
   return [chr(number) if(chr(number)) in vowels else number for number in inp]