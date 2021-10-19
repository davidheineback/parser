import Document from './parser/Document.js'
import Readline from './parser/ReadLine.js'
import ExclamationSentence from './parser/sentence/ExclamationSentence.js'
import RegularSentence from './parser/sentence/RegularSentence.js'
import QuestionSentence from './parser/sentence/QuestionSentence.js'

export default {
  Document,
  Readline,
  SentenceTypes: {
    RegularSentence,
    ExclamationSentence,
    QuestionSentence
  }
}
