var newHead = document.createElement('H1');
newHead.textContent = "Welcome to my JS site"
document.body.append(newHead);

var linebreak = document.createElement('br');
document.body.appendChild(linebreak);

var newPara = document.createElement('p');
newPara.textContent = "All of this was created with Javascript";
document.body.append(newPara);

var orderedList = document.createElement('ol');
orderedList.setAttribute("id", "myOL");
document.body.append(orderedList);

function items(gohere) {
    let li = document.createElement('li');
    li.textContent = gohere;
    return li;
}

const OL = document.getElementById('myOL');
OL.appendChild(items("Who's on First"));
OL.appendChild(items("What's on second"));
OL.appendChild(items("I Don't Know is on Third"));