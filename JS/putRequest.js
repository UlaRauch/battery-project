class putRequest{


    // Diese funktion am ende hinzufügen und durchlaufen lassen
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