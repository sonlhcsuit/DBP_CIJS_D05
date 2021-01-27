export function searchCity(cityName) {
    const apiKey = "4d8fb5b93d4af21d66a2948710284366";
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
  }