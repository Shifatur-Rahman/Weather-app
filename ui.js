class UI {
  constructor() {
    this.location = document.querySelector(".location");
    this.situation = document.querySelector(".situation");
    this.degree = document.querySelector(".degree");
    this.iconImg = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#humidity");
    this.pressure = document.querySelector("#pressure");
    this.wind = document.querySelector("#wind");
  }
  showAll(weather) {
    this.location.textContent = weather.name;
    this.situation.textContent = weather.weather[0].description;
    this.degree.textContent = Math.floor(weather.main.temp - 273.15) + " C";

    this.humidity.textContent = "Humidity : " + weather.main.humidity + "%";
    this.pressure.textContent = "Pressure : " + weather.main.pressure;
    this.wind.textContent = "Wind speed : " + weather.wind.speed + " km/h";
  }
}
