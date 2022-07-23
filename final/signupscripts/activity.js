let show=(e)=>{
    e.preventDefault()
    window.location.href="/signuppage/plan.html"
}
document.querySelector("#btn").addEventListener("click",show);
function showBorder(){
    document.querySelector("#show>div").style= "border:3px solid #1bc98e";
   document.querySelector("#show>div").style= "color:#1bc98e";
}