//validate module
var validate = (function(){
    var valid=true;
    
    //create private and public functions/objects/variables to validate the form
    
    var validateProfile = function(){
        var valid=true;
        //display warning if name is not entered
        if(profileForm.name.value === ""){
        document.getElementById('nameWarning').innerHTML="*Please enter your name*";
            valid = false;
        }

        //display warning if email is not entered
        if(profileForm.email.value == ""){
            document.getElementById('emailWarning').innerHTML="*Please enter your e-mail*";
            valid=false;
        }

        //display warning if message is not entered
        if(profileForm.message.value == ""){
            document.getElementById('messageWarning').innerHTML="*Please enter your message*";
            valid=false;
        }

        //display warning if password is not entered
        if(profileForm.password.value == ""){
            document.getElementById('passwordWarning').innerHTML="*Please enter your password*";
            valid=false;
        }

       if(valid){
            alert("Thank you");
        }

        return valid;
    };
    return {
            validateProfile : validateProfile
            
    };
    
    }());
