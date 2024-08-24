// Questions: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
    let x = []
    a.filter((num) => {
        if (!b.includes(num)) {
            x.push(num)
        }
    })
    return x
}

// console.log(arrayDiff([1,2,2,2,3], [2]))
