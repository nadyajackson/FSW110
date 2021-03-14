//The square's color will change Blue when the mouse hovers over the square

let s = document.getElementById("square")
s.addEventListener("mouseover", mouseOver);

function mouseOver() {
    s.style.backgroundColor="blue";
}

//The square's color will change Red when the mouse button is held down over the square
s.addEventListener("mousedown", mouseDown);

function mouseDown(){
    s.style.backgroundColor="red";
}

//The square's color will change Yellow when the mouse button is let go over the square
s.addEventListener("mouseup", mouseUp);

function mouseUp(){
    s.style.backgroundColor="yellow";
}

//The square's color will change Green when the mouse is double clicked in the square
s.addEventListener("dblclick", dblClick);

function dblClick(){
    s.style.backgroundColor="green";
}

//The square's color will change Orange when the mouse scroll is used somewhere in the window (not just over the square)
document.addEventListener("wheel", Wheel);

function Wheel(){
    s.style.backgroundColor="orange";
}

//You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color.

document.addEventListener("keydown", function(event){
    switch(event.code){
        case"KeyR":
            s.style.backgroundColor="red";
            break;
        case "KeyY":
            s.style.backgroundColor="yellow";
            break;
        case "KeyO":
            s.style.backgroundColor="orange";
            break;
        case "KeyG":
            s.style.backgroundColor="green";
            break;
        case "KeyB":
            s.style.backgroundColor="blue";
            break;
        case "KeyP":
            s.style.backgroundColor="purple";
            break;
        case "KeyT":
             s.style.backgroundColor="teal";
            break;
        case "KeyI":
             s.style.backgroundColor="indigo";
            break;
        case "KeyM":
             s.style.backgroundColor="Magenta";
            break;
    }
})