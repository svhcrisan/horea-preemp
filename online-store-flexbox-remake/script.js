(function() {
    let onHover = document.getElementsByClassName("product-page");
    let addToCart = document.getElementsByClassName("add-to-cart");

    for(let i = 0; i <=onHover.length; i++) {
        onHover[i].addEventListener("mouseover", function(){
            addToCart[i].style.opacity = "1";
        });
        onHover[i].addEventListener("mouseleave", function(){
            addToCart[i].style.opacity = "0";
        });
    }


})();