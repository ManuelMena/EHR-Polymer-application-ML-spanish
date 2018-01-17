// Get the modal

var modalcreate = document.getElementById('myModalcreate');

// Get the button that opens the modal
var btncreate = document.getElementById("myBtncreate");

// Get the <span> element that closes the modal
var span.create = document.getElementsByClassName("closecreate")[0];

// When the user clicks the button, open the modal 
btncreate.onclick = function() {
    modalcreate.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.create.onclick = function() {
    modalcreate.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modalbook.style.display = "none";
    }
}