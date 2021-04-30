window.onload = function(){
    let output = document.querySelector(".productShop");
    let order = [];

//--------------THIS CREATES THE WHOLE CONTENT ON THE WEBSITE ---------------------------------------
    for(i = 0; i < 5; i++){
        output.innerHTML +=
            `
			<article class="product">
            <article class="top">
                <img class="imagetop" src="../images/batterie1.jpg">
            </article>
            <article class="bottom">
                <h2 class="productname">PRODUKTNAME</h2>
                <p class="price">price:  </p>
                <p>details: </p>
                <button class="button">BUY ME</button>
            </article>
        </article>
			`
    }
};
