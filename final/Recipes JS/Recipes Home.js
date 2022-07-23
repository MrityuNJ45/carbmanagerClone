var bonusData = [
    {image:"https://images.carbmanager.com/uOJsck0LWja1bjZi56Lj8_lbjDWaMr1F1Sx08vG32VA/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmUyMmIyYjVlLTdiYjItNGE0Mi1iZDRiLTY2M2I5NDkxYTI0MC5qcGc_YWx0PW1lZGlh",name:"Keto Italian Beef With Cabbage Noodles",price:"🕑1h 35min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/uvrSsX8CGyUh3OdMi8WJhfCKsOZq2SoufReWMARHdTs/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzFkYzk0MjVkLWVhNTYtYzM3ZC05MTE4LWNjYmI0ZTIxNmI1My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kYjgwYjg0NC0yNDhhLTQxOGUtYjMyOC1hODk2NDFlYjBmZjQ",name:"Keto Philly Cheesesteak Skillet",price:"🕑30min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/XTiKp940RdWEG51OwzXUszDukcY5rRcaYtccnZYDvKY/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzhmMGZiNmE3LTYxNmYtMGFkOC1mM2VhLTllNGI0MGE4MGI0My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hMTE2MmZjNS0xMDQ0LTRmZGQtOGUzYS03OWRiMjZhMTliNGU",name:"Keto Alfredo Chicken Bake",price:"🕑35min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/MivyF_IcpRsUUf4kQqaU0GElw4Tdesx-PbSw7B_cIRw/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjU3OTI5ZjA0LWI2OTgtNGM3OS1hZmZlLTIxYWI1ODg1YWNlZC5qcGc_YWx0PW1lZGlh",name:"Keto Chicken and Cauliflower Cheese Bake",price:"🕑50min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/fMPqsPu8wLy2FhySM9vDNdGMSIDRpe9KO8T01fmcku8/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzAyODUyNzViLTQ0ZjQtNWVkZC1jMzRjLWQ4YWQ0MmE0MWFhMy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj01NGRjMWRhMi1jMTg2LTQ1ZTEtYjMzOC1iMTIzNmVkYjdiNTU",name:"Keto Shepherd's Pie",price:"🕑43min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/dyCo3G25ek-py1NLtABnga6A8mJplNELyaIL-nQ5ODg/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2FjNjkxMWJmLWFjMjgtZDUzMi1lYmJhLTdlYTU3YjRjMjY2ZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hODM4OGZiYS02NGNlLTQ5N2ItYThjYS02NjQ1YzUyMDk5ODc",name:"Ultimate Keto Cheesy Egg and Spinach Cup",price:"🕑40min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/tRE8c8rUIbp5_yvWYBRZrv5ovRuJ-Gq1SrxMbn3izcI/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2JmMDZiMjViLWM2YmQtNTk0OS01OGJhLTUwNzE3ZGZlMDM1Zi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lZDkyYjMxMC0wMDVlLTQyM2YtYWMxMC00MjQ4MDRiYThhNzI",name:"Best Keto Blueberry Muffins",price:"🕑8min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/ee1sXKXlYYN4mYbLJy8iG1geKMqGJ8mOMtjOYHJBcy0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjIyZWE3MWM0LWI1NGUtNDc0ZS1hMDNlLWM4MmE5OGNkYWEzYS5qcGc_YWx0PW1lZGlh",name:"Keto Bacon Wrapped Chicken Thighs With Cheddar Sauce",price:"🕑37min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    {image:"https://images.carbmanager.com/CA_y2qGcdnkT6-lDKwa0ShGRs61Ks1lJ0Hrrq-tPWt0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmE1NmYzMGRiLWE5NTgtNGZhYi04NjA2LWVkYzZjMzE3OTU2Ny5qcGc_YWx0PW1lZGlh",name:"Best Keto Microwave Poached Eggs and Bacon",price:"🕑37min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/CA_y2qGcdnkT6-lDKwa0ShGRs61Ks1lJ0Hrrq-tPWt0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmE1NmYzMGRiLWE5NTgtNGZhYi04NjA2LWVkYzZjMzE3OTU2Ny5qcGc_YWx0PW1lZGlh",name:"Best Keto Microwave Poached Eggs and Bacon",price:"🕑2h 28min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/fl3l3bodm8MAbUwSvrs2SP8sKyUUSecWqjKGWVhq36E/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQzMGZjZTA2LWE4MGYtNDJkNC1hNTM5LWJiZGMwNTE5ZjYwMi5qcGc_YWx0PW1lZGlh",name:"Best Keto Salmon Burger",price:"🕑50min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/_CeRJ-zzdg84E8f6JZ7nCpQhvQyy36ElnbOxFxkyOU8/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjMwMWFmZTAwLTNmNDEtNGY3Mi1iYzgzLWU1ZDFlMjFiNTkyNC5qcGc_YWx0PW1lZGlh",name:"Best Vegan Keto Burger",price:"🕑36min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/QJnwsim0xi_IOtmda2dAlttsBJwlHhI4Qvoxo35JLAo/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjliODY3YjY5LTNlODEtNDQwYi1hZjI1LTk2YzczY2FkMmY2ZC5qcGc_YWx0PW1lZGlh",name:"Mediterranean Keto Lamb Burger",price:"🕑29min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/I4ky2rkCyGw-baE6igO8IZOqevdQDMLplC1XF92oAEw/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmNjZDkwMTc0LTUzY2MtNDBkNi04NTQwLTg4ZTNlY2EyYWRlNi5qcGc_YWx0PW1lZGlh",name:"Keto Saucy BBQ Brisket",price:"🕑1h 25min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/g_xtOpZAzo96_e4E0GWf5BpjcJ52TJpochYSfv6-qp0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjM3MjliNWY4LWRmYmMtNDE2Ny05NTM3LTNlMmI2NDdlMGU0ZS5qcGc_YWx0PW1lZGlh",name:"Low Carb Classic Mac and Cheese",price:"🕑18min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/sczY189HzVBsxfvS8bApxV4_UVcarbUevduckpFeD_w/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjk5OTdjMjM3LWZjZDUtNDY4OC1hOGM4LTMwMzk2Y2JiMjNkMi5qcGc_YWx0PW1lZGlh",name:"Best Keto Turkey Smash Burgers",price:"🕑42min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    btn.innerText="🔥528 Calories";
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
    {image:"https://images.carbmanager.com/zBPCEdP3ylMX2ouQKRxnL5OYrsfWlUvydOhDCdyRq8U/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmUwMzk2YTdiLTlhMjYtNDhhNS05ODNmLTgwNGZiMjhhOGU5Yy5qcGc_YWx0PW1lZGlh",name:"Zero Waste Keto Walnut Milk and Granola",price:"🕑60min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/hxsBtRpZX-zvUnfpTuZIceQGFPjRJvl1HHH0ub2k-LE/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjNhZDk2ODgzLWJkN2UtNGZjYS1iMTIxLWQzZWMxNjI2MDMxZi5qcGc_YWx0PW1lZGlh",name:"Zero Waste Keto Chicken Vegetable Soup",price:"🕑55min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/YzzpFLr4UoJ25q85qH5GRZMC8QCn5JFIdDSROrlV_5c/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmM1Y2Y0YWZlLWNkOTItNDQzNi1iMzBmLTRjOTE2YTIyZGU5OS5qcGc_YWx0PW1lZGlh",name:"Zero Waste Keto Celery and Spinach Keto Juice",price:"🕑3h 29min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/mZYf-hCQZ4INpPCytCjPPIU52nEycPHJSY26xbTA83c/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjRhMGIwNzJjLTk2MGYtNGFmYi1hZjI1LTc3N2UxMjAyZjU4Ni5qcGc_YWx0PW1lZGlh",name:"Zero Waste Keto Charred Chicken with Carrots and Chimichurri",price:"🕑43min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/mb0lYL-xU5FUyMey-iU2-QaCE8mp1MUQh7V9FRh9fmA/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjI0ODQ5YzVlLTcyYjEtNDEzMi1hYTU2LTJlYTIzYThiNDI5Ni5qcGc_YWx0PW1lZGlh",name:"Zero Waste Juice Pulp Keto Fritters",price:"🕑26min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/SbmCdNQWyg-AHNaXZ5g-l9FJRLMQIyr-8ktLiHUnf1Y/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmVjYTEwZDE0LWRkZDYtNGIyMC05YjcwLWE1NmY5YmM4YTUwMC5qcGc_YWx0PW1lZGlh",name:"Eco-Keto Easy Avocado Tzatziki Dip",price:"🕑15min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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




var bonusData = [
    {image:"https://images.carbmanager.com/1IoWYkrIDpwNeOdFu8NKIxi6j9_iBQ-8kzLN9ycZN4U/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjdkMTg3MWUzLTYxMmYtNDRmZC05ZjkyLTdkNjE5YTM4MWU0My5qcGc_YWx0PW1lZGlh",name:"Keto Japanese Milk Bread",price:"🕑50min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/YRp58_r8-YW4sVF6LOfCjsnedg7RXsy4CENsMD75xGY/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmE0OGZkODljLWEyYzUtNGEyYS1hZjQ4LTgyOGY2ZjA5NDIyNi5qcGc_YWx0PW1lZGlh",name:"Keto Japanese Gyoza",price:"🕑10min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/k1qKpIG_7RSwfWwLhlp8dAvB0fEKxE10ZLQM2YJAb6g/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjJlODE4NjBhLWE4MjMtNGNhNS1iYmZjLTYwNmE2ZDMyZWVmMy5qcGc_YWx0PW1lZGlh",name:"Keto Japanese Nikujaga",price:"🕑25min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/-0G3_CPc84bE3l0QhBuzzpid3Bj5DmO5HzwXiZzFd3o/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjM1MzU2OTJjLTJjYmQtNDk1Ny04OWNhLWY4Y2E2N2FiNTg2NC5qcGc_YWx0PW1lZGlh",name:"Keto Japanese Steamed rice",price:"🕑1h 15min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/2qB7lfdVRvoVJcDs-gpaykNzVCoi4_pOWfNmpitJypE/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQ3NWE3NmY4LTc2MjMtNDRlNi05MGYwLTM2OTJjNTliMTM4Yy5qcGc_YWx0PW1lZGlh",name:"Keto Japanese Strawberry Shortcake",price:"🕑2h 39min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/it1d9_XekdoKwqvuBEwQ1GPz6h5Uz_gj2R86u4DOFhw/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjBjNTA2ZDMzLTU5NTUtNDk4YS04NTBjLWY0YjQwMjBmZWRmOC5qcGc_YWx0PW1lZGlh",name:"Keto Tamagoyaki ( Japanese Rolled Omelet )",price:"🕑59min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
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
    btn.innerText="🔥609 Calories";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });
    // var savePrice = document.createElement("p");
    // savePrice.append(save);
    
    var bonusBox = document.createElement("div");
    
    var x = document.querySelector("#bonus-dealssss");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})




var bonusData = [
    {image:"https://images.carbmanager.com/N1bNMG5TKtQh_XzLJ83cwdwdLrDnYF5L1-qfJvftGQo/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjFiODQwNmFkLTdhYmUtNGRhNS1iZDYwLTBmNWE4YWZkNmU1Yy5qcGc_YWx0PW1lZGlh",name:"Healthy Whole Food Carrot Salad",price:"🕑50min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/gAQrbfDhOuX6j0BHao2W7uhlHEyKuNuxB0HJCTtpXGE/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjA4NjNjNWUxLTNmMDMtNGMxOS04NDM0LTYwZGE5ZGM4Y2ZhOS5qcGc_YWx0PW1lZGlh",name:"Healthy Whole Food Minced Beef Hotpot",price:"🕑10min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/F9FG3lAVucKHg7LhJhAKe10TYadCAILfs11YmBNUIaQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmMxNDU5MzI2LTFjZGEtNDM1MS1iZDRiLTlmNGU1MjNmMDdkNC5qcGc_YWx0PW1lZGlh",name:"Healthy Whole Food Creamy Chicken Potato and Mushroom Casserole",price:"🕑25min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/pCxhbrb8FqQhAb9pk_5p_wuF2CffZTxivbeDEDTgS9U/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmIyMDdjYWU0LTgzNjEtNGU3My04ZTE5LTBkZDdlNTU3OGRjOC5qcGc_YWx0PW1lZGlh",name:"Healthy Whole Food Roasted Pumpkin Hummus",price:"🕑1h 15min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/8e8E4BqrYV6e-yHdFjvE-ga89_cn53IOV98DPjeiQD8/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmEzYzU1ODU3LWIxNzktNGUwMS05NTI5LTVmYmFjNzc2MGIzZC5qcGc_YWx0PW1lZGlh",name:"Healthy Wholefood Sweet Potato Hash Breakfast Plate",price:"🕑2h 39min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/h5paW6rklhYGzuasHfT1OwQ12XJt3nbNx_-5LmIl530/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmRjZDVmZDc3LTM3NjYtNDNmNC05MDBkLTYyNDI3NTIyOWM0OS5qcGc_YWx0PW1lZGlh",name:"Keto Brown Sugar Butter Acorn Squash",price:"🕑59min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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
    btn.innerText="🔥100 Calories";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });
    // var savePrice = document.createElement("p");
    // savePrice.append(save);
    
    var bonusBox = document.createElement("div");
    
    var x = document.querySelector("#bonus-dealsssss");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})





