// Write a javascript function that changes the background 
// color of the body (HTML tag) every 3 seconds.

function nightClub() {
    const body = document.querySelector('body')
    setInterval(() => {
        body.style.backgroundColor = `rgb(${parseInt(
          Math.random() * 255
        )}, ${parseInt(Math.random() * 255)}, ${parseInt(
          Math.random() * 255
        )})`;
    }, 500);
}

// nightClub()