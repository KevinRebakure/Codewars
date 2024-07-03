function rpsls(pl1, pl2) {
  const combinations = {
    spock: ["scissors", "rock"],
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["lizard", "scissors"],
    lizard: ["spock", "paper"],
  };

  const x = Object.keys(combinations);
  if (x.includes(pl1) && combinations[x[x.indexOf(pl1)]].includes(pl2)) {
    return "Player 1 Won!";
  } else if (x.includes(pl2) && combinations[x[x.indexOf(pl2)]].includes(pl1)) {
    return "Player 2 Won!";
  } else if (pl1 == pl2) {
    return "Draw!";
  }
}