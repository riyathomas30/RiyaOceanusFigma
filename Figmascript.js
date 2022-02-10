
function getLoginDetails() {
    let getEmail = document.getElementById('email');
    let getPassword = document.getElementById('password');
    document.getElementById("loginData").innerHTML = ' EmailId: ' + getEmail.value + '\n Password:' + getPassword.value;


}