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
S       -> lilo S
S       -> <conj> S S
S       -> <one-verb> NP
S       -> <two-verb> NP NP
S       -> <adverb> 2VP NP
S       -> <adverb> 1VP NP NP
S       -> <preposition> NP 1VP NP
S       -> <preposition> NP 2VP NP

1VP     -> <one-verb>
2VP     -> <two-verb>
1VP     -> <adverb> 1VP
2VP     -> <adverb> 2VP
1VP     -> <preposition> NP 1VP
2VP     -> <preposition> NP 2VP

NP      -> <noun>
NP      -> <article> <noun>
NP      -> <preposition> NP
NP      -> <adjective> NP
NP      -> ut NP NP

PP      -> <preposition> NP
```
