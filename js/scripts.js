// business logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
};
function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
};


function wordRemoving(text) {
  const textArray = text.split(" ");
  let resultArray = [];
  textArray.forEach(function (word) {
    if (word.toLowerCase().trim() === "zoinks") {
      console.log(word);
    } else {
      resultArray.push(word);
    }
  })
  return resultArray.join(" ");
};