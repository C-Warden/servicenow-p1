// Get the modal
var modal1 = document.getElementById("expModal");
var modal2 = document.getElementById("chaModal");

// Get the button that opens the modal
var btn1 = document.getElementById("expBtn");
var btn2 = document.getElementById("chaBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

