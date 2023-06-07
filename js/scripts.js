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
    for (let i =0; i < textArray.length;i++)
      if (textArray[i].toLowerCase !== "zoinks" && textArray[i] !== "muppeteer" && textArray[i] !== "") {
        resultArray.push(textArray[i]);
      }   
      let finalResult = resultArray.toString();
      return finalResult;
};

/* textArray.forEach(function(element) {
      if (element === "zoinks") {
        textArray.pop(element);
    } else {
      resultArray.push(element);
    }
  }); */