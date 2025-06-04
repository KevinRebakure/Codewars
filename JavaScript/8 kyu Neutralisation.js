// https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/javascript
function neutralise(s1, s2) {
    return s1
        .split('')
        .map((character, i) => (character === s2[i] ? character : 0))
        .join('');
}

console.log(neutralise('--++--', '++--++'));
