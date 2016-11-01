import sys
import random

vowels = ["i", "e", "a", "u", "o", "ai"]
consonants = ["m", "p", "b", "f", "n", "t", "d", "s", "l", "k", "g"]
complex_onsets = ["fl", "sl", "pl", "kl"]
complex_codas = ["st", "nd"]
complex_codas.extend([x + "s" for x in consonants])
complex_codas.remove("ss")

num_syllables = 3
num_words = 30

if len(sys.argv) is 2:
    num_syllables = int(sys.argv[1])

for w in xrange(0, num_words):
    word = ""

    for s in xrange(0, num_syllables):

        onsets = list(consonants)
        onsets.extend([""]);
        codas = list(consonants)
        codas.extend([""]);


        if s is 0:
            onsets.extend(complex_onsets)

        if s is num_syllables - 1:
            codas.extend(complex_codas)

        word += random.choice(onsets)
        word += random.choice(vowels)
        word += random.choice(codas)

    print word







