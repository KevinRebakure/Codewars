// declare fetchusertodos
// promise.all() to fetch the data
// used id to combine with todos
// the function will return a promise

async function fetchUserTodos() {
  const response = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/todos"),
  ]);

  const users = await response[0].json();
  const todos = await response[1].json();
  const newUsers = users.map((user, i) => {
    const todoarr = todos.filter((obj) => {
      if (obj.userId == i + 1) {
        return obj;
      }
    });
    return { ...user, todoarr };
  });
  return newUsers;
}

fetchUserTodos().then((response) => {
  console.log(response);
});