var bonusData = [
    {image:"https://images.carbmanager.com/cQiBk3t_CFBNa1SUn9G3Bgg6JI_affRgBrKC8VnhGeQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjM4YjVjNjgzLTMyOWEtNGUyMi05NmU5LTE2OWU0MTgyMWE0Yi5qcGc_YWx0PW1lZGlh",name:"Keto Easy Kid's Lunch",price:"🕑50min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/kuA_RQ9_1_BvAcKos-NqEEMqUAunXZJoapN1d1kW8qg/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzM2ZjlmOGMyLWRmYTUtNzdlMi02OTcxLTU0N2VkZjJlNGQ1My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1iMzE0MjMwMC0xYTgyLTQzNTEtOWUzNi00NGYyNTMyMzYyYTA",name:"Low Carb Kid-Friendly Apple Nachos",price:"🕑10min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/_DFDI3gLo3nU9QT_zqwFOBlzyadYencoppXW4XqJXKI/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjMwZjkyOTMyLWVmZWYtNDg4OC1iYmE3LTAyMWJiOTU5MTFiZi5qcGc_YWx0PW1lZGlh",name:"Keto Children’s Tea Party Bug Snacks",price:"🕑25min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/J0VkdZwGO1gr7wQ0E4jmV-5Oz4pwRh4YcUHJLXITi-8/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmVmODM0M2RjLTBkOGUtNDJkMi1iN2QwLWYwM2VmZjMwZjg2MC5qcGc_YWx0PW1lZGlh",name:"Keto Kids' Egg Cut Outs",price:"🕑1h 15min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/M2-4DSG0EJWv9GLou9xTf7BwRUsgx0F-gYahk-0LSus/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2JkYzQ3MGM3LWI2ZmEtNWY2Ny1iMWY1LWZhMzZlOGJmYWM4Zi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0yNThiMjY4Zi01YzAwLTQ5NDEtYmIyYi01NTA4NjBjMzFlODA",name:"Low Carb Paleo Air Fryer Fries",price:"🕑2h 39min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/gr8jTegNnnFOWy4HqcF7pW81T1YKUV_K3mCR2TZzFaE/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2M5MzBjYjdiLTAwYWItODM0Yy0wZmUxLTRlOTQ5MzBiMzgyMy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1iZDc2ZTViNy05NWMwLTQ1NWYtYWQ1Yi05Yjk4NDdlN2UyOTU",name:"Keto Kid-Friendly Hamburger Helper",price:"🕑59min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
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
    btn.innerText="🔥73 Calories";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });
    // var savePrice = document.createElement("p");
    // savePrice.append(save);
    
    var bonusBox = document.createElement("div");
    
    var x = document.querySelector("#bonus-dealssssss");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})





