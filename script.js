const weather = {
    apiKey: "df93841f590b928e8628d7e3e8a7d7f5",
    fetchWeather: async function weatherAPI(city) {
        await fetch('https://api.openweathermap.org/data/2.5/weather?q='
        + city 
        + '&units=metric&appid='
        + this.apiKey, { mode: 'cors'})
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);

        document.querySelector('.city').textContent = 'Weather in ' + name;
        document.querySelector('.temp').textContent = temp + 'ºC';
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
        document.querySelector('.description').textContent = description;
        document.querySelector('.humidity').textContent = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind').textContent = 'Wind speed: ' + speed + 'Km/h';

        document.body.style.backgroundImage =  "url('https://source.unsplash.com/1920x1080/?" + name + "')";

        document.querySelector('.weather').classList.remove('loading');
    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
}

document.querySelector('.search button').addEventListener('click', function () {
    weather.search();
})

document.querySelector('.search-bar').addEventListener('keyup', function () {
    if (event.key == 'Enter'){
        weather.search()
    };
})

weather.fetchWeather('São Paulo');