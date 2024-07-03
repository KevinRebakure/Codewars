const form = document.getElementById("form");
const query = document.getElementById("query");
const temperature = document.getElementById("temperature");
const country = document.getElementById("country");
const city = document.getElementById("city");
const flag = document.getElementById("flag");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  async function weatherData() {
    const countryResponse= await fetch(
      `https://restcountries.com/v3.1/name/${query.value}`,
    );
    const countryData = await countryResponse.json();
    const _country = countryData[0].altSpellings[1];
    const _city = countryData[0].capital[0];
    const _flag = countryData[0].flags.png;
    const _lat = parseInt(countryData[0].latlng[0]);
    const _lng = parseInt(countryData[0].latlng[1]);

    console.log(countryData);
    console.log(_lat, _lng, _country, _flag, _city);
    country.innerText = _country;
    city.innerText = _city;
    flag.src = _flag;

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${_lat}&longitude=${_lng}&current_weather=true`,
    );
    const weatherData = await weatherResponse.json()
    const _temperature = weatherData.current_weather.temperature; 
    temperature.innerText = _temperature

    console.log(weatherData)
    console.log(_temperature)

    query.value = '' 
  }

  weatherData();
});
