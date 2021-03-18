document.getElementById('form').style.margin= "20px";
document.getElementById('fname').style.marginBottom="20px";
document.getElementById('lname').style.marginBottom="20px";
document.getElementById('email').style.marginBottom="20px";

document.getElementById('Submit').addEventListener("click", Submit);
function Submit(){
    alert('Name: ' + document.getElementById("fname").value +
    ' '+document.getElementById("lname").value + "\nEmail: " +
        document.getElementById("email").value
    );
    document.getElementById("form").reset();
}