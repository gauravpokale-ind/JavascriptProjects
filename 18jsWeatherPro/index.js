const apiKey = "704325eb3d7a545b6cdbe4824229ea2c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInp = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weatherIcon')

async function checkWeather(city) {
    const result = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (result.status == "404") {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await result.json()
        console.log(result);
        console.log(data);

        document.querySelector('.city').innerHTML = data.name
      
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c"
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://res.cloudinary.com/drah9v28t/image/upload/v1728404581/clouds_hbzafj.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://res.cloudinary.com/drah9v28t/image/upload/v1728404581/clear_izb85b.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://res.cloudinary.com/drah9v28t/image/upload/v1728404582/rain_adlrtl.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://res.cloudinary.com/drah9v28t/image/upload/v1728404581/drizzle_xye5ov.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://res.cloudinary.com/drah9v28t/image/upload/v1728404581/mist_wz1no7.png"
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }


}

searchBtn.addEventListener('click', () => {
    // city.innerText=`city:${data.name}`
    checkWeather(searchInp.value)
})