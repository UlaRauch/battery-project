document.addEventListener("DOMContentLoaded", function (event) {


//API SETUP
//API key and base url
    const apiData = {
        key: "3a2d1aa2f73d207317d7294004f494cd",
        baseurl: "https://api.openweathermap.org/data/2.5/"
    }

//search bar
    const searchBox = document.createElement(".search-box");
    searchBox.addEventListener("click", setQuery);

    function setQuery(event) {
        //keycode 13 = enter on keyboard
        if (event.keyCode == 13) {
            getResults(searchBox.value);
        }
    }

    function getResults(query) {
        fetch(`${apiData.baseurl}weather?q=${query}&units=metric&APPID=${apiData.key}`)
            .then(weather => {
                console.log(weather);
                return weather.json();
            }).then(displayResults);
    }

    function displayResults(weather) {

        let city = document.createElement('.weatherDisplay.city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;

        let temp = document.createElement('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;


        /*
        fetch(url)
            .then(response => response.json())
            .then(data => {

        //Submit Button
        const form = document.querySelector(".top-banner form");

        form.addEventListener("submit", e => {
            e.preventDefault();
            const inputVal = input.value;
            */
    }
});