// Question: https://www.codewars.com/kata/54e6533c92449cc251001667/javascript

// uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
// uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];

let uniqueInOrder = (iterable) => {
    if (typeof iterable == "string") {
      return iterable
        .toString()
        .replace(/[,]/gi, "")
        .split("")
        .filter((value, index, array) => {
          if ((index > 0 && array[index - 1] != value) || index == 0) {
            return value;
          }
        });
    } else {
      return iterable.filter((value, index, array) => {
        if ((index > 0 && array[index - 1] != value) || index == 0) {
          return value;
        }
      });
    }
};

// console.log(uniqueInOrder([1, 2, 2, 3, 3]));