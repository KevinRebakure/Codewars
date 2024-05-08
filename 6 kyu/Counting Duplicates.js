// Question: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript

function duplicateCount(text) {
    const stats = {}
    const textArr = text.toLowerCase().split("");
    const y = [...new Set(textArr)]
    y.forEach((char)=>{
        let count = 0
        for(let z of textArr) {if(z==char) count++}
        stats[char]= count
    })
    return Object.values(stats).reduce((total, c)=>{
        if(c > 1) total++
        return total
    }, 0)
}