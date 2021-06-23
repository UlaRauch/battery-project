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
            removeButton.addEventListener("click", shopCart.deleteFromTable);
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

            let productToBeDeleted;
            for (let i = 0; i < arrayOfKeys.length; i++) {
                if (productToBeDeleted === product[i]) {
                    productToBeDeleted = product[i];
                    //productToBeDeleted.slice(i, 1);
                    break;
                }

            }
            //console.log(this.);
            //  productToBeDeleted.quantity = 0;

        }


    }

    const shopCart = new ShoppingCart();
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
        //test

        //console.log(arrayOfKeys[i]);
        //console.log(arrayOfValues[i]);
    }


});











