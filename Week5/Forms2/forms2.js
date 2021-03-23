document.form2.addEventListener("submit", Submission)

//news

function Newsletter(name) {
    const letter = document.querySelectorAll(`input[name="${name}"]:checked`);
    let choice = [ ];
        letter.forEach((radio) =>{
            choice.push(radio.value);
        });
        return choice
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
            "\nNewsletter Sign-Up: " + Newsletter("news") +
            "\nDestination: " + document.getElementById("Destination").value +
            "\nAllergies: " + getCheckboxes('allergies') +
            "\nHave a Safe Flight!!!"
    );
    document.getElementById("form").reset();
}
