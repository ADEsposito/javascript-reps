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
