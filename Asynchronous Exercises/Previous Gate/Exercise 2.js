async function fetchData() {
  const response = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2"
  );
  const data = await response.json();
  return data;
}

fetchData().then((message) => {
  console.log(
    message.Results.filter((manufacturer) => {
      if (manufacturer.Country == "UNITED STATES (USA)") {
        return manufacturer;
      }
    })
  );
});
