let form = document.querySelector('form')
let inp = document.querySelector('input')
let img = document.querySelector('.img')
let weatherInfo = document.querySelector('.weatherInfo')


const apiKey = "569c3cb12261b8c465649d0f5aa9ab14"


form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=${apiKey}`)
            .then((response) => {
                return response.json();
            })
            .then((weather) => {
                document.querySelector('#city').innerHTML = weather.name;
                document.querySelector('#temp').innerHTML = weather.main.temp;
                document.querySelector('#weather').innerHTML = weather.weather[0].main;
                document.querySelector('#weather').innerHTML = weather.weather[0].main;
                document.querySelector('#wind').innerHTML = weather.wind.speed;

              
            })
            .catch((err) => { err.json });

    } catch (err) {
        console.log(err);

    }
})