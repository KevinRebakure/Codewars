const myform = document.getElementById("form");

myform.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("myname").value;
  const mybody = document.getElementById("mybody").value;

  const data = {
    name: name,
    body: mybody,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error " + error));
});
