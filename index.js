class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleFormatted = []
    let titleArray = sentence.split(" ")

    for (let i=0; i < titleArray.length; i++){
      if (i == 0){
        titleFormatted.push(this.capitalize(titleArray[i]))
      } else {
        if (exceptions.includes(titleArray[i])){
          titleFormatted.push(titleArray[i])
        } else {
          titleFormatted.push(this.capitalize(titleArray[i]))
        }
      }
    }
    return titleFormatted.join(" ")
  }
  //add static methods here
}