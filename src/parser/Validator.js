
/**
 * Creates a new Validator object used to validate sentences.
 *
 * @class
 */
export default class Validator {
  #validTypes
  #validLength

  constructor() {
    this.#validTypes = ['DOT', 'EXCLAMATION', 'QUESTION']
    this.#validLength = 1
  }

  isValidSentenceLength(length) {
    return length > this.#validLength
  }

  isValidEndToken(type) {
    return this.#validTypes.includes(type)
  }

  isInValidEndOfSentence(newTokenType, previousTokenType) {
    return newTokenType === 'END' && !this.isValidEndToken(previousTokenType)
  }
}