import { countries } from './obj.js';
const temp = document.getElementById("temp")
const feelslike = document.getElementById("feelslike")
const humidity = document.getElementById("humidity")
const pressure = document.getElementById("pressure")
const sea = document.getElementById("sea")
const ground = document.getElementById("ground")
const wind = document.getElementById("wind")
const gust = document.getElementById("gust")
const visibility = document.getElementById("visibility")
const cloud = document.getElementById("cloud")
const sunrise = document.getElementById("sunrise")
const sunset = document.getElementById("sunset")
const datesp = document.getElementById("date")
const lati = document.getElementById("lat")
const longi = document.getElementById("lon")
const cityid = document.getElementById("cityid")
const source = document.getElementById("source")
const country = document.getElementById("country")
const time = document.getElementById("time")
const whether = document.getElementById("whether")
const nc = document.getElementById("nc")
const description = document.querySelector(".description")
const mainweather = document.querySelector(".main-weather")
let search = document.getElementById("search");
let searcheditem = document.getElementById("searcheditem");




const keys = Object.keys(countries);
// for (let i = 0; i < keys.length; i++) {

//     if(keys[i] === 'India'){
//         console.log(keys[i]);

//     }
// }



// console.log(countries['India']);


keys.forEach(k => {

    // console.log(k[0]);


    function innerremover() {
        searcheditem.innerHTML = "";
                searcheditem.style.display = "flex"
    }

    function wordtomatch(e) {

        let searching = (e.target.value).toLocaleUpperCase();

        if (k[0] == searching[0]) {




            let lis = document.createElement("li");
            lis.innerHTML = `${k}`

            searcheditem.appendChild(lis)


            lis.addEventListener("click", (e) => {

      

                for (const key in countries) {

                    const element = countries[key];
                    if (key === e.target.innerHTML) {

                     

                        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${element.lat}&lon=${element.lon}&appid=3e5c0b09fbc59c6ffacf873d42ee9cf0`)
                            .then(res => res.json())
                            .then(data => {
                        


                                temp.innerHTML = `${(data.main.temp - 273.15).toFixed(2)}℃`
                                feelslike.innerHTML = `${(data.main.feels_like - 273.15).toFixed(2)}℃`
                                sea.innerHTML = `${data.main.sea_level}hpa`
                                ground.innerHTML = `${data.main.grnd_level}hpa`
                                humidity.innerHTML = `${data.main.humidity}%`
                                pressure.innerHTML = `${data.main.pressure}hpa`
                                wind.innerHTML = `${(data.wind.speed * 3.6).toFixed(1)}km/h`
                                gust.innerHTML = `${(data.wind.gust * 3.6).toFixed(1)}km/h`
                                visibility.innerHTML = ` ${(data.visibility / 1000).toFixed(1)} km`;
                                cloud.innerHTML = `${(data.clouds.all)}% `
                                sunrise.innerHTML = `${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`
                                sunset.innerHTML = `${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`
                                datesp.innerHTML = `${new Date(data.dt * 1000).toLocaleTimeString()}`
                                lati.innerHTML = data.coord.lat
                                longi.innerHTML = data.coord.lon
                                cityid.innerHTML = data.id
                                source.innerHTML = data.base
                                country.innerHTML = data.sys.country
                                time.innerHTML = `${new Date((data.dt + data.timezone) * 1000).toLocaleString()}`
                                whether.innerHTML = data.weather[0].main
                                nc.innerHTML = `${data.name}, ${data.sys.country}`
                                description.innerHTML = data.weather[0].description;
                                mainweather.innerHTML = data.weather[0].main
                            })

                    }

                }









            })

        } else {
            console.log("no match");
        }

    }
    search.addEventListener("keyup", wordtomatch)
    search.addEventListener("click", innerremover)
})





    let bool = true
document.querySelector(".search-button").addEventListener("click", () => {
    if (bool) {
        searcheditem.style.display = "none"
        bool = false
    } else {
        bool = true
        searcheditem.style.display = "flex"
    }

})