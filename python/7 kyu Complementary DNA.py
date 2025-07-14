# https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python

def DNA_strand(dna):
    translation_table= dna.maketrans('ATGC', 'TACG')
    return dna.translate(translation_table)

print(DNA_strand("AAAA"))