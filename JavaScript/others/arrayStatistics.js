const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function arrayStats(nums) {
  let sum = nums.reduce((total, value) => {
    return total + value;
  }, 0);
  const arrayStats = {
    sum: sum,
    average: (sum / nums.length).toFixed(2),
    min: Math.min(...nums),
    max: Math.max(...nums),
  };
  return arrayStats;
}

console.log(arrayStats(numbers));
