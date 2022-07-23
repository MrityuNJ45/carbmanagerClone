
let array=JSON.parse(localStorage.getItem("user-data"));
function showData(e){
    e.preventDefault();
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    makeObj(email,password);
}
class userObj{
    constructor(e,p){
        this.email=e;
        this.password=p;
    }
    signup(email,password){
        
        let isvalidate = this.emailvalidate(email) && this.passvalidate(password);
        
        if(isvalidate){
            alert("You are successfully login"); 
            window.location.href="index.html";
        } else {
            alert("Your given credential is wrong"); 
        }
    }
    emailvalidate(email){
        let filtered= array.filter(function(el){
            return el.email==email;
        })
        if(filtered.length>0){
            return true;
        }
        return false; 
     }
     passvalidate(password){
        let filtered= array.filter(function(el){
            return el.password==password;
        })
        if(filtered.length>0){
            return true;
        }
        return false;
     }
}
function makeObj(email,pass){
    let p = new userObj(email,pass);
   p.signup(email,pass);
}
document.querySelector("#btn").addEventListener("click",showData);
let goBack=()=>{
    window.location.href="/signuppage/firstpage.html";
}