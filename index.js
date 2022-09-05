
$.getJSON("products.json", function(json) {
    // console.log(json);
    // console.log(json.length);
    // let rate_position = 3;
    // console.log(json);
    loadProducts(json);
}); 

    function loadProducts(data){
        var products = []
        for(var i = 0;i <data.length;i++){
            var product = $('<div>').addClass("card").append($('<div>').addClass("card-image").append($('<img>').attr('src', data[i].img_url))).after("card-image").append($('<div>').addClass("card-content").append("<h3>" + data[i].name).append(("<p>"+data[i].description)).append($('<div>').attr("id","rate").append(ratingStar(data[i].rating, i))).append($('<button class="buy-now">Buy Now</button>')).append($('<button class="add-to-cart">Add To Cart</button>')));
             //.html("product " + (i+1))
            products.push(product);    
        }
        $("#container1").html(products);

        function ratingStar(rate, i) {
                let star = " ⭐";  
                let temp = "";
                for(var j = 0; j<rate; j++)
                {
                    temp += star;
                } 
                $('rate').innerHTML = temp;     
                // console.log(temp)
                return temp;  
        }
    }
// $( document ).ready(
//     function() {
//     console.log( "ready!" );
// }
// );