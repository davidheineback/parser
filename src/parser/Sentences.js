import RegularSentence from "./sentence/RegularSentence.js"
import ExclamationSentence from "./sentence/ExclamationSentence.js"
import QuestionSentence from "./sentence/QuestionSentence.js"
import SentenceFactory from "./sentence/SentenceFactory.js"

/**
 * Creates a new Sentences that extends Array.
 *
 * @class
 * @extends {Array}
 */
export default class Sentences extends Array {
  #sentenceFactory = new SentenceFactory()

  constructor() {
    super()
  }

  createSentence(sentenceObject) {
    return this.#sentenceFactory.createSentence(sentenceObject)
  }

  getAllRegularSentences() {
    return this.filter(sentence => sentence instanceof RegularSentence)
  }

  getAllExclamationSentences() {
    return this.filter(sentence => sentence instanceof ExclamationSentence)
  }

  getAllQuestionSentences() {
    return this.filter(sentence => sentence instanceof QuestionSentence)
  }
}
