// Question: https://www.codewars.com/kata/5881460c780e0dd207000084/train/javascript

// String 1: "abcdefg"
// String 2: "abcqetg"

function spot(s1, s2) {
  return s1.split('').reduce((arr, char, i)=>{
    if (char != s2[i]) {
        arr.push(i)
    }
    return arr
  }, [])
}

// console.log(spot("abcdefg", "abcqetg"));