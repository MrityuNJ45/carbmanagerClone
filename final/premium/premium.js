let append=(id)=>{
    let container = document.querySelector("#container");
    container.innerHTML = null;
    let img = document.createElement("img");
    img.src = `${id}.PNG`;

    console.log(img.src);
    container.append(img);
}