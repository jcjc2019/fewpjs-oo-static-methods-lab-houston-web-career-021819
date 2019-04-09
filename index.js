class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    const regex = /[^'A-Za-z0-9','\-', ' ', ''']/g
    return string.replace(regex, '');
  }

  static titleize(sentence){
    const array = sentence.toLowerCase().split(" ");
    const stopWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let begin = array[0].charAt(0).toUpperCase() + array[0].slice(1);
    let subArray = array.slice(1)
    for(let i = 0; i < subArray.length; i++){
      if(!stopWords.includes(subArray[i])){
       subArray[i] = subArray[i].charAt(0).toUpperCase() + subArray[i].slice(1)
      }
    }
    return `${begin} ` + subArray.join(' ')
  }
}