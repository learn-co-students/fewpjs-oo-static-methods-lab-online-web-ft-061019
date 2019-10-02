class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(sentence) {
    let sentenceArr = sentence.split(" ")

    // iterate over the array and return a new array of capitalized values unless special small word 
    // also, regardless of the word, the first word should be capitalized

    let capitalArr = sentenceArr.map(word => {
      let lowerCaseWord = word.toLowerCase()
      switch(lowerCaseWord) {
        case "the":
        case "a":
        case "an":
        case "but":
        case "of":
        case "and":
        case "for":
        case "at":
        case "by":
        case "from":
          return lowerCaseWord
          break
        default:
          return this.capitalize(word)
      }
    })

    capitalArr[0] = this.capitalize(capitalArr[0])
    const titleizedSentence = capitalArr.join(" ")
    return titleizedSentence
  }

}