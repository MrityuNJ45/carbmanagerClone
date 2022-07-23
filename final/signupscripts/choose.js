let dis=(e)=>{
    e.preventDefault()
    window.location.href="/signuppage/currentweight.html"
}
document.querySelector("#btn").addEventListener("click",dis);
let show=(e)=>{
e.preventDefault();
   document.querySelector("#first>div").style= "border:1px solid #1bc98e";
   document.querySelector("#first>div").style= "color:#1bc98e";
}
document.querySelector("#first>div").addEventListener("click",show)