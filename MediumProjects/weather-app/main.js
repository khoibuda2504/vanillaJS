const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const key = '3265874a2c77ae4a04bb96236a642d2f';

const url = (city) => `https:\\api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
        origin: "cors"
    });
    const respData = await resp.json();

    console.log(respData)
    addWeatherToPage(respData)
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');
    
    weather.innerHTML = `
        <h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>
        ${temp}°C
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>
        </h2>
        
        <small>${data.weather[0].main}</small>
    `

    main.innerHTML = ``;

    main.appendChild(weather)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value; 

    if(city) {
        getWeatherByLocation(city);
    }
})