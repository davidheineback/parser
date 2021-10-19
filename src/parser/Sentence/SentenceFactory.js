import ExclamationSentence from "./ExclamationSentence.js"
import QuestionSentence from "./QuestionSentence.js"
import RegularSentence from "./RegularSentence.js"
import Sentence from "./Sentence.js"

/**
 * Create a SentenceFactory object that is responsible for creating sentences.
 *
 * @class SentenceFactory
 */
export default class SentenceFactory {

  constructor() {
  }

  createSentence(sentence) {
    switch (sentence.type) {
      case 'DOT':
        return new RegularSentence(sentence)
      case 'EXCLAMATION':
        return new ExclamationSentence(sentence)
      case 'QUESTION':
        return new QuestionSentence(sentence)
      default:
        return new Sentence(sentence)
    }
  }
}