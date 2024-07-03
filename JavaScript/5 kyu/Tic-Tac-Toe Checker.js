// Question: https://www.codewars.com/kata/525caa5c1bf619d28c000335

// A custom polyfill for flat to work. (For some reasons the running environment didn't support flat)

if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth = 1) {
    return this.reduce((flat, toFlatten) => {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  };
}

const x = [
  [2, 1, 1],
  [0, 1, 1],
  [2, 2, 2],
];

function isSolved(board) {
  // board horizontal solutions
  const horizontal = board.map((v) => v.toString());
  
  // vertical solutions

  const vertical = board.map((_, index) => {
    const y = [];
    for (let i = 0; i < 3; i++) {
      y.push(board[i][index]);
    }
    return y.toString();
  });

  // cross solutions

  const cross = [];

  const y = [];
  board.forEach((_, i) => {
    y.push(board[i][i]);
  });
  const z = [];
  board.forEach((_, i) => {
    z.push(board[i][3 - (i + 1)]);
  });
  cross.push(y.toString(), z.toString());

  // game results

 if (
    horizontal.includes("1,1,1") ||
    vertical.includes("1,1,1") ||
    cross.includes("1,1,1")
  ) {
    return 1;
  } else if (
    horizontal.includes("2,2,2") ||
    vertical.includes("2,2,2") ||
    cross.includes("2,2,2")
  ) {
    return 2;
  } else if (
    !horizontal.includes("2,2,2") &&
    !vertical.includes("2,2,2") &&
    !cross.includes("2,2,2") &&
    !horizontal.includes("1,1,1") &&
    !vertical.includes("1,1,1") &&
    !cross.includes("1,1,1") &&
    !board.flat().includes(0)
  ) {
    return 0;
  } else if (board.flat().includes(0)) {
    return -1;
  }
}

console.log(isSolved(x));