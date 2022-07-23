var bonusData = [
    {image:"https://images.carbmanager.com/XTiKp940RdWEG51OwzXUszDukcY5rRcaYtccnZYDvKY/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzhmMGZiNmE3LTYxNmYtMGFkOC1mM2VhLTllNGI0MGE4MGI0My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hMTE2MmZjNS0xMDQ0LTRmZGQtOGUzYS03OWRiMjZhMTliNGU",name:"Keto Alfredo Chicken Bake",price:"🕑35min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/MivyF_IcpRsUUf4kQqaU0GElw4Tdesx-PbSw7B_cIRw/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjU3OTI5ZjA0LWI2OTgtNGM3OS1hZmZlLTIxYWI1ODg1YWNlZC5qcGc_YWx0PW1lZGlh",name:"Keto Chicken and Cauliflower Cheese Bake",price:"🕑50min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/uOJsck0LWja1bjZi56Lj8_lbjDWaMr1F1Sx08vG32VA/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmUyMmIyYjVlLTdiYjItNGE0Mi1iZDRiLTY2M2I5NDkxYTI0MC5qcGc_YWx0PW1lZGlh",name:"Keto Italian Beef With Cabbage Noodles",price:"🕑1h 35min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/uvrSsX8CGyUh3OdMi8WJhfCKsOZq2SoufReWMARHdTs/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzFkYzk0MjVkLWVhNTYtYzM3ZC05MTE4LWNjYmI0ZTIxNmI1My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kYjgwYjg0NC0yNDhhLTQxOGUtYjMyOC1hODk2NDFlYjBmZjQ",name:"Keto Philly Cheesesteak Skillet",price:"🕑30min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/fMPqsPu8wLy2FhySM9vDNdGMSIDRpe9KO8T01fmcku8/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzAyODUyNzViLTQ0ZjQtNWVkZC1jMzRjLWQ4YWQ0MmE0MWFhMy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj01NGRjMWRhMi1jMTg2LTQ1ZTEtYjMzOC1iMTIzNmVkYjdiNTU",name:"Keto Shepherd's Pie",price:"🕑43min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/dyCo3G25ek-py1NLtABnga6A8mJplNELyaIL-nQ5ODg/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2FjNjkxMWJmLWFjMjgtZDUzMi1lYmJhLTdlYTU3YjRjMjY2ZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hODM4OGZiYS02NGNlLTQ5N2ItYThjYS02NjQ1YzUyMDk5ODc",name:"Ultimate Keto Cheesy Egg and Spinach Cup",price:"🕑40min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/ee1sXKXlYYN4mYbLJy8iG1geKMqGJ8mOMtjOYHJBcy0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjIyZWE3MWM0LWI1NGUtNDc0ZS1hMDNlLWM4MmE5OGNkYWEzYS5qcGc_YWx0PW1lZGlh",name:"Keto Bacon Wrapped Chicken Thighs With Cheddar Sauce",price:"🕑36min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/GHdB_nb6oe9iAc0voeDe_vbvGrc4AddRHmAPP4SFPdQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjFkNWM5ZDMxLWU0YzctNGNiOC05ZTJjLTUzMzc4Y2NiNDc0Yi5qcGc_YWx0PW1lZGlh",name:"Low Carb Chicken Jalapeno Chili",price:"🕑29min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
   
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
    {image:"https://images.carbmanager.com/fl3l3bodm8MAbUwSvrs2SP8sKyUUSecWqjKGWVhq36E/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQzMGZjZTA2LWE4MGYtNDJkNC1hNTM5LWJiZGMwNTE5ZjYwMi5qcGc_YWx0PW1lZGlh",name:"Best Keto Salmon Burger",price:"🕑1h 35min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/_CeRJ-zzdg84E8f6JZ7nCpQhvQyy36ElnbOxFxkyOU8/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjMwMWFmZTAwLTNmNDEtNGY3Mi1iYzgzLWU1ZDFlMjFiNTkyNC5qcGc_YWx0PW1lZGlh",name:"Best Vegan Keto Burger",price:"🕑30min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/QJnwsim0xi_IOtmda2dAlttsBJwlHhI4Qvoxo35JLAo/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjliODY3YjY5LTNlODEtNDQwYi1hZjI1LTk2YzczY2FkMmY2ZC5qcGc_YWx0PW1lZGlh",name:"Mediterranean Keto Lamb Burger",price:"🕑35min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/I4ky2rkCyGw-baE6igO8IZOqevdQDMLplC1XF92oAEw/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmNjZDkwMTc0LTUzY2MtNDBkNi04NTQwLTg4ZTNlY2EyYWRlNi5qcGc_YWx0PW1lZGlh",name:"Keto Saucy BBQ Brisket",price:"🕑50min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/sczY189HzVBsxfvS8bApxV4_UVcarbUevduckpFeD_w/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjk5OTdjMjM3LWZjZDUtNDY4OC1hOGM4LTMwMzk2Y2JiMjNkMi5qcGc_YWx0PW1lZGlh",name:"Best Keto Turkey Smash Burgers",price:"🕑43min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/K28iCVYYIa9oFBK_rw7pnSjMZbFrZ4Ki31OfRx8S6Gc/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjA2OWEyNTAzLWFlYjItNDA5Zi05MTRlLTRhNTYzMzA2ZGI0NC5qcGc_YWx0PW1lZGlh",name:"Keto Vegan BBQ Meatballs",price:"🕑40min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/0oNXGKxkLljyw71ktfEJM5Z2_Bg_mK7hkw9DlKGfiDs/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjNjY2JkMTYyLWVhNjYtNGRlNy04N2QwLThhMDc5NWQxZDk4NC5qcGc_YWx0PW1lZGlh",name:"Keto Chicken Burgers with Chermoula Aioli",price:"🕑8min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/QCxJpL3uyqpEA4QzVt3lNrqZZkUOp1Bu0q-HUb21dZM/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjRiNmNmOTgzLWM1OGEtNDdlNC1iNDNmLTFkMWZmODgxOTMyYy5qcGc_YWx0PW1lZGlh",name:"Keto Blackened BBQ Chicken",price:"🕑37min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    {image:"https://images.carbmanager.com/8ryDiq6eeEH1dJl4iRHX7Ujlh5rQVksdBCgO-9Jq2vM/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2FiYjUxOGRhLTA3MDMtNDY0My01MjE3LTU4NGY1MWUyYjNiNy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj05ZDNmNDA4ZS1iOTdlLTRiMzItYjJiYS1mMzNjN2NhNGNhZjc",name:"Keto Alfredo Chicken Crust Pizza",price:"🕑60min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/-of3YSU2UjQ6YL5eY9mfpLkJRwiZjswYAD1hg5spZNc/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2Y2MTdiMTlhLTk5ZWQtYTA0Zi00MjI5LThjYWViNTM2ZjNkNi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lMTAxNWM5ZS01YTQ1LTQ1N2EtYThmYi1mZjU0OTY4ZTk0NDk",name:"Keto Pork and Green Bean Meal Prep",price:"🕑55min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/J04sxySWM5HsXVj_J4AVDrekB05lV4eusJMmpKEL228/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2MzMWQ3MzJmLWYxZDctOTIxMS03YmI4LWIwZjBiZWFhN2ZhNi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj04OWUxNWNjZi1iNWVkLTRkYWEtOTcyYy0xMDkxMWY0YmY5YmQ",name:"Keto Spicy Chicken And Sausage Stew",price:"🕑3h 29min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/0ygKBG1ag6gKAGCfNUyf1CQpx1qhvwI9JkpQmyUoLqQ/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2VmMTJmNDVmLTUxNmEtYjM1MS0zOTI2LTRmYzdlMzE2NzZjMy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1iMTc1Nzg4MS1kOGI1LTQzZTUtOTAyYy0zMjM5NmZkNGJmMDY",name:"Keto Spiced Pork Lettuce Wraps",price:"🕑43min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/D0I0Sh1nFO3Qux_VbUS5y571uewz80-uFX7AysIMEjo/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmI0MzMwODQwLTM3OTAtNDQwMC04MjFmLWMzYzZlNDlmMDAwNS5qcGc_YWx0PW1lZGlh",name:"Low Carb Spaghetti Squash Carbonara",price:"🕑26min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/YTy-EauDVYlUkLJER4Qv0NtFdmNcfH6PSroG1AFKaSM/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2M5ZjNiOThiLTQ2ZTktODkwNS0wYmUxLTBkNjhiY2JiNzYzOC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1jN2Y3Mzc5ZC03NWY0LTQ2MjMtYjZlNy1kMmY2NWFiZTUxNjU",name:"Low Carb Tabbouleh Salad With Feta Cheese",price:"🕑15min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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
