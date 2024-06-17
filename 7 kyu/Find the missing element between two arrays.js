// Question: https://www.codewars.com/kata/5a5915b8d39ec5aa18000030

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

function findMissing(arr1, arr2) {
  let x =
    arr1.length > arr2.length
      ? arr1.sort((a, b) => a - b)
      : arr2.sort((a, b) => a - b);
  let y =
    arr1.length < arr2.length
      ? arr1.sort((a, b) => a - b)
      : arr2.sort((a, b) => a - b);
  
  y.forEach((num)=>{
    x.splice(x.indexOf(num), 1)
  })
  return x[0]
}

// console.log(findMissing([1, 2, 2, 3], [1, 2, 3]));