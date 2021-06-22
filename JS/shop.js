document.addEventListener("DOMContentLoaded", function (event) {

    class Product{
        constructor(ProductName, ProductPrice, ProductCover, ProductDescription, ProductID, ProductStockQuantity) {
            this.ProductName = ProductName;
            this.ProductPrice = ProductPrice;
            this.ProductCover = ProductCover;
            this.ProductDescription = ProductDescription;
            this.ProductID = ProductID;
            this.ProductStockQuantity = ProductStockQuantity;
        }
    }

    class Shop {
        constructor() {
            //this.shoppingCart = new ShoppingCart("Shopping Cart");
            this.productShop = document.getElementById("productShop");
            const maxProductsPerPage = 20;
            let productID = 1;

            let loadNewProduct = function(loadProductId){
                fetch("http://localhost:1337/api/v1/products/"+loadProductId)
                    .then(function (res){
                        res.json()
                            .then(function(json){
                                ProductArray.push(json);
                                shop.addProductToScreen(json);
                                console.log(json);
                            })
                    })
            }
            loadNewProduct(productID);
            productID++;
            loadNewProduct(productID);
            productID++;
            loadNewProduct(productID);
            productID++;
            loadNewProduct(productID);
            productID++;

            window.addEventListener('scroll', function(){
                if(window.scrollY >= document.getElementById("productShop").clientHeight - window.innerHeight -10 && productID <= maxProductsPerPage){
                    loadNewProduct(productID);
                    productID++;
                    console.log(productID);
                }
            });

        }
        addProductToScreen(Product) {
            let productShop = document.getElementById("productShop");
            let article = document.createElement("article");
            let article2 = document.createElement("article");
            article2.className ="top";
            let image = document.createElement("img");
            image.src = Product.ProductCover;
            image.className = "imagetop";
            let article3 = document.createElement("article");
            article3.id ="ProductInformation";
            article.className = "bottom";
            let h2 = document.createElement("h2");
            h2.innerText = Product.ProductName;
            h2.className = "productname";
            let p = document.createElement("p");
            p.innerText = "Price: " + Product.ProductPrice.toFixed(2) + "€";

            let p2 = document.createElement("p");
            p2.innerText = Product.ProductDescription;
            p2.className = "price";
            p2.id = "description";
            let button = document.createElement("button");
            button.className = "button";
            button.innerText ="BUY ME";

            let select = document.createElement("select");
            let option1 = document.createElement("option");
            option1.text = "1";
            let option2 = document.createElement("option");
            option2.text = "2";
            let option3 = document.createElement("option");
            option3.text = "3";
            let option4 = document.createElement("option");
            option4.text ="4";
            let option5 = document.createElement("option");
            option5.text = "5";
            select.append(option1,option2,option3,option4,option5);

            let article4 = document.createElement("article");
            article4.id = "PriceAndButton";

            button.addEventListener(
                'click',
                function(){
                    Product.ProductStockQuantity += Number(select.options[select.selectedIndex].value);
                    //localStorage.clear();
                    if(localStorage.getItem(Product.ProductID)){
                        let valueOfSelect = select.options[select.selectedIndex].value;
                        valueOfSelect = parseInt(valueOfSelect);
                        let ValueOfLocalstorage = localStorage.getItem(Product.ProductID);
                        ValueOfLocalstorage = parseInt(ValueOfLocalstorage);
                        valueOfSelect = valueOfSelect + ValueOfLocalstorage;
                        localStorage.setItem(Product.ProductID,valueOfSelect);
                    }else{
                        localStorage.setItem(Product.ProductID,select.options[select.selectedIndex].value);
                    }

                    //console.log(localStorage.getItem(Product.ProductName));
                    //localStorage.clear();
                    //let test = localStorage.getItem(Product.ProductName);
                    //test.items = JSON.parse(test.items);
                    //console.log(test.items.ProductName);
                    var arrayOfKeys = Object.keys(localStorage);
                    var arrayOfValues = Object.values(localStorage);

                    for (var i = 0; i < arrayOfKeys.length; i++){
                        fetch("http://localhost:1337/api/v1/products/"+arrayOfKeys[i])
                            .then(function (res){
                                res.json()
                                    .then(function(json){
                                        let id = arrayOfKeys[i];
                                        //let number = localStorage[id];
                                        console.log(json.ProductPrice + "quantity +1: ");
                                        console.log(localStorage[id]);
                                    })
                            })
                        //test

                        console.log(arrayOfKeys[i]);
                        console.log(arrayOfValues[i]);
                    }


                    /*
                    for (var i = 0; i < arrayOfKeys.length; i++){
                        console.log(arrayOfKeys[i]);
                        console.log(arrayOfValues[i]);
                    }

                     */
                },
                false
            );


            article.append(article2)
            article2.append(image);
            article.append(article3);

            article3.append(h2);


            //article3.append(p2);
            p.append(button);
            // old
            /*
            article3.append(p);
            article3.append(button);
            article3.append(select);

             */
            //New
            article4.append(p);
            article4.append(button);
            article4.append(select);

            article3.append(article4);
            article.append(p2);
            productShop.append(article);


        }


    }
    const shop = new Shop();
    let ProductArray = [];
    /*
    ProductArray[0] = new Product("Batterie",123,"../images/batterie1.jpg", 123, 5, 5);
    ProductArray[1] = new Product("Batterie2",123,"../images/batterie1.jpg", 123, 5, 5);
    ProductArray[2] = new Product("Batterie3",123,"../images/batterie1.jpg", 123, 5, 5);
    ProductArray[3] = new Product("Batterie4",123,"../images/batterie1.jpg", 123, 5, 5);
    ProductArray[4] = new Product("Batterie5",123,"../images/batterie1.jpg", 123, 5, 5);

    shop.addProductToScreen(ProductArray[0]);
    shop.addProductToScreen(ProductArray[1]);
    shop.addProductToScreen(ProductArray[2]);
    shop.addProductToScreen(ProductArray[3]);
    shop.addProductToScreen(ProductArray[4]);

     */


});