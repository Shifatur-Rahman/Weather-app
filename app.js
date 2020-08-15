const ui = new UI();
async function getCity() {
  const res = await fetch("https://ipapi.co/json");
  const newRes = await res.json();
  return newRes;
}

getCity().then((data) => {
  const Weather = new weather(data.city);
  Weather.getWeather()
    .then((data) => {
      ui.showAll(data);
    })
    .catch((error) => {
      console.log(error);
      ui.notFound();
    });   
});

document.getElementById("w-change-button").addEventListener("click", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  if (city === "") {
    alert("Please give a valid Location");
  } else {
    const Weather = new weather(city);
    Weather.getWeather()
      .then((data) => {
        ui.showAll(data);
      })
      .catch((error) => {
        console.log(error);
        ui.notFound();
      });
  }
});
