document.addEventListener("DOMContentLoaded", function (event) {


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
                                console.log(res.json());

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
                // damit beim scrollen geladen wird
                if(window.scrollY >= document.getElementById("productShop").clientHeight - window.innerHeight -10 && productID <= maxProductsPerPage){ // max 20 produkte
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
                    if(localStorage.getItem(Product.ProductID)){// wenn prokut schon drinnen is soll raufzaehlen
                        let valueOfSelect = select.options[select.selectedIndex].value; // hole zuerst was ich ausgewaehlt habe
                        valueOfSelect = parseInt(valueOfSelect);// string zu int
                        let ValueOfLocalstorage = localStorage.getItem(Product.ProductID);// holen was im local storage ist
                        ValueOfLocalstorage = parseInt(ValueOfLocalstorage);
                        valueOfSelect = valueOfSelect + ValueOfLocalstorage;// zsmrechnen: quantity die ausgewaehlt ist + quantity im local storage
                        localStorage.setItem(Product.ProductID,valueOfSelect);// // das neue wird gesetzt
                    }else{ // wenn nicht neu setzen
                        localStorage.setItem(Product.ProductID,select.options[select.selectedIndex].value);
                    }

                },
                false
            );


            article.append(article2)
            article2.append(image);
            article.append(article3);

            article3.append(h2);

            p.append(button);
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
});