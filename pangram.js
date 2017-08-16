class Pangram {
  constructor (arg) {
    this.arg = arg
  }

  isPangram () {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    return alphabet.every(el => {
      return this.arg.toLowerCase().split('').includes(el)
    })
  }
}

module.exports = Pangram
