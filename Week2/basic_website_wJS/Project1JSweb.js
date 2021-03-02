var navBar = document.createElement('nav');
navBar.setAttribute("id", "myNav");
document.body.append(navBar);

const NAV = document.getElementById('myNav');

    let a = document.createElement('a');
    a.setAttribute("href", "https://www.facebook.com");
    let y = document.createTextNode("Facebook");
    a.appendChild(y);
    NAV.appendChild(a).style.paddingRight = "50px";

    let b = document.createElement('a');
    b.setAttribute("href", "https://www.instagram.com");
    let z = document.createTextNode("Instagram");
    b.appendChild(z);
    NAV.appendChild(b).style.paddingRight = "50px";

    let c = document.createElement('a');
    c.setAttribute("href", "https://www.twitter.com");
    let q = document.createTextNode("Twitter");
    c.appendChild(q);
    NAV.appendChild(c).style.paddingRight = "50px";





var newHead = document.createElement('H1');
newHead.textContent = "This is My Project 1 Assignment"
document.body.append(newHead);

var newPara = document.createElement('p');
newPara.textContent = "For FSW110 in JavaScript"
document.body.append(newPara);

var List = document.createElement('ul');
List.setAttribute("id", "myUL");
document.body.append(List);

function words(gohere) {
    let li = document.createElement('li');
    li.textContent = gohere;
    return li;
}

const uL = document.getElementById('myUL');
uL.appendChild(words("Hello Prof."));
uL.appendChild(words("Hope you have a good day"));
uL.appendChild(words("See you next week"));

var footer = document.createElement('footer')
footer.textContent = "Due Date Feb. 28th, 2021. Goodbye February."
document.body.append(footer)