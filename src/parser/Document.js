import tokenizer from '@david-heineback/tokenizer'
import SentenceGrammar from '../grammars/SentenceGrammar.js'
import Sentences from './Sentences.js'
import Validator from './Validator.js'


const { Tokenizer } = tokenizer

/**
 * Creates a new Document object.
 * 
 * @class
 */
export default class Document {
  #grammar = new SentenceGrammar()
  #sentences = new Sentences()
  #validator = new Validator()
  #currentSentence = []
  #tokenContainer

  constructor() {

  }

  /**
   * Takes a string as argument and parses it into sentences.
   *
   * @param {String} stringToParse - A string to parse into sentences.
   * @memberof Document
   */
  parse(stringToParse) {
    this.#tokenContainer = new Tokenizer(this.#grammar, stringToParse)
    while (this.#tokenContainer.getActiveToken().tokenValue !== 'END') {
      const token = this.#tokenContainer.getActiveToken()
      this.#currentSentence.push(token)
      if (this.#hasValidEnd()) {
        if (this.#isValidSentenceLength()) {
          const newSentence = this.#sentences.createSentence({ 'type': `${token.tokenType}`, 'sentence': this.#currentSentence })
          this.#sentences.push(newSentence)
          this.#currentSentence = []
        } else {
          throw new Error(`Syntax error: "${this.#errorSentence()}" is not a valid syntax for a sentence`)
        }
      }
      this.#tokenContainer.setActiveTokenToNext()
      this.#checkSyntaxError(token)
    }
  }

  #checkSyntaxError(token) {
    if (this.#validator.isInValidEndOfSentence(this.#tokenContainer.getActiveToken().tokenType, token.tokenType)) {
      throw new Error(`Syntax error: "${this.#errorSentence()}" doesn't have a valid end character`)
    }
  }

  #errorSentence() {
    const newSentence = this.#sentences.createSentence({ 'type': 'SYNTAX ERROR', 'sentence': this.#currentSentence })
    return newSentence.getSentenceAsString()
  }

  #hasValidEnd() {
    const currentToken = this.#currentSentence.slice(-1)[0]
    return this.#validator.isValidEndToken(currentToken.tokenType)
  }

  #isValidSentenceLength() {
    return this.#validator.isValidSentenceLength(this.#currentSentence.length)
  }

  getAllSentences() {
    return this.#sentences
  }

  getAllRegularSentences() {
    return this.#sentences.getAllRegularSentences()
  }

  getAllExclamationSentences() {
    return this.#sentences.getAllExclamationSentences()
  }

  getAllQuestionSentences() {
    return this.#sentences.getAllQuestionSentences()
  }
}