var bonusData = [
    {image:"https://images.carbmanager.com/5k6T4zfANcR329tObl2GoemxzYi8KS5VxZOfEOEZi6g/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmY0YWIzYjgyLTAzNzQtNDQ4ZC1iOGJkLWI5MWFhZDkwYjkxNC5qcGc_YWx0PW1lZGlh",name:"Keto Easy Pancakes",price:"🕑50min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/3dv_7AolqCwcbmWkRjxz0uEk5L_PaRDh0sDOaBdRtow/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjIxMDRiMjJjLTFkZjItNDlhNy1hMzcwLTdiNDE2NDk3MWZjOS5qcGc_YWx0PW1lZGlh",name:"Keto Easy Breakfast Sausage and Egg Meal Prep",price:"🕑10min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/ghOXw5EMjKorldJcHA3waluS_Jho1YdaG0qUbCw1ju8/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmIwZmFiNWYyLWRhNWUtNDkxNS1hNWI2LTBlMmI4NzQzNGMyYS5qcGc_YWx0PW1lZGlh",name:"Quick and Easy Keto Chili Lime Steak Fajita",price:"🕑25min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/--QXEjxDP0YqRSQyXrNgF_sOifU8AVf7s8rtCn4h7Tc/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzczZDA2Nzg0LTM2ZDYtYzZiYS0zNzRlLWM4ZjEwYWNlYTI3Mi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0wODcwNmIzOS04NGU0LTQ4NTktYTE2YS0yNzY5ZmY3MGU3OTU",name:"Keto Quick and Easy Prawn Curry",price:"🕑1h 15min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/SbmCdNQWyg-AHNaXZ5g-l9FJRLMQIyr-8ktLiHUnf1Y/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmVjYTEwZDE0LWRkZDYtNGIyMC05YjcwLWE1NmY5YmM4YTUwMC5qcGc_YWx0PW1lZGlh",name:"Eco-Keto Easy Avocado Tzatziki Dip",price:"🕑2h 39min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/VIYg5FiBE3gx5Gqz3r5IdBudZk5V9Qd4uIpkd255O_c/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQyYWVhMjZiLTQzNTItNDMzNy1hZDZhLTkxOTEzYWI0MjdkMy5qcGc_YWx0PW1lZGlh",name:"Easy Keto Coffee and Walnut Cake",price:"🕑59min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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
    
    var x = document.querySelector("#bonus-dealsssssss");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})





