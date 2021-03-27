// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

var x = document.getElementById("submit-me");

var oof = document.getElementById('name');
oof.setAttribute("name", "user_name");


document.querySelector('#name').setAttribute("id", "first-name");



x.addEventListener('submit', stop);
function stop(e){
    e.preventDefault()
};