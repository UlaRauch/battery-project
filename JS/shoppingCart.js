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

    class ShoppingCart {

        shoppingCartTable(product) {


            productNumber++;


            //server data: price, name; local storage: quantity

            let cartTable = document.getElementById("cartTable");
            let tableRow = document.createElement("tr");
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

            let tableData5 = document.createElement("td");
            //total price
            tableData5.innerText = "" + parseInt(numberQ) * product.ProductPrice;

            let tableData6 = document.createElement("td");
            let removeButton = document.createElement("button");

            tableData6.append(removeButton);
            tableRow.append(tableData1);
            tableRow.append(tableData2);
            tableRow.append(tableData3);
            tableRow.append(tableData4);
            tableRow.append(tableData5);
            tableRow.append(tableData6);
            cartTable.append(tableRow);
        }
    }

    const shopCart = new ShoppingCart();
    //saves localstoarge
    var arrayOfKeys = Object.keys(localStorage);
    var arrayOfValues = Object.values(localStorage);

    for (var i = 0; i < arrayOfKeys.length; i++){
        fetch("http://localhost:1337/api/v1/products/"+arrayOfKeys[i])
            .then(function (res){
                res.json()
                    .then(function(json){
                        shopCart.shoppingCartTable(json);
                    })
            })
        //test

        //console.log(arrayOfKeys[i]);
        //console.log(arrayOfValues[i]);
    }

    /*
    let cart = document.querySelectorAll('button');

    for (let i = 0; i < cart.length; i++) {
        cart[i].addEventListener('click', () =>
        locStorage());
    }

    function locStorage() {
        let localProducts = localStorage.getItem('locStorage');

        localProducts = parseInt(localProducts);

        localStorage.setItem('localProducts', 1);
    }


    let shoppingCart = {
        //save shopping cart items to local storage
        save : function () {
            localStorage.setItem("cart", JSON.stringify(shoppingCart.items));
        },

        //load data from lacal storage (restore shopping cart items)
        load : function() {
            shoppingCart.items = localStorage.getItem("shoppingCart");

            if (shoppingCart.items == NULL) {
                shoppingCart.items = {};
            }
            else {
                shoppingCart.items = JSON.parse(shoppingCart.items);}
        }
    };
    */


});







