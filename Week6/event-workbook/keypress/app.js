/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

var out = document.getElementById("output");
var para = document.createElement("p");
para.setAttribute("id","newPara");
out.appendChild(para);

document.addEventListener("onkeyPress", mydisplay)
function mydisplay(event){
    var x = event.keyCode;
    var y = event.key;
    return document.getElementById("newPara").innerHTML="You pressed " + y + ". The key code is "+ x;
}