document.addEventListener("DOMContentLoaded", function (event) {


    class Product {
        constructor(ProductName, ProductPrice, ProductCover, ProductDescription, ProductID, ProductStockQuantity) {
            this.ProductName = ProductName;
            this.ProductPrice = ProductPrice;
            this.ProductCover = ProductCover;
            this.ProductDescription = ProductDescription;
            this.ProductID = ProductID;
            this.ProductStockQuantity = ProductStockQuantity;
        }
    }


    let productNumber = 0;

    let number = 0;

    class ShoppingCart {


        shoppingCartTable(product) {

            productNumber++;


            //server data: price, name; local storage: quantity

            let cartTable = document.getElementById("cartTable");
            let tableRow = document.createElement("tr");
            tableRow.id = product.ProductID;
            let tableData1 = document.createElement("td");
            tableData1.innerText = "" + productNumber;

            let tableData2 = document.createElement("td");
            tableData2.innerText = product.ProductName;

            let tableData3 = document.createElement("td");
            let numberQ = localStorage.getItem(product.ProductID);
            console.log(numberQ);
            tableData3.innerText = numberQ;

            let tableData4 = document.createElement("td");
            tableData4.innerText = product.ProductPrice;

            //total price
            let tableData5 = document.createElement("td");
            tableData5.innerText = "" + parseInt(numberQ) * product.ProductPrice;
            tableData5.id = "total" + number;
            console.log(tableData5.id);
            number++;

            let tableData6 = document.createElement("td");
            let removeButton = document.createElement("button");
            //removeButton.addEventListener("click", shopCart.deleteFromTable);
            removeButton.addEventListener('click', function () {
                shopCart.deleteFromTable(product);
            })
            removeButton.innerHTML = "delete";


            tableData6.append(removeButton);
            tableRow.append(tableData1);
            tableRow.append(tableData2);
            tableRow.append(tableData3);
            tableRow.append(tableData4);
            tableRow.append(tableData5);
            tableRow.append(tableData6);
            cartTable.append(tableRow);
        }

        deleteFromTable(product) {
            let x = document.getElementById(product.ProductID);
            x.remove();
            localStorage.removeItem(product.ProductID);
            x.calculateTotal();
        }

    }





    //WEATHER API!!!!!!!!!!

    class weatherApi {

        async getCurrent(input) {
            const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";

            //make request to url

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
            );

            const data = await response.json();

            let temp = document.getElementById("temp");
            temp.innerText = `${Math.round(data.main.temp) - 273}°C`;
            let weatherConditions = document.getElementById("weatherCondition");
            weatherConditions.innerText = data.weather[0].main;

            this.calculateTotal();
            return data;
        }

        calculateTotal() {
            let totalPrize = 0;
            let arrayOfKeys = Object.keys(localStorage);

            for (let i = 0; i < arrayOfKeys.length; i++) {
                let temp = document.getElementById("total" + i);
                console.log(temp);
                temp = parseInt(temp.innerText);
                console.log(temp);
                totalPrize += temp;
            }
            let yourTotal = document.getElementById("yourTotal");
            yourTotal.innerText = "Your total: $" + totalPrize;
        }
    }
    let x = new weatherApi();

    const shopCart = new ShoppingCart();
    x.getCurrent("Vienna");
    x.calculateTotal();
    //saves localstoarge
    let arrayOfKeys = Object.keys(localStorage);
    let arrayOfValues = Object.values(localStorage);

    for (let i = 0; i < arrayOfKeys.length; i++) {
        fetch("http://localhost:1337/api/v1/products/" + arrayOfKeys[i])
            .then(function (res) {
                res.json()
                    .then(function (json) {
                        shopCart.shoppingCartTable(json);
                    })
            })
    }
});











