# Parser

### Description:
    A small package that works in node environment to help you parse a string and seperate them by sentence types.

### How to install:
    npm i @david-heineback/parser


### How to use:
#### Import:
    import parser from '@david-heineback/parser'
    const { Document, Readline, SentenceTypes } = parser

### __Document__
- Document is a class that has a method that parsers strings into sentences  

```javascript=
const document = new Document()
```
#### Document Methods:
- document.parse(string): Takes a string as argument and creates sentences objects. A string must contain at least one word and end with . ! or ? to count as a valid sentence. If Syntax Error is found a error will be thrown.

- document.getAllRegularSentences(): Filters the sentences and returns all sentences ending with "."  

- document.getAllExclamationSentences(): Filters the sentences and returns all sentences ending with "!"

- document.getAllQuestionSentences(): Filters the sentences and returns all sentences ending with "?"

#### Example
```javascript=

import parser from '@david-heineback/parser'

const { Document } = parser

// create a new Document
const document = new Document()

// parse a string
const stringToParse = "Regular. Question? Exclamation!"

// get all sentences 
document.getAllSentences()
expected: [ 
  RegularSentence { endCharacter: '.' },
  ExclamationSentence { endCharacter: '!' },
  QuestionSentence { endCharacter: '?' } 
  ]

// get all regular sentences
document.getAllRegularSentences()
expected: [ RegularSentence { endCharacter: '.' } ]

// get all exclamation sentences
document.getAllExclamationSentences()
expected: [ ExclamationSentence { endCharacter: '!' } ]

// get all question sentences
document.getAllQuestionSentences()
expected: [ QuestionSentence { endCharacter: '?' } ]
```

The sentences then has methods:

- Sentence.getSentenceAsString(): Returns the complete sentences as a string with the correct end character  
- Sentence.getSentenceAsObject(): Returns the sentences as an Array with a type and each word and the end character as seperate objects.

#### Example
```javascript=

import parser from '@david-heineback/parser'

const { Document } = parser

// create a new Document
const document = new Document()

// parse a string
document.parse('Hello World    .   ')

const sentences = document.getAllSentences()

sentences[0].getSentenceAsString()
expected: 'Hello World.'  

sentences[0].getSentenceAsObject()
expected: 
    {
      type: 'REGULAR',
      sentence: [
        { tokenType: 'WORD', regex: /^[\w|åäöÅÄÖ]+/g, tokenValue: 'Hello' },
        { tokenType: 'WORD', regex: /^[\w|åäöÅÄÖ]+/g, tokenValue: 'World' },
        { tokenType: 'DOT', regex: /^\./g, tokenValue: '.' }
      ]
    }

```

### __Readline__
- Readline is a class that uses nodes readline module to read the command line

```javascript=
const readline = new Readline()
```

#### Readline Methods:
- await reader.getDocument(): A asyncronous function that will prompt the user to type a string in the terminal and then returns the string.


### __SentenceTypes__
- SentencesTypes contains the provided sentences types with corresponding end character.
- RegularSentence: endCharacter: '.'
- ExclamationSentence: endCharacter: '!'
- QuestionSentence: endCharacter: '?'


