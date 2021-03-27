// make the box disapear when the user clicks it
var box = document.querySelector('.red-box');

box.addEventListener('click', disapear);
function disapear(){
   box.style.backgroundColor= "white";
};