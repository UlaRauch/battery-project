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

    let shipping = 0;

    let shippingTwo = 0;

    let shippingAmount = 0;
    let test = [];

    class ShoppingCart {


        shoppingCartTable(product) {

            productNumber++;


            //server data: price, name; local storage: quantity

            let cartTable = document.getElementById("cartTable");
            let tableRow = document.createElement("tr");
            tableRow.id = product.ProductID;
            let tableData1 = document.createElement("td");
            tableData1.innerText = "" + productNumber;
            tableData1.className = "notVisible";

            let tableData2 = document.createElement("td");
            tableData2.innerText = product.ProductName;

            let tableData3 = document.createElement("td");
            let numberQ = localStorage.getItem(product.ProductID);
            tableData3.innerText = numberQ;

            let tableData4 = document.createElement("td");
            tableData4.innerText = product.ProductPrice;
            tableData4.className = "notVisible";

            //total price
            let tableData5 = document.createElement("td");
            tableData5.innerText = "" + parseInt(numberQ) * product.ProductPrice;
            tableData5.id = "total" + number;
            tableData5.className = "tot" + product.ProductID;
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
            xar.calculateAfterDelete("tot" + product.ProductID);
            localStorage.removeItem(product.ProductID);
            x.remove();
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
            shipping = parseInt(`${Math.round(data.main.temp) - 273}`);
            shippingTwo = parseInt(`${Math.round(data.main.temp) - 273}`);
            temp.innerText = `${Math.round(data.main.temp) - 273}°C`;
            let weatherConditions = document.getElementById("weatherCondition");
            weatherConditions.innerText = data.weather[0].main;

            this.calculateProductTotal();
            this.calculateShipping(shippingTwo);
            this.calculateTotal();

            return data;
        }

        calculateProductTotal() {
            let totalPrize = 0;
            let arrayOfKeys = Object.keys(localStorage);

            // neue schleife damit objekte mit null nicht rein geladen werden
            for (let i = 0; i < arrayOfKeys.length; i++) {
                try {
                    let temp2 = "total" + i;
                    let temp = document.getElementById(temp2);
                    temp = parseInt(temp.innerText);
                    totalPrize += temp;

                    let productTotal = document.getElementById("productTotal");
                    productTotal.innerText = "Your Products cost: $" + totalPrize;

                } catch (ex) {
                    console.log("Errorhandling: " + ex);
                }
            }
        }

        calculateAfterDelete(id) {
            console.log(id);
            let test = document.getElementById("productTotal").innerText;
            test = test.split("$", 10);
            test = test[1];
            let totalPrize = test;

            let mamboJumbo = document.getElementsByClassName(id);
            mamboJumbo = mamboJumbo[0].innerHTML;
            mamboJumbo = parseInt(mamboJumbo);
            //console.log(mamboJumbo[0].innerHTML);
            let productTotal = document.getElementById("productTotal");
            productTotal.innerText = "Your Products costs: $" + (totalPrize - mamboJumbo);
            this.calculateShipping(shippingTwo);
            this.calculateTotal();
        }

        calculateShipping(shippingTwo) {

            let shippingCost = document.getElementById("shipping");

            let test = document.getElementById("productTotal").innerText;
            test = test.split("$", 10);
            test = parseInt(test[1]);

            if (shippingTwo <= 0) {
                shippingTwo = 0.25;
                shippingAmount = shippingTwo * test;
                shippingCost.innerText = "+ " + (shippingTwo * 100) + "%: $" + shippingAmount.toFixed(2);
            } else if (shippingTwo > 0 && shippingTwo < 15) {
                shippingTwo = 0.20;
                shippingAmount = shippingTwo * test;
                shippingCost.innerText = "+ " + (shippingTwo * 100) + "%: $" + shippingAmount.toFixed(2);
            } else if (shippingTwo >= 15 && shippingTwo < 25) {
                shippingTwo = 0.15;
                shippingAmount = shippingTwo * test;
                shippingCost.innerText = "+ " + (shippingTwo * 100) + "%: $" + shippingAmount.toFixed(2);
            } else if (shippingTwo >= 25 && shippingTwo < 35) {
                shippingTwo = 0.3;
                shippingAmount = shippingTwo * test;
                shippingCost.innerText = "+ " + (shippingTwo * 100) + "%: $" + shippingAmount.toFixed(2);
            } else {
                console.log("No Shipping Available!");
            }
        }


        calculateTotal() {

            let test = document.getElementById("productTotal").innerText;
            test = test.split("$", 10);
            test = parseInt(test[1]);

            let total = document.getElementById("total");
            total.innerText = "Your Total: $" + (test + shippingAmount).toFixed(2);

        }
    }

    class Test{
        sendPutRequest(Product, Quantity){
            if((Product.ProductStockQuantity - Quantity > 0)){
                const product = {
                    "ProductName": Product.ProductName,
                    "ProductPrice": Product.ProductPrice,
                    "ProductCover": Product.ProductCover,
                    "ProductDescription": Product.ProductDescription,
                    "ProductID": Product.ProductID,
                    "ProductStockQuantity": (Product.ProductStockQuantity - Quantity)
                }

                const id = Product.ProductID
                //const change = select.options[select.selectedIndex].value;
                const data = {id, product};

                fetch("http://localhost:1337/api/v1/products/" + Product.ProductID,{
                    method: 'Put',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }else{
                alert("not enough pieces of " + Product.ProductName);
            }
        }
    }





    let xar = new weatherApi();
    let tst = new Test();

    const shopCart = new ShoppingCart();
    xar.getCurrent("Vienna");
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

    let button2 = document.getElementById("orderButton");
    button2.addEventListener("click", function (){

        let arrayOfKeys = Object.keys(localStorage);
        let arrayOfValues = Object.values(localStorage);

        for (let i = 0; i < arrayOfKeys.length; i++) {
            fetch("http://localhost:1337/api/v1/products/" + arrayOfKeys[i])
                .then(function (res) {
                    res.json()
                        .then(function (json) {
                            tst.sendPutRequest(json, arrayOfValues[i]);
                        })
                })
        }

        window.open ("http://localhost:1337/checkout",
            "mywindow","menubar=1,resizable=1,width=800,height=600");






    })
});











