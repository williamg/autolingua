# Autolingua

## Overview

This repo documents my progress on the creation of a language as part of my final
project for 80-284. My language is constructed with the intention of being used
in a fictional futuristic setting in which humans and sentient robots coexist.
The language is meant to be spoken by both humans and robots alike which imposes
the following constraints:
- All sounds must be distinctly human (as a caveat, I'm not building an auxlang,
nor am I fighting a distinct english bias)
- The grammar should be easily parseable by humans and computers alike
- The writing system should be simplistic, easy to read, and easy for a robot
less dexterous than a human to write

## Sound System

The sound system is chosen such that there is minimal similarity between sounds.

| Class | Sound |
|:---:|:--|
| Vowels | `/i/, /e/, /a/, /u/, /o/, /ai/` |
| Consonants | `/m/, /p/, /b/, /f/, /n/, /t/, /d/, /s/, /l/, /k/, /g/` |

## Phonology

### Syllables

The syllable structure is (C)(C)V(C)(C). If there is only one consonant in the coda
and/or onset, then it can be any consonant.

*Complex Onsets*: `/fl/, /sl/, /pl/, /kl/`

*Complex Codas*: `/st/, /nd/, /\*s/ (where \* is any consonant)`

### Stress

Always stress the first syllable

## Grammar

To aid parsability by computers, the grammar is context free:

```
S'   -> lilo S'
S'   -> S
S    -> <conj> S S
S    -> 1VP NP
S    -> 2VP NP NP
S    -> NP
S    -> VP

1VP -> ost 1VP
1VP  -> <one-verb>
1VP  -> <adverb> 1VP
1VP  -> <preposition> NP 1VP
1VP  -> 1VL

2VP  -> ost 2VP
2VP  -> <two-verb>
2VP  -> <adverb> 2VP
2VP  -> PP 2VP
2VP  -> 2VL

NP   -> plai S
NP   -> <noun>
NP   -> <article> <noun>
NP   -> PP NP
NP   -> <adjective> NP
NP   -> ut NP NP
NP   -> NL

LE   -> ul
1VL  -> le 1VLI LE    (For a list of things that are the same)
1VL  -> lu 1VLI LE    (For a list of things that are different)
1VLI -> la 1VP 1VLI
1VLI -> la 1VP

2VL  -> le 2VLI LE
2VL  -> lu 2VLI LE
2VLI -> la 2VP 2VLI
2VLI -> la 2VP

NL   -> le NPI LE
NL   -> lu NPI LE
NLI  -> la NP NPI
NLI  -> la NP
```
