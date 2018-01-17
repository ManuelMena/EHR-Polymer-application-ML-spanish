// Get the modal
var modalbook = document.getElementById('myModalbook');

// Get the button that opens the modal
var btnbook = document.getElementById("myBtnbook");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebook")[0];

// When the user clicks the button, open the modal 
btnbook.onclick = function() {
    modalbook.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalbook.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalbook) {
        modalbook.style.display = "none";
    }
}