async function getCity() {
  const res = await fetch("https://ipapi.co/json");
  const newRes = await res.json();
  return newRes;
}

getCity().then((data) => {
  const Weather = new weather(data.city);
  console.log(data.city);
  Weather.getWeather().then((data) => console.log(data));
});
