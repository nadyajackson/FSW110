document.body.style.backgroundColor="lightblue";

//add
a = document.getElementById("first");
b = document.getElementById("second");

document.getElementById("add").addEventListener("click", addition);
function addition(){
    document.getElementById("answer").style.color = "red"; //just to test button fuction before debugging math
}

//sub
x = document.getElementById("here");
y = document.getElementById("there");

document.getElementById("sub").addEventListener("click", subtraction);
function subtraction(){
    z= x-y;
    return document.getElementById("solution").innerHTML = z;
}

//mul
q = document.getElementById("one");
r = document.getElementById("two");

document.getElementById("mul").addEventListener("click", multiply);
function multiply(){
    m= q*r;
    return document.getElementById("success").innerHTML = m;
}