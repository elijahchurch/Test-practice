// business logic

function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(element) {
        if (!Number(element)) {
            wordCount++; 
        }        
    });
    return wordCount;
};
function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++
      }
    });
    return wordCount;
  };

  //This function doesn't work right now
  function wordRemoving (text) {
    const textArray = text.split(" ");
    let resultArray = [];
    textArray.forEach(function(element) {
      if (element === "zoinks") {
        textArray.splice(element);
    } else {
      resultArray.push(element);
    }
  });
      const finalResult = resultArray.toString();
      return finalResult;
};