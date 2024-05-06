const x = [
  [2, 2, 2],
  [1, 1, 2],
  [2, 1, 1],
];

function isSolved(board) {
  // board horizontal solutions
  // vertical solutions

  const board1 = board.map((_, index) => {
    const y = [];
    for (let i = 0; i < 3; i++) {
      y.push(board[i][index]);
    }
    return y;
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
  cross.push(y, z);

  // game results

  if (
    board.includes([1, 1, 1]) ||
    board1.includes([1, 1, 1]) ||
    cross.includes([1, 1, 1])
  ) {
    return 1;
  } else if (
    board.includes([2, 2, 2]) ||
    board1.includes([2, 2, 2]) ||
    cross.includes([2, 2, 2])
  ) {
    return 2;
  } else if (board.flat().includes(0)) {
    return -1;
  } else if (
    !board.includes([2, 2, 2]) &&
    !board1.includes([2, 2, 2]) &&
    !cross.includes([2, 2, 2]) &&
    !board.includes([1, 1, 1]) &&
    !board1.includes([1, 1, 1]) &&
    !cross.includes([1, 1, 1]) &&
    !board.flat().includes(0)
  ) {
    return -1;
  }
}

console.log(isSolved(x));