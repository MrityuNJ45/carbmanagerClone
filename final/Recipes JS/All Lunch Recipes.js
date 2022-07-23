var bonusData = [
    {image:"https://images.carbmanager.com/uOJsck0LWja1bjZi56Lj8_lbjDWaMr1F1Sx08vG32VA/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmUyMmIyYjVlLTdiYjItNGE0Mi1iZDRiLTY2M2I5NDkxYTI0MC5qcGc_YWx0PW1lZGlh",name:"Keto Italian Beef With Cabbage Noodles",price:"🕑37min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/dyCo3G25ek-py1NLtABnga6A8mJplNELyaIL-nQ5ODg/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2FjNjkxMWJmLWFjMjgtZDUzMi1lYmJhLTdlYTU3YjRjMjY2ZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hODM4OGZiYS02NGNlLTQ5N2ItYThjYS02NjQ1YzUyMDk5ODc",name:"Ultimate Keto Cheesy Egg and Spinach Cup",price:"🕑1h 25min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/GHdB_nb6oe9iAc0voeDe_vbvGrc4AddRHmAPP4SFPdQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjFkNWM5ZDMxLWU0YzctNGNiOC05ZTJjLTUzMzc4Y2NiNDc0Yi5qcGc_YWx0PW1lZGlh",name:"Low Carb Chicken Jalapeno Chili",price:"🕑18min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/pq67GULygOMNvKOhSslNRjCRsRSkhssR2lr4dWFaqOE/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjhiNDBiMjk2LWU1MmQtNGY5ZC05YTJjLTM4YjdhYzA1ZmY4MC5qcGc_YWx0PW1lZGlh",name:"Best Keto Mug Biscuit",price:"🕑42min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
    {image:"https://images.carbmanager.com/kROjeA6yOufIOCC55KDKA2vbfWuosySsj_H94S5P90Y/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzIzZjkzNjBkLTQ4YTUtN2YyMS1mNDI5LTllOGQyMGJhM2M3NC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0xOWEyOGE0Ni01NjJjLTQyN2EtOWE1Zi1hYWJiYWYxMDYyYjg",name:"Low Carb Creamy Balsamic Chicken With Sundried Tomatoes",price:"🕑2h 28min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/ac6KmnfqvAExQifwMN-glubYKW2XMRnXVKpzni8yZqo/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjQ4NmFkY2ZiLTg4YTktNDdmNS1hZjY0LTJmOGNhZjgyNjQzYi5qcGc_YWx0PW1lZGlh",name:"Keto Lemon Butter Paprika Shrimp",price:"🕑50min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/Ay0wypfAmUnxBB1lE5JoZVo7YAij6gfWhqSzvyioLiY/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2FjZmQzMDU0LWVhZTgtZjgxZC1lZTVjLWE4OTM5ZWY4YmViYy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj04Mzg0MDA3Yi1lY2IyLTRiNDYtOGViNi1kYWE1OWM4ZmE0NDQ",name:"Keto Tuna Cakes",price:"🕑36min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/TuptYZ-Dk9ZBH8oNaWVvMykiGRaNiXj4ejbYkZGwUIg/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjQ0MGE2Njk3LWU0MjEtNDBkMi05ZGM4LTc5M2VmMTc1OWNiNy5qcGc_YWx0PW1lZGlh",name:"Keto Chicken Cordon Bleu",price:"🕑29min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
   
]

var arrObj = JSON.parse(localStorage.getItem("cartData")) || [];

bonusData.map(function(elem){
    var img = document.createElement("img");
    img.src = elem.image;

    var name = document.createElement("h4");
    name.setAttribute("id","namee");
    name.innerText=elem.name;

    var price = document.createElement("h1");
    price.setAttribute("id","pricee");
    price.innerText=elem.price;

    var savePrice = document.createElement("p");
    savePrice.setAttribute("id","saveprice");
    savePrice.innerText = elem.save;

    var wasPrice = document.createElement("p");
    wasPrice.setAttribute("id","wasprice");
    wasPrice.innerText = elem.wasPrice;

    var btn = document.createElement("button");
    btn.innerText="🔥307 Calories";
    btn.addEventListener("click",function(){
        mufunction(elem);
        
    });
   
    // var savePrice = document.createElement("p");
    // savePrice.append(save);
    
    var bonusBox = document.createElement("div");
    
    var x = document.querySelector("#bonus-deals");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})





var bonusData = [
    {image:"https://images.carbmanager.com/XIZt-HK7obE7R2XNB7CSKVMfKeyW6N2qCqE7THiXsT8/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjcxNzZjMTIwLTM5ZTQtNGU4NS05MTdlLWEzOTg5NTRiZWNiYS5qcGc_YWx0PW1lZGlh",name:"AIP Peach and Ginger Chicken Wings",price:"🕑1h 35min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/fl3l3bodm8MAbUwSvrs2SP8sKyUUSecWqjKGWVhq36E/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQzMGZjZTA2LWE4MGYtNDJkNC1hNTM5LWJiZGMwNTE5ZjYwMi5qcGc_YWx0PW1lZGlh",name:"Best Keto Salmon Burger",price:"🕑30min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/_CeRJ-zzdg84E8f6JZ7nCpQhvQyy36ElnbOxFxkyOU8/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjMwMWFmZTAwLTNmNDEtNGY3Mi1iYzgzLWU1ZDFlMjFiNTkyNC5qcGc_YWx0PW1lZGlh",name:"Best Vegan Keto Burger",price:"🕑35min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/QJnwsim0xi_IOtmda2dAlttsBJwlHhI4Qvoxo35JLAo/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjliODY3YjY5LTNlODEtNDQwYi1hZjI1LTk2YzczY2FkMmY2ZC5qcGc_YWx0PW1lZGlh",name:"Mediterranean Keto Lamb Burger",price:"🕑50min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/sczY189HzVBsxfvS8bApxV4_UVcarbUevduckpFeD_w/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjk5OTdjMjM3LWZjZDUtNDY4OC1hOGM4LTMwMzk2Y2JiMjNkMi5qcGc_YWx0PW1lZGlh",name:"Best Keto Turkey Smash Burgers",price:"🕑43min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/0oNXGKxkLljyw71ktfEJM5Z2_Bg_mK7hkw9DlKGfiDs/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjNjY2JkMTYyLWVhNjYtNGRlNy04N2QwLThhMDc5NWQxZDk4NC5qcGc_YWx0PW1lZGlh",name:"Keto Chicken Burgers with Chermoula Aioli",price:"🕑40min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/QCxJpL3uyqpEA4QzVt3lNrqZZkUOp1Bu0q-HUb21dZM/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjRiNmNmOTgzLWM1OGEtNDdlNC1iNDNmLTFkMWZmODgxOTMyYy5qcGc_YWx0PW1lZGlh",name:"Keto Blackened BBQ Chicken",price:"🕑8min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/Ke07u8W-4rfIhig6-Wo_zXLXjK5LKSQ2X-Q28aRBmhY/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJmNmYxNDc3LTlmNGQtNGNkMi05YmM2LThlNzE0YjlkYzI5MS5qcGc_YWx0PW1lZGlh",name:"Keto Crock Pot BBQ Pulled Chicken",price:"🕑37min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
]

var arrObj = JSON.parse(localStorage.getItem("cartData")) || [];

bonusData.map(function(elem){
    var img = document.createElement("img");
    img.src = elem.image;

    var name = document.createElement("h4");
    name.setAttribute("id","namee");
    name.innerText=elem.name;

    var price = document.createElement("h1");
    price.setAttribute("id","pricee");
    price.innerText=elem.price;

    var savePrice = document.createElement("p");
    savePrice.setAttribute("id","saveprice");
    savePrice.innerText = elem.save;

    var wasPrice = document.createElement("p");
    wasPrice.setAttribute("id","wasprice");
    wasPrice.innerText = elem.wasPrice;

    var btn = document.createElement("button");
    btn.innerText="🔥307 Calories";
    btn.addEventListener("click",function(){
        mufunction(elem);
        
    });
   
    // var savePrice = document.createElement("p");
    // savePrice.append(save);
    
    var bonusBox = document.createElement("div");
    
    var x = document.querySelector("#bonus-dealss");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})





var bonusData = [
    {image:"https://images.carbmanager.com/rFIszXWa8x-zqZHmkZ1gCqsYaXINQEFTczD9agzXLU8/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzE0ZmEzZjQwLTY2NTQtYWRjMC05MzdhLTUyYWUzNWIxMjYyOS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1mZmRhN2MwZS01N2NjLTQ2MzEtYjYwMy1kN2JlNTRhZGFkYTM",name:"Keto Bunless Pub Cheeseburger",price:"🕑60min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/ow7-JrsUuCBoByJ70vNR0foFRp-mjQost9903eL15HY/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2E3YjhmODhjLTE5MzEtOTUyNC1hZDI3LWNlNjI2NzdmMTIxNS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj05MmI2NmE5NC04N2IxLTQ1MDUtYWNhNy01ZThjMmI2N2IwZWM",name:"Low Carb Fathead Ham And Cheese Pockets",price:"🕑55min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/2LI54vel5exAOPpf7XFWId5ywr2RXnV842kDeWmlGso/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzBiODFhZTU3LWYxZjItY2E4Mi1mZGZhLTA2ODg2MzgzZmNlZS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lMzIzMjAyOS1hNWE3LTRhMTgtYmUzYy02OWUxNTU2YzI2NTk",name:"Low Carb Butternut Squash Soup",price:"🕑3h 29min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/YMrXphQA6i7NiDBHY9-UAW_1tMr_mXSm9ccX0ZA0xbk/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzNkYWYyMWYwLTZjYmItOWVkYy0yNGM3LWZiMWU2ZTYwMDAxNi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj02NjYxMjU5OS1mNjNiLTQ2OGYtYWZiMS0xMDBhZmJkYWQzMmE",name:"Keto Barbacoa Bowls",price:"🕑43min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/HynmdfSFEc-SIGOz_yY3mQA76TN-mksXsrWmXpcbYpA/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzkxODA4Yzk5LWFiNTEtMGNhYi02YjNlLWZmZjcyODAzOGEwYi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0zMmRjMzQ4Ni01ZGVmLTQ2NTgtOTQ3OC1kNGI2YmEwMWVjMzQ",name:"Keto White Chicken Chili",price:"🕑26min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/svubLFlptyxY6ELRRKfYL0bU3TBEpQKgt95Jo2EIzMs/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2VkZWI0MGEyLWY5MjMtMDgyYy04OWFjLTVlZDBlMjUxMWI3MC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1jNDIxNzliYi1mM2NkLTRhZTItOTczZi1lN2ExYjc2ODYwNWM",name:"Low Carb Curried Cauliflower Soup",price:"🕑15min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
]

var arrObj = JSON.parse(localStorage.getItem("cartData")) || [];

bonusData.map(function(elem){
    var img = document.createElement("img");
    img.src = elem.image;

    var name = document.createElement("h4");
    name.setAttribute("id","namee");
    name.innerText=elem.name;

    var price = document.createElement("h1");
    price.setAttribute("id","pricee");
    price.innerText=elem.price;

    var savePrice = document.createElement("p");
    savePrice.setAttribute("id","saveprice");
    savePrice.innerText = elem.save;

    var wasPrice = document.createElement("p");
    wasPrice.setAttribute("id","wasprice");
    wasPrice.innerText = elem.wasPrice;

    var btn = document.createElement("button");
    btn.innerText="🔥411 Calories";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });
    // var savePrice = document.createElement("p");
    // savePrice.append(save);
    
    var bonusBox = document.createElement("div");
    
    var x = document.querySelector("#bonus-dealsss");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})
