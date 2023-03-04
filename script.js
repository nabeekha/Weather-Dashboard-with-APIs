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
    //console logs store the city name, weather and current time
    console.log(data.city.name);
    console.log(data.list[0].main.temp)
    console.log(data.list[0].dt_txt)
    displayCurrentWeather(data)
    displayForecastWeather(data)

    //call function to save the data
    var newCityData = localStorage.getItem('cityData')
    savetols(data)
    console.log(newCityData)
})

}

//add event listener for search button click
document.getElementById("search-button").addEventListener('click', getCityInfo)

//this code adds the current temperature to the screen
function displayCurrentWeather(data) {
    //returns the current city name
    var currentCityName = document.createElement('p')
    currentCityName.textContent = data.city.name
    var cityContainer = document.getElementById('city-container')
    cityContainer.appendChild(currentCityName)

    //returns the current city temperature
    var currentWeather = document.createElement('p')
    currentWeather.textContent = data.list[0].main.temp
    var weatherContainer = document.getElementById('weather-container')
    weatherContainer.appendChild(currentWeather)
}

function displayForecastWeather(data) {
    var forecast = ""

}

function savetols(data) {
    var input = document.getElementById('city-enter')
    var savedData = input.value
    localStorage.setItem('cityData', data)
}

//create conditional statements to pick specific API call portions based on what city is searched

//use localstorage elements to store the search history

//create search history buttons as a result of the event listener above

//create event listener for search history button and pull the api history for weather again

