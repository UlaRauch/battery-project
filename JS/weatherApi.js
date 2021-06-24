document.addEventListener("DOMContentLoaded", function (event) {


    let temperature = null;

    class weatherApi {
        async getCurrent(input) {
            const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";

            //make request to url

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
            );

            const data = await response.json();

            let temp = document.getElementById("temp");
            temp.innerText = `${Math.round(data.main.temp)-273}°C`;
            let weatherConditions = document.getElementById("weatherCondition");
            weatherConditions.innerText = data.weather[0].main;

            this.calculateTotal();
            return data;
        }

        calculateTotal() {
            let totalPrize = 0;
            let arrayOfKeys = Object.keys(localStorage);

            for(let i = 0; i < arrayOfKeys.length; i++) {
                let temp = document.getElementById("total" + i);
                temp = parseInt(temp.innerText);
                console.log(temp);
                totalPrize+= temp;
            }
            let yourTotal = document.getElementById("productTotal");
            yourTotal.innerText = "Your total: $" + totalPrize;
        }
    }

    let x = new weatherApi;
    x.getCurrent("Vienna").then(r => console.log(r));


});
