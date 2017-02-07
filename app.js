function lengths(arrayOfStrings) {
  wordCount = [];
  for(i = 0; i < arrayOfStrings.length; i++) {
    var word = arrayOfStrings[i];
    wordCount.push(word.length);
  }
  return wordCount;
}



function transmogrifier(x, y, z) {
  var product = (x * y);
  transmogrified = Math.pow(product, z);
  return transmogrified;
}

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);



function toonify(accent, sentence) {
  if(accent === "daffy") {
    var original = /s/gi;
    var newSentence = sentence.replace(original, "th");
    return newSentence
  }
  else if(accent === "elmer") {
    var original = /r/gi;
    var newSentence = sentence.replace(original, "w");
    return newSentence
  }
  else {
    return sentence;
  }
}



function wordReverse(string) {
  var newString = [];

  var splitString = string.split(' ');
  var reversedString = splitString.reverse();

  for(i = 0; i < reversedString.length; i++) {
    newString.push(reversedString[i]);
  }
  return newString.join(' ');
}



function letterReverse(string) {
  var splitString = string.split('');
  newString = splitString.reverse().join('');
  newString = newString.split(' ').reverse().join(' ');
  return newString;
}



function repMaster(input, chosenFunction) {
  return chosenFunction(input) + " proves that I am the rep MASTER!";
}
