const apiKey="6aad25231ec9f29502d63e241b247d90";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&appid=units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather=["Clouds","Clear","Drizzle","Mist","Rain"];

const checkWeather = async function(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

if(response.status == 404){

    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
}else{

var data = await response.json();

document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
document.querySelector("humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".weather").style.display= "block";
document.querySelector(".error").style.display="none";

weather.forEach(e=>{
    if(e==data.weather[0].main){
        weatherIcon.src=`images/${e}.png`;
        return;
    }
})

}};


searchBtn.addEventListener("click",()=>{

checkWeather(searchBox.value);

})

