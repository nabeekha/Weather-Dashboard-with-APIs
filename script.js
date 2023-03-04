//test fetch function to try an individual city 
fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=8dbb5b7df5ca3d60632d1bcdcd637c38`)
.then(response => {
    return response.json();
}).then(data => {
    console.log(data)
    console.log(data.city.name);
    console.log(data.list[0].main.temp)
})

//use search button click to return weather data 
function getCityInfo() {
    //intake value
    var cityEnter = document.getElementById("city-enter").value
    //use backticks to use Template Literal and create a variable that you can use 
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityEnter}&appid=8dbb5b7df5ca3d60632d1bcdcd637c38`)
.then(response => {
    return response.json();
}).then(data => {
    //console logs store the city name, weather
    console.log(data.city.name);
    console.log()
    displayCurrentWeather(data)
    displayForecastWeather(data)
    savetols(data)
})

}

//add event listener for search button click
document.getElementById("search-button").addEventListener('click', getCityInfo)

function displayCurrentWeather(data) {

}

function savetols(data) {

}

function displayForecastWeather(data) {

}

//create conditional statements to pick specific API call portions based on what city is searched

//use localstorage elements to store the search history

//create search history buttons as a result of the event listener above

//create event listener for search history button and pull the api history for weather again

//example code showing template literals with tutor
var name = "Nabeel"
//var greeting = "hello " + name + ", nice to meet you"
var greeting = `hello ${name} nice to meet you`
console.log(greeting)