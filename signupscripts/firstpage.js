
let nextPage= (e)=>{
    e.preventDefault();
    console.log("heklo")
    window.location.href="/signuppage/choose.html"
}
document.querySelector("#btn").addEventListener("click",nextPage);
let goBack=()=>{
    window.location.href="/login.html";
}