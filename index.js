
class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string){
    let newString = " ";
    let exceptionWords = ['a', 'an', 'and','at','but','by','for','from','of','the'];
    let modifiedString = string.split('');

    modifiedString.forEach(word => {
      if (modifiedString.indexOf(word) === 0){
        newString += word.charAt(0).toUpperCase() + word.slice(1)
      } else if (exceptionWords.includes(word)){
        newString += ` ${word}`
      } else {
        newString += ` ${word.charAt(0).toUpperCase() + word.slice(1)}`
      }
    })
    return newString
  }
}