import readline from 'readline'

/**
 * Creates a new Readline object.
 * 
 * @class
 */
export default class Readline {
  #document

  constructor() {
    this.#document = this.#setDocument()
  }

  async #setDocument() {
    const answer = await this.#getUserInput()
    return answer
  }

  #getUserInput() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    return new Promise(resolve => {
      rl.question('Write a document as a string: ', document => {
        rl.close()
        return resolve(document)
      })
    })
  }

  getDocument() {
    return this.#document
  }

}