var bonusData = [
    {image:"https://images.carbmanager.com/fag0hUlujrrX8yWwjEuBJ4eWKcGrj8H0kvTOpQaOIWc/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmFiOTYwZWZkLTJhMDYtNDAwYS05MTc2LTBhZWFkMjRmNmUxMi5qcGc_YWx0PW1lZGlh",name:"Keto French Crepes with Crème Anglaise and Strawberries",price:"🕑50min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/3RgkaoD429yln5wgcnNomxQvb4pt0wALR_LwfXfNW7s/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjg0NzM4MDU3LTNmY2EtNGYwNS1iYzZmLTYzNmVjZTliYjIzYi5qcGc_YWx0PW1lZGlh",name:"Keto Steak Frites (French Steak and Fries)",price:"🕑10min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/x4RxZg-N0Zc3D4QFkmOtKVKGHNh-dCbW9upGGQkRgDU/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjI4Y2Q0YmFhLWVlZjgtNGNhZi04M2M2LTZiODg2NzBlYmJkZi5qcGc_YWx0PW1lZGlh",name:"Keto French Cheese Souffle",price:"🕑25min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/IFtZomE3PAL7iJ0s2FbdvTQKg6LuzJ_Cxfn7aCK4r78/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjM4YzExNzJjLTY2NmItNDc3Mi1hZjNmLWMyMTVlZTVhMzNmYy5qcGc_YWx0PW1lZGlh",name:"Keto French Quiche Lorraine",price:"🕑1h 15min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/UG4m9gB6UKfM5guYxlXkJruXXcxDdRlfHr5V7SVqXdQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjIxYWFiNjViLWUxNWMtNGE5OC1iYzllLTg4NzQ1YmQzZjg1OC5qcGc_YWx0PW1lZGlh",name:"Keto French Chicken Provencal",price:"🕑2h 39min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/zIHJrIAwkajwnQWLOtzIXodPMGeGsHWep_0rpWwiw7A/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjMyNTU0YzFjLTEzY2MtNDBiZC1hNjcwLTE3ZTJkM2ViYTIzZS5qcGc_YWx0PW1lZGlh",name:"Keto French Beignets",price:"🕑59min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
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
    btn.innerText="🔥276 Calories";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });
    // var savePrice = document.createElement("p");
    // savePrice.append(save);
    
    var bonusBox = document.createElement("div");
    
    var x = document.querySelector("#bonus-dealssssssss");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})





