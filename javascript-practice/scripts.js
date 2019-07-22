(function() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const checkoutBtn = document.getElementById('checkout');

    // firstName
    firstName.addEventListener('change', function(event){
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);
        console.log(firstName.value, fname);
        
        if (firstName.value === "" || !fname) {
            firstName.setAttribute("style", "border: 1px solid #F2314B;");
        } else {
            firstName.setAttribute("style", "border: 1px solid #777777;");
        }
        if(fname && lname && mail === true){
            checkoutBtn.disabled = false;
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

    // lastName
    lastName.addEventListener('change', function(event){
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);
        if (lastName.value === "" || !lname) {
            lastName.setAttribute("style", "border: 1px solid #F2314B");
            //lastName.style.color = "#F2314B";
        } else {
            lastName.setAttribute("style", "border: 1px solid #777777;");
        }
        if(fname && lname && mail === true){
            checkoutBtn.disabled = false;
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

    // email 
    email.addEventListener('change', function(event){
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);
        if (email.value === "" || !mail) {
            email.setAttribute("style", "border: 1px solid #F2314B;");
            email.style.color = "#F2314B;";
        } else {
            email.setAttribute("style", "border: 1px solid #777777;");
        }
        if(fname && lname && mail) {
            checkoutBtn.disabled = false;
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

        // checkout btn
        checkoutBtn.addEventListener('click', function(){
        document.getElementsByClassName('modal')[0].innerHTML = `<center><h1> Checkout Complete! </h1></center>`;
    });

    // products actions
    // remove item
    let removeBtn = document.getElementsByClassName('remove-item');
    let updateRow = function(event) {
        event.preventDefault();
        let target = event.target;
        let targetPrice = target.parentElement.parentElement.children[4].innerHTML;
        deleteRow(target);
        updatePrice(targetPrice);        
    };

    //add click events for remove buttons
    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', updateRow, false);
    }
})();

//help functions
function checkName(name) {
    let letters = /^[A-Za-z]+$/;
    if (name.match(letters)){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const deleteRow = (target) => {
    target.parentElement.parentElement.style.display = "none";
}

const updatePrice = (targetPrice) => {
    let total = document.getElementsByClassName('total')[0];
    total.innerHTML = total.innerHTML - targetPrice;
}

function checkIfItem(number) {
    if(number < 1) {
        checkoutBtn.disabled = false;
    }
}