//variables
let searchHistory = [];
let searchClicked = false

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=8dbb5b7df5ca3d60632d1bcdcd637c38`)
.then(response => {
    return response.json();
}).then(data => {
    console.log(data)
    console.log(data.city.name)
    console.log(data.list[0].main.temp)
})

function saveToLS(data) {
    var input = document.getElementById('city-enter')

    var savedData = document.getElementById('city-enter').value
    var currentWeather = data
    var newHistoryButton = document.createElement('button')
    newHistoryButton.textContent = savedData
    newHistoryButton.dataset.cityName = JSON.stringify(currentWeather)
    var newSearchHistory = document.getElementById('searchHistoryAdder')
    newSearchHistory.appendChild(newHistoryButton)

    //add new history button to the searchHistory array
    searchHistory.push(newHistoryButton.textContent)
}

//use search button click to return weather data 
function getCityInfo() {
    //clear previous results
    document.getElementById('city-container').innerHTML = ''
    document.getElementById('date-container1').innerHTML = ''
    document.getElementById('icon-container1').innerHTML = ''
    document.getElementById('weather-container1').innerHTML = ''
    document.getElementById('wind-container1').innerHTML = ''
    document.getElementById('humidity-container1').innerHTML = ''

    //set condtional to see whether the search button or history button is clicked

    //can't get the loop to work successfully to pick the right value 
    // if (searchClicked)
    // {
    // //intake value
    // var cityEnter = document.getElementById("city-enter").value
    // } else {
    //     var cityEnter = ''
    //     searchHistory.forEach((item) => {
    //         if (newHistoryButton.textContent == item.query) {
    //             cityEnter = searchHistory[item].textContent
    //         }
    //     })
    // }


    //use backticks to use Template Literal and create a variable that you can use 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityEnter}&appid=8dbb5b7df5ca3d60632d1bcdcd637c38`)
.then(response => {
    return response.json();
}).then(data => {
    //console logs store the city name, weather and current time
    displayCurrentWeather(data)
    displayForecastWeather(data)
    saveToLS(data)
})
}

//this code adds the current temperature to the screen
function displayCurrentWeather(data) {
    //returns the current city name
    var currentCityName = document.createElement('p')
    currentCityName.textContent = data.city.name
    var cityContainer = document.getElementById('city-container')
    cityContainer.appendChild(currentCityName)

    //returns the current date
    var currentDate = document.createElement('p')
    currentDate.textContent = data.list[0].dt_txt
    var dateContainer = document.getElementById('date-container1')
    dateContainer.appendChild(currentDate)

    //returns the current icon
    var currentIcon = document.createElement('img')
    currentIcon.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
    var iconContainer = document.getElementById('icon-container1')
    iconContainer.appendChild(currentIcon)

    //returns the current city temperature
    var currentWeather = document.createElement('p')
    currentWeather.textContent = data.list[0].main.temp
    var weatherContainer = document.getElementById('weather-container1')
    weatherContainer.appendChild(currentWeather)

    //returns the current wind speed
    var currentWind = document.createElement('p')
    currentWind.textContent = data.list[0].wind.speed
    var windContainer = document.getElementById('wind-container1')
    windContainer.appendChild(currentWind)

    //returns the current visibity
    var currentHumidity = document.createElement('p')
    currentHumidity.textContent = data.list[0].main.humidity
    var humidContainer = document.getElementById('humidity-container1')
    humidContainer.appendChild(currentHumidity)
}

//create conditional statements to pick specific API call portions based on what city is searched
function displayForecastWeather(data) {
    var index = 1

    for (var i = 8; i < data.list.length; i += 7) {
    // create elements to display the forecasted data
    var forecastDate = document.createElement('p')
    var forecastIcon = document.createElement('img')
    var forecastTemp = document.createElement('p')
    var forecastWind = document.createElement('p')
    var forecastHumidity = document.createElement('p')

    // set the content of the forecast elements
    forecastDate.textContent = data.list[i].dt_txt;
    forecastIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`
    forecastTemp.textContent = `Temperature: ${data.list[i].main.temp} K`
    forecastWind.textContent = `Wind speed: ${data.list[i].wind.speed} m/s`
    forecastHumidity.textContent = `Humidity: ${data.list[i].main.humidity}%`
    
    //create elements for each respective container
    var dateContainer = document.getElementById(`date-container${index+1}`)
    var iconContainer = document.getElementById(`icon-container${index+1}`)
    var weatherContainer = document.getElementById(`weather-container${index+1}`)
    var windContainer = document.getElementById(`wind-container${index+1}`)
    var humidContainer = document.getElementById(`humidity-container${index+1}`)

    //clear previous elements
    document.getElementById(`date-container${index+1}`).innerHTML = ''
    document.getElementById(`icon-container${index+1}`).innerHTML = ''
    document.getElementById(`weather-container${index+1}`).innerHTML = ''
    document.getElementById(`wind-container${index+1}`).innerHTML = ''
    document.getElementById(`humidity-container${index+1}`).innerHTML = ''

    //append results to various indeces
    dateContainer.appendChild(forecastDate)
    iconContainer.appendChild(forecastIcon)
    weatherContainer.appendChild(forecastTemp)
    windContainer.appendChild(forecastWind)
    humidContainer.appendChild(forecastHumidity)

    index++
}
}

//add event listener for search button click
var searchClick = document.getElementById("search-button")
searchClick.addEventListener('click', () => {
    searchClicked = true
})
searchClick.addEventListener('click', getCityInfo)


//create event listener for search history button and pull the api history for weather again
var historyClick = document.getElementById("searchHistoryAdder")
historyClick.addEventListener('click', () => {
    searchClicked = false
})
historyClick.addEventListener('click', getCityInfo)


