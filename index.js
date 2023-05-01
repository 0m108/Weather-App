const apiKey = "6b23adf00eb56284f9064eb955a20eca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBotton = document.querySelector(".search_btn");

let cityName = "";
async  function checkWeather(city)
{
    
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    let data = await response.json();
    if(response.status == 404)
    {
        document.querySelector(".error-mssg").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        document.querySelector(".error-mssg").style.display = "none";
        document.querySelector(".city").innerHTML = cityName;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
        if(data.weather[0].main == "Rain")
            document.querySelector(".weather-icon").src = "images/rain.png";
        else if(data.weather[0].main == "Clear")
            document.querySelector(".weather-icon").src = "images/clear.png";
        else if(data.weather[0].main == "Mist")
            document.querySelector(".weather-icon").src = "images/mist.png";
        else if(data.weather[0].main == "Haze")
            document.querySelector(".weather-icon").src = "images/humidity.png";   
        else if(data.weather[0].main == "Clouds")
            document.querySelector(".weather-icon").src = "images/clouds.png";
        else if(data.weather[0].main == "Drizzle")
            document.querySelector(".weather-icon").src = "images/drizzle.png";
        else if(data.weather[0].main == "Snow")
            document.querySelector(".weather-icon").src = "images/snow.png";
    
        document.querySelector(".weather").style.display = "block";
    }

}

searchBotton.addEventListener("click", ()=>{
    cityName = document.getElementById("search_bar").value;
    checkWeather(cityName);
});



