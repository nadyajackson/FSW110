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
function getCheckboxes(name) {
    const allergyList = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [ ];
        allergyList.forEach((checkbox) =>{
            values.push(checkbox.value);
        });
        return values
    }
function Submission(){
    alert('Name: ' + document.getElementById("fname").value +' '+document.getElementById("lname").value + 
            "\nAge: " + document.getElementById("age").value +
            "\nNewsletter Sign-Up: " + Newsletter() +
            "\nDestination: " + Travel() +
            "\nAllergies: " + getCheckboxes('allergies') +
            "\nHave a Safe Flight!!!"
    );
    document.getElementById("form").reset();
}
