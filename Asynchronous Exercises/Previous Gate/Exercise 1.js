function repeatEvery(callback, timeout) {
  setInterval(() => {
    callback();
  }, timeout);
}

function x() {
  console.log("My name is Kevin Rebakure");
}

repeatEvery(x, 500);
