// let text = 'kevinrebakure'

function duplicateEncode(word) {
  const words = word.split("").map((c) => {
    return c.toLowerCase();
  });
  const chars = [...new Set(words)];
  const occurances = chars.map((char) => {
    let count = 0;
    words.forEach((word) => {
      if (word == char) count++;
    });
    return { [char]: count };
  });

  let encoded = "";
  words.forEach((word) => {
    occurances.forEach((occurance) => {
      if (Object.keys(occurance)[0] == word) {
        if (Object.values(occurance)[0] == 1) {
          encoded += "(";
        } else if (Object.values(occurance)[0] > 1) {
          encoded += ")";
        }
      }
    });
  });

  return encoded;
}

// console.log(duplicateEncode(text))
