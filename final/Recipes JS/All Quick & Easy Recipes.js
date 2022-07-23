var bonusData = [
    {image:"https://images.carbmanager.com/uOJsck0LWja1bjZi56Lj8_lbjDWaMr1F1Sx08vG32VA/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmUyMmIyYjVlLTdiYjItNGE0Mi1iZDRiLTY2M2I5NDkxYTI0MC5qcGc_YWx0PW1lZGlh",name:"Keto Italian Beef With Cabbage Noodles",price:"🕑1h 35min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/uvrSsX8CGyUh3OdMi8WJhfCKsOZq2SoufReWMARHdTs/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzFkYzk0MjVkLWVhNTYtYzM3ZC05MTE4LWNjYmI0ZTIxNmI1My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kYjgwYjg0NC0yNDhhLTQxOGUtYjMyOC1hODk2NDFlYjBmZjQ",name:"Keto Philly Cheesesteak Skillet",price:"🕑30min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/MivyF_IcpRsUUf4kQqaU0GElw4Tdesx-PbSw7B_cIRw/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjU3OTI5ZjA0LWI2OTgtNGM3OS1hZmZlLTIxYWI1ODg1YWNlZC5qcGc_YWx0PW1lZGlh",name:"Keto Chicken and Cauliflower Cheese Bake",price:"🕑50min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/dyCo3G25ek-py1NLtABnga6A8mJplNELyaIL-nQ5ODg/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2FjNjkxMWJmLWFjMjgtZDUzMi1lYmJhLTdlYTU3YjRjMjY2ZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hODM4OGZiYS02NGNlLTQ5N2ItYThjYS02NjQ1YzUyMDk5ODc",name:"Ultimate Keto Cheesy Egg and Spinach Cup",price:"🕑40min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/tRE8c8rUIbp5_yvWYBRZrv5ovRuJ-Gq1SrxMbn3izcI/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2JmMDZiMjViLWM2YmQtNTk0OS01OGJhLTUwNzE3ZGZlMDM1Zi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lZDkyYjMxMC0wMDVlLTQyM2YtYWMxMC00MjQ4MDRiYThhNzI",name:"Best Keto Blueberry Muffins",price:"🕑8min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/ee1sXKXlYYN4mYbLJy8iG1geKMqGJ8mOMtjOYHJBcy0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjIyZWE3MWM0LWI1NGUtNDc0ZS1hMDNlLWM4MmE5OGNkYWEzYS5qcGc_YWx0PW1lZGlh",name:"Keto Bacon Wrapped Chicken Thighs With Cheddar Sauce",price:"🕑37min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
    {image:"https://images.carbmanager.com/05f_LmNF19ShGLY0d3P2crCKhD_4uN-GlAFBKauzDu4/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjNlOGUwNWNiLTlmN2EtNDNhZi05YTk1LTMyOGU3YjcwODMwZi5qcGc_YWx0PW1lZGlh",name:"Best Keto Chocolate Chip Mug Cookie",price:"🕑35min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/GHdB_nb6oe9iAc0voeDe_vbvGrc4AddRHmAPP4SFPdQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjFkNWM5ZDMxLWU0YzctNGNiOC05ZTJjLTUzMzc4Y2NiNDc0Yi5qcGc_YWx0PW1lZGlh",name:"Low Carb Chicken Jalapeno Chili",price:"🕑43min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},  
    
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
    {image:"https://images.carbmanager.com/gudoQlHtp_yM-0OM2q1CtCdLA3n1ewEwRQPzG9dh0TA/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjAxZmM1YWE0LTQ0MWItNGJhNi1iNGRkLTJmODliNzdlZjk3Yi5qcGc_YWx0PW1lZGlh",name:"Easy Keto Trail Mix",price:"🕑37min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/4c4_DkulC6snnNqfEXDM6eabrAf0xenwjmvToU30t4s/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQ5YTkzNWUyLWYwMDgtNDYzYS1hYzE4LTI4MzU4NjU2ODBiNC5qcGc_YWx0PW1lZGlh",name:"Keto Spicy Trail Mix",price:"🕑2h 28min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/NkO5zjN33gI4X4djyVxU0tGhcp4qj-cDtuMk9acDWkE/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjdkMmQ2MWE2LTdkMzYtNDdhMC04ZjRlLWJlMDMyZDVjMDAxNy5qcGc_YWx0PW1lZGlh",name:"Keto Turmeric Trail Mix",price:"🕑50min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/cfdbzBUJ-AKeH-8o3VaRg-uYauRXdSLBHO4uJ67zzRY/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjQ4ZTVjYjIyLWY0MWQtNGI3OC1hZTYwLWI0MThiZDZkNmI5OC5qcGc_YWx0PW1lZGlh",name:"Keto Chocolate and Strawberry Trail mix",price:"🕑36min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/0ruT0V4-rh6Bz8XcZ6eBrJCO_ZandItNxdUgkvdaFWY/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmMwMDMyYzQ2LTQ4NmItNDY4MS04Y2YxLTc3NTM1YmI3YTNlNC5qcGc_YWx0PW1lZGlh",name:"Keto Coconut Cinnamon Trail Mix",price:"🕑29min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/CA_y2qGcdnkT6-lDKwa0ShGRs61Ks1lJ0Hrrq-tPWt0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmE1NmYzMGRiLWE5NTgtNGZhYi04NjA2LWVkYzZjMzE3OTU2Ny5qcGc_YWx0PW1lZGlh",name:"Best Keto Microwave Poached Eggs and Bacon",price:"🕑1h 25min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/CA_y2qGcdnkT6-lDKwa0ShGRs61Ks1lJ0Hrrq-tPWt0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmE1NmYzMGRiLWE5NTgtNGZhYi04NjA2LWVkYzZjMzE3OTU2Ny5qcGc_YWx0PW1lZGlh",name:"Best Keto Microwave Poached Eggs and Bacon",price:"🕑18min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/N_c5HHBjwtCn_O7MjMuoi9JWS0An7crDP9JS9m7QHC4/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjg3NzM2OGI0LTFhZTgtNGEyYy04NWUwLThiN2VlY2UzMDA1ZS5qcGc_YWx0PW1lZGlh",name:"Best Keto Chaffle Burger Bun",price:"🕑42min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    {image:"https://images.carbmanager.com/05f_LmNF19ShGLY0d3P2crCKhD_4uN-GlAFBKauzDu4/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjNlOGUwNWNiLTlmN2EtNDNhZi05YTk1LTMyOGU3YjcwODMwZi5qcGc_YWx0PW1lZGlh",name:"Best Keto Chocolate Chip Mug Cookie",price:"🕑60min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/NG9ac0bnD-zUIY92EiyCFBjIYZ4j3llBoHtBpRA34Lc/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQ5YzRkYTEyLWU2YWEtNDgyOS1hNGE4LTU0ZDJmYzc1NTZlMS5qcGc_YWx0PW1lZGlh",name:"Keto Loaf Bread",price:"🕑55min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/uOJsck0LWja1bjZi56Lj8_lbjDWaMr1F1Sx08vG32VA/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmUyMmIyYjVlLTdiYjItNGE0Mi1iZDRiLTY2M2I5NDkxYTI0MC5qcGc_YWx0PW1lZGlh",name:"Keto Italian Beef With Cabbage Noodles",price:"🕑3h 29min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/uvrSsX8CGyUh3OdMi8WJhfCKsOZq2SoufReWMARHdTs/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzFkYzk0MjVkLWVhNTYtYzM3ZC05MTE4LWNjYmI0ZTIxNmI1My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kYjgwYjg0NC0yNDhhLTQxOGUtYjMyOC1hODk2NDFlYjBmZjQ",name:"Keto Philly Cheesesteak Skillet",price:"🕑43min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/MivyF_IcpRsUUf4kQqaU0GElw4Tdesx-PbSw7B_cIRw/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjU3OTI5ZjA0LWI2OTgtNGM3OS1hZmZlLTIxYWI1ODg1YWNlZC5qcGc_YWx0PW1lZGlh",name:"Keto Chicken and Cauliflower Cheese Bake",price:"🕑26min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/dyCo3G25ek-py1NLtABnga6A8mJplNELyaIL-nQ5ODg/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2FjNjkxMWJmLWFjMjgtZDUzMi1lYmJhLTdlYTU3YjRjMjY2ZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hODM4OGZiYS02NGNlLTQ5N2ItYThjYS02NjQ1YzUyMDk5ODc",name:"Ultimate Keto Cheesy Egg and Spinach Cup",price:"🕑15min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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
