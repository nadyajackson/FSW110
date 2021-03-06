var i;
for (i=0; i<=9; i++) {
    var header1 = document.createElement('h1');
    header1.textContent = "Hello World";
    header1.setAttribute("id", "head");
    if (i % 2 == 0 ){
       header1.style.color = "purple";
    }
    else{
        header1.style.color = "green";
    }
    document.body.append(header1);
}

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
var l;

for (l=0; l < names.length; l++) {
    var par = document.createElement('p');
    par.textContent = names[l];
    document.body.append(par);
} 
