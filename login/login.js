let user= document.getElementById("username");
let password=document.getElementById("password");

let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/ 
 

var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

function validate(){
    if(user.value==""){     

        document.getElementById("inform").innerHTML="please enter your user name";
        user.style.border="2px solid red";
        return false;
    }else if(!regexp.test(user.value))
    {
        document.getElementById("inform").innerText="Your user Name is your Registerd mail ";
        user.style.border="2px solid red";
        return false;
    }else if(password.value==""){
        document.getElementById("informer").innerHTML="please enter your password";
        password.style.border="2px solid red";
        return false;
    }else if(!regularExpression.test(password.value)){
        document.getElementById("informer").innerHTML="please follow the password conditions";
        password.style.border="2px solid red";
         
   return false;

}








}
function checks(){
    user.style.border="none";
    document.getElementById("inform").innerText="";
    
}