
let nextPage= (e)=>{
    e.preventDefault();
    window.location.href="/signuppage/choose.html"
}
document.querySelector("#btn").addEventListener("click",nextPage);
let goBack=()=>{
    window.location.href="login.html";
}