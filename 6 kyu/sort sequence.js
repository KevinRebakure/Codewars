const x = [3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 2, 2, 2, 0];
function sortSequence(x) {
  const y = [];
  let previous = -1;
  x.forEach((n, index) => {
    if (n == 0) {
      const z = x.slice(previous + 1, index + 1).sort((a, b) => a - b);
      if (z[0] == 0) {
        y.push(z.slice(1, z.length).concat(0));
      }
      previous = index;
    }
  });
  return y
    .sort((a, b) => {
      const a1 = a.reduce((total, v) => total + v, 0);
      const b1 = b.reduce((total, v) => total + v, 0);
      return a1 - b1;
    })
    .flat();
}