var bonusData = [
    {image:"https://images.carbmanager.com/NqttCinkGXM1JWfTKo8w2tZ_ypvsc_8zHXkaQjengZQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjA5YWJhOTM5LWY1YjQtNDE5YS04ZTUwLTExOTY1MTQwMWEzNy5qcGc_YWx0PW1lZGlh",name:"Carnivore Cheesy Italian Ground Beef Frittata Cups",price:"🕑50min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/P-fGas_AnCRfMnTX8uumj5pHpGdyqgY2VhcPfZPyR1U/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjM0NzU0MTZhLWY2MWQtNDJjZC04OWFkLTM3ZjJhZjI1NWVkYy5qcGc_YWx0PW1lZGlh",name:"Carnivore Salmon Burgers With Cloud Buns",price:"🕑10min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/Av0A5IThdMgOwc52bZxaQblaxT_tIHebxUmeJG5jHws/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzRlZGJkODliLTQ5MGEtY2ViYi1hZmM2LTRkMGY4ZGUzZmEzZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0zNWFjODI3ZS0zMTA3LTQ4OGMtOTAwMC1iMzJmMDcxMDcxYTE",name:"Keto Carnivore Platter",price:"🕑25min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/gy4MiD-bwJoHSyShbCuDv5eD_ftUThGJ4U6wY0uVq8Y/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmNmMTMzZTUyLTBiM2QtNDVhOS05Y2UzLWQ1MjkwNjg4ZTBkYy5qcGc_YWx0PW1lZGlh",name:"Ultimate Keto Carnivore Chicken Liver Pâté",price:"🕑1h 15min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/EwK-cBVR_PrIQ0_fBTe5pSaa1VahD_r1md5m-BEvt4Y/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjc1OWFiYjExLTMzYzctNGE2ZC05ZWNkLWNiNjM0OTJlZjZhZS5qcGc_YWx0PW1lZGlh",name:"Carnivore Smoked Salmon Sushi Egg Roll",price:"🕑2h 39min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/yecSiXosnOdNmHZyIgo5fUZ9jZ_TZLB1DuqUemPoiGo/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmZhNzAxNDIzLTJlZDUtNDhlZS05N2UzLWQzMjU2MWNjMmI0YS5qcGc_YWx0PW1lZGlh",name:"Carnivore Crispy Popcorn Chicken Nuggets",price:"🕑59min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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
    btn.innerText="🔥137 Calories";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });
    // var savePrice = document.createElement("p");
    // savePrice.append(save);
    
    var bonusBox = document.createElement("div");
    
    var x = document.querySelector("#bonus-dealsssssssss");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})





