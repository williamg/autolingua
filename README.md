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

The sound system is chosen such that there is minimal similarity betwene sounds.

### Vowels

`/i/, /e/, /a/, /u/, /o/, /ai/`

### Consonants

`/m/, /p/, /b/, /f/, /n/, /t/, /d/, /s/, /l/, /k/, /g/`

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
Sentence       -> Verb Sub
Sentence       -> Sub Verb
Sentence       -> Sub Verb Sub
Sub            -> <noun>
Sub            -> Desc Sub
Desc           -> <adjective>
Verb           -> <verb>
Verb           -> Time <verb>
Verb           -> Verb <adverb>
Time           -> labo
Time           -> laba
Time           -> labi
Time           -> labo Rel. Specifier
Time           -> labi Rel. Specifier
Time           -> Abs. Specifier
Time           -> Abs. Specifier
Abs. Specifier -> <year>, <month>, <day>, <hour>, etc.
Rel. Sepcifier -> epsi, ispe, <year>, <month>, <day>, <hour>, etc.
```

### General Conjugation Rules

- If a verb ends with a consonant, append `i` to turn it into a noun meaning
a human that does that verb. Append `o` to indicate a robot that does that verb.
If a verb ends with a vowel, append `si` or `so`, respectively.
- If a verb ends with a consonant, append `end` to turn it into an adjective
describing a noun that had that verb done to it. If a verb ends with a vowel,
just append `nd` for the same effect.
- If an adjective begins with a consonant, prepend `a` to turn it into an
adverb. If an adjective begins with a vowel, prepend `an` for the same effect.

### Posessive Case
To say `the <noun1> belonging to <noun2>`, you can say `<noun2> titi/toto <noun1>`
Depending on the case of `<noun1>`

### Pluralization
TODO

### Examples

Example words:
- oto - robot
- mit - human
- flam - kill
- stupid - imok (verb, as in "to be stupid" in English)
- quick - fandi

| English | Autolingua |
|:---|:---|
| The robot killed |  Oto labo flam
| The human was killed | Labo flam mit
| The robot is a killer | Oto laba flamo
| The robot killed the stupid human quickly |  Oto labo flam afandi imoki

## Vocabulary

Useful words:

| Autolingua | Definition |
|:---|:---|
|i |I, human|
|o|I, robot|
|ti|You, human|
|to|You, robot|

