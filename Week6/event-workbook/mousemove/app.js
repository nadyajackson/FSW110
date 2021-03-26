var box = document.getElementsByClassName("red-box");

var newPara = document.createElement("P");
newPara.setAttribute("id","Para");
newPara.innerText= "Coordinates";
document.body.append(newPara);

var getPara = document.getElementById("Para");
getPara.style.textAlign = "center";

box.addEventListener("mousemove", XYZ);
function XYZ(){
    var x = clientX;
    var y = clientY;
    getPara.innerHTML="Mouse Coordinates" + x + y ;
};