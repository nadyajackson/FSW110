const names = ["Happy", "Sad", "Angry", "Laughter", "Cry"];
var i;

for (i=0, i <= names.length, i++) {
  var headers = document.createElement(h2);
  headers.setAttribute("id", "header")
  headers.textContent(names[i]);
  headers.classList.add("border")
  document.body.append(headers);
}

var x = document.getElementById("header");
x.style.fontSize = "20px";
x.style.fontWeight = "lighter";
x.style.fontFamily = "sans-serif";
x.style.color = "cornflowerblue";
