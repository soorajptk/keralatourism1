let firstName = document.getElementById("Firstname");
let  lastName = document.getElementById("lastname");
let mail= document.getElementById("email");
let address= document.getElementById("Address");
let mob = document.getElementById("mobileno");


function validate(){
                
    // checking firstName valid
    let x=firstName.value; 
    let firstlettername = x.charAt(0);  
    
    let v=lastName.value; 
    let lastlettername = v.charAt(0);  
    

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/ 
    

 if(firstName.value.trim() =="")
{
    firstName.setAttribute("placeholder","please enter your name");
    firstName.style.border="2px solid red";
     return false;
}
else if(firstlettername != firstlettername.toUpperCase())
  {
    document.getElementById("textname").innerHTML="first letter must be capital";
    firstName.style.border="2px solid Red";
    return false;
  }
  else if(lastName.value.trim() =="")
{
    lastName.setAttribute("placeholder","please enter your name");
    lastName.style.border="2px solid red";
    return false;
}else if(lastlettername != lastlettername.toUpperCase())
  {
    document.getElementById("textname1").innerHTML="first letter must be capital";
    lastName.style.border="2px solid Red";
    return false;
}else  if(address.value.trim()==""){
        address.setAttribute("placeholder","please enter your Address");
        address.style.border="2px solid red";
        return false;
}else if(mail.value.trim() =="")
      {
          mail.setAttribute("placeholder","please enter your mail id");
          mail.style.border="2px solid red";
          return false;
}else if(regexp.test(mail.value))
    {
        return true;
    }else{
        document.getElementById("mail").innerText="your email is not valid";
        mail.style.border="2px solid red";
        return false;
    }
        
        //mobilenum
        if(mob.value.trim() =="")
        {
            mob.setAttribute("placeholder","please enter your mobile num");
            mob.style.border="2px solid red";
            return false;
        }else{
                let y = mob.value;
                let r = y.replace(/-/g,"");
                let z = y.replace(/\./g,"");
            
                if(isNaN(r) && isNaN(z)){

                    document.getElementById("mobile").innerHTML="it is Not a number";
                    mob.style.border="2px solid red";
                    return false;
               }
                 
            }
              let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if(phoneno.test(mob.value)){
                return true;
            }else{
                document.getElementById("mobile").innerHTML="plz follow this format 860-608-4471 &nbsp or &nbsp 860.608.4471";
                  mob.style.border="2px solid red";
                return false;
            }
    




}




// checking input field text changing


function change(){
    mail.style.border="none";
    document.getElementById("mail").innerHTML="";
}
function inputname(){
    firstName.style.border="none";
    document.getElementById("textname").innerHTML="";

}
function inputname1(){
    lastName.style.border="none";
    document.getElementById("textname1").innerHTML="";
}
function addrs(){
    address.style.border="none";
}
function mobchange(){
    mob.style.border="none";
    document.getElementById("mobile").innerHTML="";
    
}