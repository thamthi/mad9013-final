//form element events

//remove warning if name has input
document.getElementById("name").addEventListener("blur", function(){
    if(this.value !==""){
        nameWarning.innerHTML ="";
    }
});

//remove warning if e-mail has input
document.getElementById("email").addEventListener("blur", function(){
    if(this.value !== ""){
        emailWarning.innerHTML = "";
    }
});

//remove warning if message has input
document.getElementById("message").addEventListener("blur", function(){
    if(this.value !== ""){
        messageWarning.innerHTML = "";
    }
});

//remove warning if password has input
document.getElementById("password").addEventListener("blur", function(){
    if(this.value !== ""){
        passwordWarning.innerHTML = "";
    }
});

