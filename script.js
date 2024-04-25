const apiKey = '30ea3e70e44eb023f0364b7be99d0077';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={30ea3e70e44eb023f0364b7be99d0077}&units=metric';

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function fetchWeather(city){
  const response = await fetch(apiUrl + city + `&appid={apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    if (data.weather[0].main == "Clouds"){
      weatherIcon.src = "assets/clouds.png"
    }
    else if (data.weather[0].main == "Clear"){
      weatherIcon.src = "assets/clear.png"
    }
    else if (data.weather[0].main == "Rain"){
      weatherIcon.src = "assets/rain.png"
    }
    else if (data.weather[0].main == "Drizzle"){
      weatherIcon.src = "assets/drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
      weatherIcon.src = "assets/mist.png"
    }
  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
  var data = await response.json();

  

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"; // duplicate line shift + alt + up/down
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; // duplicate line shift + alt + up/down
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; // duplicate line shift + alt + up/down

  if (data.weather[0].main == "Clouds"){
    weatherIcon.src = "assets/clouds.png"
  }
  else if (data.weather[0].main == "Clear"){
    weatherIcon.src = "assets/clear.png"
  }
  else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "assets/rain.png"
  }
  else if (data.weather[0].main == "Drizzle"){
    weatherIcon.src = "assets/drizzle.png"
  }
  else if (data.weather[0].main == "Mist"){
    weatherIcon.src = "assets/mist.png"
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click",()=>{
  fetchWeather(searchBox.value);
})