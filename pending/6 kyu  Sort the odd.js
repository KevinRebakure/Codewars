// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
//   const data = array.reduce((arr, num, index) => {
//     if (num % 2 != 0) {
//       arr.push([num, index]);
//     }
//     return arr;
//   }, []);

  const oddNumbers = array.filter((num) => {
    if (num % 2 != 0) {
      return num;
    }
  }).sort((a, b)=>a-b);

  const indices = oddNumbers.map((num)=>{
    return array.indexOf(num)
  })

  return array.map((num, i)=>{
    if (oddNumbers.includes(num)) {
        return oddNumbers[oddNumbers.indexOf(num)]
    }
    return num
  })
}

console.log(sortArray([5, 8, 6, 3, 4, 1]));

// Question: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
//   const data = array.reduce((arr, num, index) => {
//     if (num % 2 != 0) {
//       arr.push([num, index]);
//     }
//     return arr;
//   }, []);

  const oddNumbers = array.filter((num) => {
    if (num % 2 != 0) {
      return num;
    }
  }).sort((a, b)=>a-b);

  const indices = oddNumbers.map((num)=>{
    return array.indexOf(num)
  })

  return array.map((num, i)=>{
    if (oddNumbers.includes(num)) {
        return oddNumbers[oddNumbers.indexOf(num)]
    }
    return num
  })
}

console.log(sortArray([5, 8, 6, 3, 4, 1]));
