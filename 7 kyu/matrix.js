// Question: https://www.codewars.com/kata/581214d54624a8232100005f

// Working on a copy

function matrix(arr) {
  const newSample = arr.map((sub, i) => {
    const newSub = sub.map((num, j) => {
      if (i == j) num < 0 ? 0 : 1;
      return num;
    });
    return newSub;
  });
  return newSample;
}

// Mutate the array

function matrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == j) arr[i][j] < 0 ? (arr[i][j] = 0) : (arr[i][j] = 1);
    }
  }
  return arr;
}
