// const apiKey = "704325eb3d7a545b6cdbe4824229ea2c"
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// const searchBox = document.querySelector(".search input")
// const searchBtn = document.querySelector(".search button")
// const weatherIcon = document.querySelector(".weatherIcon")

// const city=document.querySelector("#city")
// const temp=document.querySelector("#temp")
// const wind=document.querySelector("#wind")
// const humidity=document.querySelector("#humidity")

// async function checkWheather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

//     if (response.status == 404) {
//         document.querySelector(".error").style.display = "block"
//         document.querySelector(".weather").style.display = "none"
//     }
//     else {
//         var data = await response.json()

//         console.log(data);

//         document.querySelector('.city').innerHTML = data.name
//         document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c"
//         document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"
//         document.querySelector('.humidity').innerHTML = data.main.humidity + "%"


//         if (data.weather[0].main == "Clouds") {
//             weatherIcon.src = "images/clouds.png"
//         }
//         else if (data.weather[0].main == "Mist") {
//             weatherIcon.src = "images/mist.png"
//         }
//         else if (data.weather[0].main == "Rain") {
//             weatherIcon.src = "images/rain.png"
//         }
//         else if (data.weather[0].main == "Drizzle") {
//             weatherIcon.src = "image/drizzle.png"
//         }
//         else if (data.weather[0].main == "Clear") {
//             weatherIcon.src = "images/clear.png"
//         }

//         document.querySelector(".weather").style.display = "block"
//         document.querySelector(".error").style.display = "none"
//     }

// }

// searchBtn.addEventListener("click", () => {
//     checkWheather(searchBox.value)
// })


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
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }


}

searchBtn.addEventListener('click', () => {
    // city.innerText=`city:${data.name}`
    checkWeather(searchInp.value)
})