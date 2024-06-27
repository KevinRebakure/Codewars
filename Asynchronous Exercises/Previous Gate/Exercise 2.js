async function fetchData() {
  try {
    const response = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2"
    ).then((res) => res.json());

    const data = response.Results.filter(
      (manufacturer) => manufacturer.Country == "UNITED STATES (USA)"
    );

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
