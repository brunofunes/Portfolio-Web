window.addEventListener("load", () => {
  //---------------------Api Clima---------------------

  // DOM Elements
  let $valorTemp = document.getElementById("valor-temp");
  let $iconoClima = document.getElementById("icono-clima");
  let $ubicacion = document.getElementById("ubicacion");

  //api openweathermap
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
              $iconoClima.src = "animated/day.svg";
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

  //---------------------Dark Mode---------------------
  // DOM Elements
  const $body = document.getElementById("body");
  const $btnMode = document.getElementById("mode");
  const $moon = document.getElementById("moon");
  const $sun = document.getElementById("sun");

  //Evento para cambiar la imagen sol/luna y aplicar estilos
  $btnMode.addEventListener("click", () => {
    if ($sun.classList.contains("oculto")) {
      $sun.classList.remove("oculto");
      $moon.classList.add("oculto");
      $body.classList.add("dark");
    } else {
      $moon.classList.remove("oculto");
      $sun.classList.add("oculto");
      $body.classList.remove("dark");
    }
  });

  //---------------------Lang Mode---------------------
  // DOM Elements
});
const $btnLang = document.getElementById("lenguaje-mode");
const $spanES = document.getElementById("es");
const $spanEN = document.getElementById("en");

if (localStorage.getItem("lenguaje") === null) {
  localStorage.setItem("lenguaje", "es");
}

// Funcion para cambiar el lenguaje
function changeLeng() {
  if (localStorage.getItem("lenguaje") === "es") {
    document.getElementById("greeting").textContent = "Hello!";
    document.getElementById("intro").innerHTML =
      "I'm <strong>Bruno</strong>, a self-taught student in ongoing training, with knowledge in various Backend areas, but specialized in <strong>Frontend</strong>. I'm excited to keep learning and collaborate on challenging projects.";
    document.getElementById("projectsTitle").textContent = "Projects";
    document.getElementById("project1Title").textContent = '"JS PRACTICE"';
    document.getElementById("project1Desc").textContent =
      "A website to challenge and improve my skills with various JavaScript exercises.";
    document.getElementById("comingSoon").textContent = "Coming soon...";
    document.getElementById("comingSoon1").textContent = "Coming soon...";
    document.getElementById("skillsTitle").textContent = "Skills";
    document.getElementById("englishTitle").textContent = "English";
    document.getElementById("englishLevel").textContent = "INTERMEDIATE";
    document.getElementById("portugueseTitle").textContent = "Portuguese";
    document.getElementById("portugueseLevel").textContent = "ADVANCED";
    document.getElementById("contactMe").textContent = "Contact me!";
    localStorage.setItem("lenguaje", "en");
    $spanES.classList.remove("big");
    $spanEN.classList.add("big");
  } else {
    document.getElementById("greeting").textContent = "Hola!";
    document.getElementById("intro").innerHTML =
      "Soy <strong>Bruno</strong> un estudiante autodidacta en constante capacitación, con conocimientos en diversas áreas de Backend, pero especializado en <strong>Frontend</strong>. Estoy entusiasmado por seguir aprendiendo y colaborar en proyectos desafiantes.";
    document.getElementById("projectsTitle").textContent = "Proyectos";
    document.getElementById("project1Title").textContent = '"JS PRÁCTICA"';
    document.getElementById("project1Desc").textContent =
      "Un sitio web para retar y mejorar mis habilidades con varios ejercicios en JavaScript.";
    document.getElementById("comingSoon").textContent = "Pronto...";
    document.getElementById("comingSoon1").textContent = "Pronto...";
    document.getElementById("skillsTitle").textContent = "Habilidades";
    document.getElementById("englishTitle").textContent = "Inglés";
    document.getElementById("englishLevel").textContent = "INTERMEDIO";
    document.getElementById("portugueseTitle").textContent = "Portugués";
    document.getElementById("portugueseLevel").textContent = "AVANZADO";
    document.getElementById("contactMe").textContent = "Contáctame!";
    localStorage.setItem("lenguaje", "es");
    $spanES.classList.add("big");
    $spanEN.classList.remove("big");
  }
}

$btnLang.addEventListener("click", () => {
  changeLeng();
});

window.onload = () => {
  if (localStorage.getItem("lenguaje") === "en") {
    document.getElementById("greeting").textContent = "Hello!";
    document.getElementById("intro").innerHTML =
      "I'm <strong>Bruno</strong>, a self-taught student in ongoing training, with knowledge in various Backend areas, but specialized in <strong>Frontend</strong>. I'm excited to keep learning and collaborate on challenging projects.";
    document.getElementById("projectsTitle").textContent = "Projects";
    document.getElementById("project1Title").textContent = '"JS PRACTICE"';
    document.getElementById("project1Desc").textContent =
      "A website to challenge and improve my skills with various JavaScript exercises.";
    document.getElementById("comingSoon").textContent = "Coming soon...";
    document.getElementById("comingSoon1").textContent = "Coming soon...";
    document.getElementById("skillsTitle").textContent = "Skills";
    document.getElementById("englishTitle").textContent = "English";
    document.getElementById("englishLevel").textContent = "INTERMEDIATE";
    document.getElementById("portugueseTitle").textContent = "Portuguese";
    document.getElementById("portugueseLevel").textContent = "ADVANCED";
    document.getElementById("contactMe").textContent = "Contact me!";
    $spanES.classList.remove("big");
    $spanEN.classList.add("big");
  } else {
    document.getElementById("greeting").textContent = "Hola!";
    document.getElementById("intro").innerHTML =
      "Soy <strong>Bruno</strong> un estudiante autodidacta en constante capacitación, con conocimientos en diversas áreas de Backend, pero especializado en <strong>Frontend</strong>. Estoy entusiasmado por seguir aprendiendo y colaborar en proyectos desafiantes.";
    document.getElementById("projectsTitle").textContent = "Proyectos";
    document.getElementById("project1Title").textContent = '"JS PRÁCTICA"';
    document.getElementById("project1Desc").textContent =
      "Un sitio web para retar y mejorar mis habilidades con varios ejercicios en JavaScript.";
    document.getElementById("comingSoon").textContent = "Pronto...";
    document.getElementById("comingSoon1").textContent = "Pronto...";
    document.getElementById("skillsTitle").textContent = "Habilidades";
    document.getElementById("englishTitle").textContent = "Inglés";
    document.getElementById("englishLevel").textContent = "INTERMEDIO";
    document.getElementById("portugueseTitle").textContent = "Portugués";
    document.getElementById("portugueseLevel").textContent = "AVANZADO";
    document.getElementById("contactMe").textContent = "Contáctame!";
    localStorage.setItem("lenguaje", "es");
    $spanES.classList.add("big");
    $spanEN.classList.remove("big");
  }
};
