// Get the modal
var modalsetting = document.getElementById('myModalsetting');

// Get the button that opens the modal
var btnsetting = document.getElementById("myBtnsetting");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closesetting")[0];

// When the user clicks the button, open the modal 
btnsetting.onclick = function() {
    modalsetting.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalsetting.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalsetting) {
        modalsetting.style.display = "none";
    }
}