var bonusData = [
    {image:"https://images.carbmanager.com/UnqxnkxAareFvRHonb3SWnwcCwZlrLUmwjE8WdgsXp0/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2I2MjExNWYzLWMxMmQtZTAwYS1jYmVjLThmNDBiNDljYzE1YS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0wYzFkYzM4OS03NjY3LTQ5YjgtYjZjZS1lYmRiMzc0OTc4NmM",name:"Keto Instant Pot Mongolian Ground Beef",price:"🕑50min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/AD3edZovCfplWyXsTva-MXvOnc3zu8o3SeOXcinG8_0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjg5MTM5Mzc4LWNhZTMtNDZiZC05NjM0LWQ5ZDM1MGU2MzE3MC5qcGc_YWx0PW1lZGlh",name:"Keto Chicken Enchilada Meatballs Meal Prep",price:"🕑10min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/pP5r1lVAo1R1Y6kE8qecFW4HPWAzw8ijBNJE-g-ppN4/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmNiMTVkMGU4LTkwNzAtNGZkYi05ZjFiLWM1Y2EwNDdlMTYxZC5qcGc_YWx0PW1lZGlh",name:"Keto Vegan Shawarma Meal Prep with Tahini Dressing",price:"🕑25min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/mSZskQTTp1DeJ0nmjfMYDIJCFjZI4IbZ3k_HEh9V6c8/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjA2NGExZmRjLWU3M2UtNDA5MC05NjYyLWFlZjBjYmMyNzc0My5qcGc_YWx0PW1lZGlh",name:"The Best Keto Chicken Chili",price:"🕑1h 15min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/Bry4az_tMOA4jfcoG9O7_VP7a0LDh3DsjRZm_CjxTdQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjBmYzM4NmJhLTQ1OTEtNDFlMS1iMzZhLTEyNzhjNzIyMjgzNS5qcGc_YWx0PW1lZGlh",name:"Cheesy Keto Chicken Fajita Casserole",price:"🕑2h 39min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/Siih0nYpAEaazCvY7GBhWWUKFYXqKxnvxXsKyMjYJb0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmE2OWI5NjU2LTdjOTEtNDQ5Ni1hMDFjLTE3OTFmZWEwODk0ZC5qcGc_YWx0PW1lZGlh",name:"Low Carb Easy Thai Red Tofu Curry",price:"🕑59min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
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
    btn.innerText="🔥556 Calories";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });
    // var savePrice = document.createElement("p");
    // savePrice.append(save);
    
    var bonusBox = document.createElement("div");
    
    var x = document.querySelector("#bonus-dealssssssssss");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})





