// make the box disapear when the user clicks it
var box = document.getElementsByClassName("red-box");

box.addEventListener("click", disapear);
function disapear(){
   box.style.visibility = "hidden";
};