const names = ["Happy", "Sad", "Angry", "Laughter", "Cry"];
var i;

for (i=0; i < names.length; i++) {
  var headers = document.createElement('h2');
  headers.setAttribute("id", "header")
  headers.textContent = names[i];
  headers.classList.add("border")
  headers.style.fontSize = "20px";
  headers.style.fontWeight = "lighter";
  headers.style.fontFamily = "sans-serif";
  headers.style.color = "cornflowerblue";
document.body.append(headers);
}
