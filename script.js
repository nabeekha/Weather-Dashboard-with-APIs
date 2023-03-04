var buttonEl = document.getElementById("search-button")

fetch('api.openweathermap.org/data/2.5/forecast?lat={40.71}&lon={-74.01}&appid={}')
.then(response => {
    return response.json();
})

//create a form element to search for a city

//add event listener for search button click
buttonEl.addEventListener('click', function() {
    console.log("test");
})

//create conditional statements to pick specific API call portions based on what city is searched

//use localstorage elements to store the search history

//create event listener for search history button 

//use event listener to pull the api history for weather again