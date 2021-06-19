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
            article.className = "bottom";
            let h2 = document.createElement("h2");
            h2.innerText = Product.ProductName;
            h2.className = "productname";
            let p = document.createElement("p");
            p.innerText = "Price: " + Product.ProductPrice + "€";

            let p2 = document.createElement("p");
            p2.innerText = Product.ProductDescription;
            p2.className = "price";
            let button = document.createElement("button");
            button.className = "button";
            button.innerText ="BUY ME";

            button.addEventListener(
                'click',
                function(){
                    localStorage.clear();
                    console.log("Hallo");
                    let x = [];
                    localStorage.setItem(Product.ProductName, JSON.stringify(Product));
                    localStorage.setItem(Product.ProductName, Product.ProductID);
                    //console.log(localStorage.getItem(Product.ProductName));
                    //localStorage.clear();
                    let test = localStorage.getItem(Product.ProductName);
                    test.items = JSON.parse(test.items);
                    console.log(test.items.ProductName);
                },
                false
            );


            article.append(article2)
            article2.append(image);
            article.append(article3);
            article3.append(h2);
            article3.append(p);
            article3.append(p2);
            article3.append(button);
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