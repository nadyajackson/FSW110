var submitform = document.getElementById('Submit');
submitform.addEventListener('click', Submission)
function Submission(e){
    e.preventDefault()

    document.getElementById('Results').innerHTML = "To-Do List:" + "<br />";

        var par1 = document.createElement('p');
        par1.setAttribute("id", "para1");
        document.getElementById('Results').append(par1);
        document.getElementById("para1").innerHTML= document.getElementById('todo1').value;

    var delete1 = document.createElement("INPUT");
    delete1.setAttribute("type", "button");
    delete1.setAttribute("id", "deleted1");
    delete1.setAttribute("name", "deleted1");
    delete1.setAttribute("value", "delete");
    delete1.addEventListener("click", remove)
    function remove(){
        document.getElementById('para1').style.display = "none";
    }
    document.getElementById('para1').append(delete1);


    var par2 = document.createElement('p');
    par2.setAttribute("id", "para2");
    document.getElementById('Results').append(par2);
    document.getElementById("para2").innerHTML= document.getElementById('todo2').value;


    var delete2 = document.createElement("INPUT");
    delete2.setAttribute("type", "button");
    delete2.setAttribute("id", "deleted2");
    delete2.setAttribute("name", "deleted2");
    delete2.setAttribute("value", "delete");
    delete2.addEventListener("click", remove2)
    function remove2(){
        document.getElementById('para2').style.display = "none";
    }
    document.getElementById('para2').append(delete2);

    var par3 = document.createElement('p');
    par3.setAttribute("id", "para3");
    document.getElementById('Results').append(par3);
    document.getElementById("para3").innerHTML= document.getElementById('todo3').value;

    var delete3 = document.createElement("INPUT");
    delete3.setAttribute("type", "button");
    delete3.setAttribute("id", "deleted3");
    delete3.setAttribute("name", "deleted3");
    delete3.setAttribute("value", "delete");
    delete3.addEventListener("click", remove3)
    function remove3(){
        document.getElementById('para3').style.display = "none";
    }
    document.getElementById('para3').append(delete3);

    var par4 = document.createElement('p');
    par4.setAttribute("id", "para4");
    document.getElementById('Results').append(par4);
    document.getElementById("para4").innerHTML= document.getElementById('todo4').value;

    var delete4 = document.createElement("INPUT");
    delete4.setAttribute("type", "button");
    delete4.setAttribute("id", "deleted4");
    delete4.setAttribute("name", "deleted4");
    delete4.setAttribute("value", "delete");
    delete4.addEventListener("click", remove4)
    function remove4(){
        document.getElementById('para4').style.display = "none";
    }
    document.getElementById('para4').append(delete4);

    var par5 = document.createElement('p');
    par5.setAttribute("id", "para5");
    document.getElementById('Results').append(par5);
    document.getElementById("para5").innerHTML= document.getElementById('todo5').value;

    var delete5 = document.createElement("INPUT");
    delete5.setAttribute("type", "button");
    delete5.setAttribute("id", "deleted5");
    delete5.setAttribute("name", "deleted5");
    delete5.setAttribute("value", "delete");
    delete5.addEventListener("click", remove5)
    function remove5(){
        document.getElementById('para5').style.display = "none";
    }
    document.getElementById('para5').append(delete5);

    document.getElementById("form").reset();
}