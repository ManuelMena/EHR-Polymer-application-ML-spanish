// Get the modal
var modalperm = document.getElementById('myModalperm');

// Get the button that opens the modal
var btnperm = document.getElementById("myBtnperm");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeperm")[0];

// When the user clicks the button, open the modal 
btnperm.onclick = function() {
    modalperm.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalperm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalperm) {
        modalperm.style.display = "none";
    }
}