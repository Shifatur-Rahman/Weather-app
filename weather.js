class weather {
  constructor(city) {
    this.city = city;
    this.appid = "577e5367fd190179a172941ba364f1e4";
  }
  //Fetch weather info from API
  async getWeather() {
    const weatherData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`
    );
    const newWeatherData = await weatherData.json();

    return newWeatherData;
  }
}
