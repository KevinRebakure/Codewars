// Question: https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    return str.replace(/[_-]/g, ' ').split(' ').map((word, index)=>{
        if (index>0) {
            return `${word[0].toUpperCase()}${word.slice(1)}`            
        }
        return word
    }).join('')
}


// console.log(toCamelCase("the-stealth-warrior"));