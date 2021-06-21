
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












