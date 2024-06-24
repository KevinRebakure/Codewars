async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/us")
    // console.log(response)
    const data = await response.json()
    if(!response.ok){
      throw new Error('not found')
    }
    // return data
  } catch (error) {
    console.log(`The error: ${error}`)
  }
}
fetchData().then((message)=>{console.log(message)})