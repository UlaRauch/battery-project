window.onload = function(){
    let output = document.querySelector(".js");
    let order = [];

//--------------THIS CREATES THE WHOLE CONTENT ON THE WEBSITE ---------------------------------------
    for(i = 0; i < 5; i++){
        output.innerHTML +=
            `
			<div class="col-lg-3 offset-lg-1 col-md-5 offset-md-1 ownBorder pt-3">
				<div class="row">
					<div class="col-lg-12 col-mg-12">
			    		<img class="image imageBorder"src="Mainpicture.PNG">
					</div>
						<div class="col-lg-6 col-md-6 mt-2">
							<p>3</p>
						</div>
						<div class="col-lg-3 offset-lg-3 col-md-3 offset-md-3 mt-2">
							<p>2</p>
						</div>
						<div class="col-lg-12">
							<p>1</p>
						</div>
						<div class="col-lg-7 col-md-7">
							<button id="4" type="button" class=" btn btn-primary btn-sm btn-sz add">Add to favorites</button>
						</div>
						<div class="col-lg-5 col-md-5">
							<p>Nothing</p>
						</div>
					</div>
				</div>
				`
        order.push(this.cart);
        console.log(order);

    }
};
