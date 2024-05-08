// Question: https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  const y = text.toLowerCase().match(/[a-z]/g);
  return y != null ? y.map((char) => char.charCodeAt(0) - 96).join(" ") : "";
}
