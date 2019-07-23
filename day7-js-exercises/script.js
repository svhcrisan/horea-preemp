(function(){

    const page = document.getElementById("root");

    const theImage = document.getElementById("the-image")

    let show = document.createElement("span");

    const img = document.createElement("img");

    const hide = document.createElement("span");
    

    show.innerHTML = "Show";
    hide.innerHTML = "Hide";
    page.appendChild(show);
    page.appendChild(hide);
    theImage.appendChild(img);
    img.classList.add("img");

    page.style = "margin: 0px; width: 100%; display: flex; flex-direction: row; justify-content: center;";

    hide.setAttribute("style", "background-color: red; padding: 15px; border-radius: 5px; margin: 15px; color: white;");

    show.setAttribute("style", "background-color: green; padding: 15px; border-radius: 5px; margin: 15px; color: white;");
    
    img.src = "images/img1.jpg";
    img.setAttribute("style", "width: 600px; height: 350px; display: none;");
    

    function imgFunction() {
        this.style.display = "none";
    }

    img.addEventListener("click", imgFunction, false);

    show.addEventListener("click", function(event){
        if(document.getElementsByClassName("img")[0]) {
            img.style.display = "block";
        } else {
            let newSpan = document.createElement("span");
            newSpan.innerText = "There is nothing to show.";
            theImage.appendChild(newSpan);

        }
    });

    hide.addEventListener("click", function(event){
        img.removeEventListener("click", imgFunction, false);
        theImage.removeChild(img);
    });


})();






















