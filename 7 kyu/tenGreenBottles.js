// Question: https://www.codewars.com/kata/5838e2978bbc04b7cd000008/javascript

function tenGreenBottles(n) {
  const numbers = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];

  let poem = "";

  for (let i = n; i > 0; i--) {
    if (i != 1 && i != 2) {
      poem += `${numbers[i - 1]} green bottles hanging on the wall,\n\
${numbers[i - 1]} green bottles hanging on the wall,\n\
And if one green bottle should accidentally fall,\n\
There\'ll be ${numbers[
        i - 2
      ].toLowerCase()} green bottles hanging on the wall.\n\n`;
    }

    if (i == 2) {
      poem += `${numbers[i - 1]} green bottles hanging on the wall,\n\
${numbers[i - 1]} green bottles hanging on the wall,\n\
And if one green bottle should accidentally fall,\n\
There\'ll be one green bottle hanging on the wall.\n\n`;
    }

    if (i == 1) {
      poem += `${numbers[i - 1]} green bottle hanging on the wall,\n\
${numbers[i - 1]} green bottle hanging on the wall,\n\
If that one green bottle should accidentally fall,\n\
There\'ll be no green bottles hanging on the wall.\n`;
    }
  }

  // console.log(poem);
  return poem;
}

tenGreenBottles(2);
