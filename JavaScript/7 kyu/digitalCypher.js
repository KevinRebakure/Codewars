// Question: https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript
function encode(str, key) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  // Generate code
  const code = str.split("").map((value) => {
    return alphabets.indexOf(value) + 1;
  });
  // Generate the key sequence
  const sequencedKey = code.map((_, index) =>
    parseInt(key.toString()[index % key.toString().length])
  );
  // Mastered code
  return code.map((value, index) => value + sequencedKey[index]);
}