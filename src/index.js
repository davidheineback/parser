import PrettyPrinter from './printer/PrettyPrinter.js'
import readline from 'readline'

const printer = new PrettyPrinter()

const readCommandLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

readCommandLine.question('Write a document as a string:', (document) => {
  printer.print(document)
  readCommandLine.close()
})

readCommandLine.on("close", () => process.exit(0))
