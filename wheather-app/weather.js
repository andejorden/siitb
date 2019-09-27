var city = "";
var currentWeather = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var weatherIcon = "http://openweathermap.org/img/w/"; // sufix .png

var map;

async function getData(form, event){
    event.preventDefault();
    city = document.querySelector("[name='cityName']").value;
    var current = await fetch(currentWeather + city);
    var forecast = await fetch(forecastWeather + city);
    var currentData = await current.json();
    var forecastData = await forecast.json();
    var frc = "";

    var str = `
    <h2>Starea vremii - ${currentData.name}</h2>
    <ul class="list-unstyled">
        <li><img src="${weatherIcon + currentData.weather[0].icon + ".png"}" alt="icon"></li>
        <li>Descriere: ${currentData.weather[0].description}</li>
        <li>Umiditate: ${currentData.main.humidity}</li>
        <li>Presiune: ${currentData.main.pressure}</li>
        <li>Temperatura Curenta: ${currentData.main.temp}</li>
        <li>Minima Zilei: ${currentData.main.temp_min}</li>
        <li>Maxima Zilei: ${currentData.main.temp_max}</li>
    </ul>`;
    
    var col = 0;

    for(var i = 0; i < forecastData.list.length; i++){

        var date = new Date(forecastData.list[i].dt_txt).toLocaleDateString('ro-RO', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        var time = new Date(forecastData.list[i].dt_txt).toLocaleTimeString('ro-RO', {
            hour: '2-digit',
            minute: '2-digit'
        });

         if(col % 8 === 0){

            frc += `<div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <details open>
                    <summary><h3>${date}</h3></summary>
                    <ul class="list-unstyled">
                        <li><img src="${weatherIcon + forecastData.list[i].weather[0].icon + ".png"}" alt="${forecastData.list[i].weather[0].icon}"></li>
                        <li>Ora: ${time}</li>
                        <li>Temperatura: ${forecastData.list[i].main.temp}</li>
                        <li>Descriere: ${forecastData.list[i].weather[0].description}</li>
                    </ul>
                </details>
            </div>`;
         }else{

            frc += `<div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <details open>
                    <ul class="list-unstyled">
                        <li><img src="${weatherIcon + forecastData.list[i].weather[0].icon + ".png"}" alt="${forecastData.list[i].weather[0].icon}"></li>
                        <li>Ora: ${time}</li>
                        <li>Temperatura: ${forecastData.list[i].main.temp}</li>
                        <li>Descriere: ${forecastData.list[i].weather[0].description}</li>
                    </ul>
                </details>
            </div>`;
         }
    }

    if(city === ""){
        return false;
    }else{
        map = new google.maps.Map(document.querySelector("#googleMap"), {
            center: {lat: currentData.coord.lat, lng: currentData.coord.lon},
            zoom: 12
        });
    }

    document.querySelector("#vremea").innerHTML = str;
    document.querySelector("#prognoza").innerHTML = frc;
}