let array=JSON.parse(localStorage.getItem("user-data"))||[];
function showData(e){
    e.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    makeObj(name,email,password);
}
class userObj{
    constructor(n,e,p){
        this.name=n;
        this.email=e;
        this.password=p;
    }
    signup(p,email,password){
        
        let isvalidate = this.emailvalidate(email) && this.passvalidate(password);
        console.log(p)
        if(isvalidate){
            alert("You are successfully signup"); 
            array.push(p);
           localStorage.setItem("user-data",JSON.stringify(array));
           window.location.href="/login.html"
        } else {
            alert("You are already signup"); 
        }
    }
    emailvalidate(email){
        let filtered= array.filter(function(el){
            return el.email==email;
        })
        if(filtered.length>0){
            return false;
        }
        return true; 
     }
     passvalidate(password){
        let filtered= array.filter(function(el){
            return el.password==password;
        })
        if(filtered.length>0){
            return false;
        }
        return true;
     }
}
function makeObj(name,email,pass){
    let p = new userObj(name,email,pass);
   p.signup(p,email,pass);
}
document.querySelector("#btn").addEventListener("click",showData);