var bonusData = [
    {image:"https://images.carbmanager.com/cja7F3VaBKXRrW7t1OuRF_oF_M-QH2f-A8H7_oxR3AI/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmI5NjE0YjMzLWUzMjgtNGZiNy04ZThkLTY5ZWVjYjMwNGI2MS5qcGc_YWx0PW1lZGlh",name:"Keto Patatas Bravas",price:"🕑50min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/-6hhSVV7XnJboXHbaCwjdeCn6agJ2s2dOQvF8X1zSyM/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjdmZTRhYTFkLTVkZDUtNDAxNy1iNWYzLWIwMWJhZjQ4OTZlMi5qcGc_YWx0PW1lZGlh",name:"Keto Gazpacho",price:"🕑10min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/qEdWEHdGEhVLNOYkfcsZXCH1KT_zcJCbvJLwXkENOlg/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjIyMDk2NWFiLTIyMmItNDdkMy1iMDcwLWFkMmJhN2JiYjJmNS5qcGc_YWx0PW1lZGlh",name:"Low Carb Paella",price:"🕑25min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/WKdTTpnbZN3XuyWGxCOq0gcreZoHdHtRrtbG6LvItqo/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjk1ZGQ0OTVlLTBmZDYtNDE0My05YmU4LTM4ODIwZjE1YThmMC5qcGc_YWx0PW1lZGlh",name:"Keto Tortilla de Patatas",price:"🕑1h 15min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/iG7avy6JtY-v29N3AXq2_c2gCg8SnPT5ehLAxdJPbWk/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmY0ODhjMWY0LTI2ZmItNDVhYi05YTE5LWNhMzMyM2Q1ZTg3ZS5qcGc_YWx0PW1lZGlh",name:"Keto Spanish Churros",price:"🕑2h 39min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/_8zfkrPdV_Ns_hdMbEyR-8GXLK18tWQF-U1Smz1seas/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJlMjVjZjY4LTQ4M2EtNGYwMi04MzQ4LTliZmM1NDNmY2Y3Yy5qcGc_YWx0PW1lZGlh",name:"Low Carb Spanish Chicken Stew",price:"🕑59min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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
    btn.innerText="🔥108 Calories";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });
    // var savePrice = document.createElement("p");
    // savePrice.append(save);
    
    var bonusBox = document.createElement("div");
    
    var x = document.querySelector("#bonus-dealsssssssssss");

    bonusBox.append(img,name,price,savePrice,btn,wasPrice);
    x.append(bonusBox);
})