(function(){

    const img = document.createElement("img");
    const show = document.createElement("span");
    const hide = document.createElement("span");
    const del = document.createElement("span");
    const page = document.getElementById("root");
    const body = document.body;
    const theImage = document.getElementById("the-image");


    let newSpan = document.createElement("span");
    


    

    show.innerHTML = "Show";
    hide.innerHTML = "Hide";
    del.innerHTML = "Delete";
    page.appendChild(show);
    page.appendChild(hide);
    page.appendChild(del);
    theImage.appendChild(img);
    img.classList.add("img");

    page.style = "margin: 0px; width: 100%; display: flex; flex-direction: row; justify-content: center;";

    show.setAttribute("style", "background-color: green; padding: 15px; border-radius: 5px; margin: 15px; color: white;");

    hide.setAttribute("style", "background-color: red; padding: 15px; border-radius: 5px; margin: 15px; color: white;");

    del.setAttribute("style", "background-color: grey; padding: 15px; border-radius: 5px; margin: 15px; color: white;");
    
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
            newSpan.innerText = "There is nothing to show.";
            theImage.appendChild(newSpan);
        }
    });

    hide.addEventListener("click", function(event){
        if(document.getElementsByClassName("img")[0]) {
            img.style.display = "none";
        } else {
            newSpan.innerText = "There is nothing to hide.";
            theImage.appendChild(newSpan);
        }
    });

    del.addEventListener("click", function() {
        if(document.getElementsByClassName("img")[0]) {
            if (confirm('Are you sure you want to delete the image?')) {
                img.removeEventListener("click", imgFunction, false);
                theImage.removeChild(img);
                alert("The image was deleted.")
            } else {
                alert("The image wasn't deleted.")
            }
        } else {
            newSpan.innerText = "There is nothing to delete.";
            theImage.appendChild(newSpan);
        }
    });

    body.addEventListener("click", function(event){
        console.log(event.currentTarget.nodeName, event.target.nodeName);
        //alert("Something was clicked.");
    }, false);






})();






















