// Question: https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript

function positiveSum(arr) {
    return arr.filter((num)=>num>0).reduce((t,num)=>t+num,0)
}
