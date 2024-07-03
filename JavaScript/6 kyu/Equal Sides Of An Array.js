// Question: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript

// {1,2,3,4,3,2,1}: = 3
// {1,100,50,-51,1,1} = 1
// {20,10,-80,10,10,15,35} = 0

function findEvenIndex(arr) {
  return arr.findIndex((_,i,arr)=>{
    return (
      arr.slice(0, i).reduce((t, v) => v + t, 0) ==
      arr.slice(i+1).reduce((t, v) => v + t, 0)
    ); 
  })
}

// console.log(findEvenIndex([-1, 1, 0, -1, 1, 0, -1, 1, 0, 0]));

// Method 2

// function findEvenIndex(arr) {
//   let x = -1;
//   arr.forEach((value, index, array) => {
//     if (
//       array.slice(0, index).reduce((t, v) => t + v, 0) ==
//       array.slice(index + 1).reduce((t, v) => t + v, 0)
//     ) {
//       x = array.indexOf(value);
//     }
//   });
//   return