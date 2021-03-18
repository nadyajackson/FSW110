document.form2.addEventListener("submit", Submission)

//news

function Newsletter(){
    if (document.getElementById("yes").checked = true){
        return document.getElementById("yes").value;
    }
    else if (document.getElementById("no").checked = true){
        return document.getElementById("no").value;
    }
}


function Travel(){
    if (document.getElementById("Paris").checked = true){
        return document.getElementById("Paris").value;
    }
    else if (document.getElementById("London").checked = true){
        return document.getElementById("London").value;
    }
    else if (document.getElementById("Denali").checked = true){
        return document.getElementById("Denali").value;
    }
    else if (document.getElementById("Rome").checked = true){
        return document.getElementById("Rome").value;
    }
    else if (document.getElementById("Athens").checked = true){
        return document.getElementById("Athens").value;
    }
}

/* function Allergy1(){
    if (document.getElementById("Lactose-Free").checked = true){
        return document.getElementById("Lactose-Free").value;
    }
    else{
        return " "
    }}
function Allergy2(){
    if (document.getElementById("Gluten-Free").checked = true){
        return document.getElementById("Gluten-Free").value;
    }
    else{
        return " "
    }}
function Allergy3(){
    if (document.getElementById("Nuts").checked = true){
        return document.getElementById("Nuts").value;
    }
    else{
        return " "
    }}
function Allergy4(){
    if (document.getElementById("Vegan").checked = true){
        return document.getElementById("Vegan").value;
    }
    else{
        return " "
    }} */

    var allergyList = document.querySelectorAll('[allergies="checked"]') !== null;
    var results = allergyList.value;

function Submission(){
    alert('Name: ' + document.getElementById("fname").value +' '+document.getElementById("lname").value + 
            "\nAge: " + document.getElementById("age").value +
            "\nNewsletter Sign-Up: " + Newsletter() +
            "\nDestination: " + Travel() +
            "\nAllergies: " + results +
            "\nHave a Safe Flight!!!"
    );
    document.getElementById("form").reset();
}
