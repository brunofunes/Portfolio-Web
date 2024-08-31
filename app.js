window.addEventListener("load", () => {
  // DOM Elements

  let $valorTemp = document.getElementById("valor-temp");
  let $iconoClima = document.getElementById("icono-clima");
  let $ubicacion = document.getElementById("ubicacion");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((poss) => {
      let lat = poss.coords.latitude;
      let lon = poss.coords.longitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d080b713de9d392de587fd7ddbb47b64`;

      //console.log(url);

      fetch(url)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          //Obtener temperatura
          let temp = Math.round(data.main.temp);
          $valorTemp.textContent = `${temp} °C`;
          //Obtener Nombre de ciudad
          let name = data.name;
          $ubicacion.textContent = name;
          //Obtener icon animado
          switch (data.weather[0].main) {
            case "Clear":
              $iconoClima.src = "animated/day.scg";
              break;
            case "Clouds":
              $iconoClima.src = "animated/cloudy.svg";
              break;
            case "Snow":
              $iconoClima.src = "animated/snowy-6.svg";
              break;
            case "Rain":
              $iconoClima.src = "animated/rainy-6.svg";
              break;
            case "Drizzle":
              $iconoClima.src = "animated/rainy-4.svg";
              break;
            case "Thunderstorm":
              $iconoClima.src = "animated/thunder.svg";
              break;
            case "Mist":
              $iconoClima.src = "animated/cloudy-day-3.svg";
              break;
            default:
              $iconoClima.src = "animated/day.svg";
          }
          //console.log(data);
        })
        .catch((err) => {
          console.log("Error");
        });
    });
  }
});
