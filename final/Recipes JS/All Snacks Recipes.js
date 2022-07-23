var bonusData = [
    {image:"https://images.carbmanager.com/dyCo3G25ek-py1NLtABnga6A8mJplNELyaIL-nQ5ODg/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2FjNjkxMWJmLWFjMjgtZDUzMi1lYmJhLTdlYTU3YjRjMjY2ZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hODM4OGZiYS02NGNlLTQ5N2ItYThjYS02NjQ1YzUyMDk5ODc",name:"Ultimate Keto Cheesy Egg and Spinach Cup",price:"🕑1h 35min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/tRE8c8rUIbp5_yvWYBRZrv5ovRuJ-Gq1SrxMbn3izcI/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2JmMDZiMjViLWM2YmQtNTk0OS01OGJhLTUwNzE3ZGZlMDM1Zi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lZDkyYjMxMC0wMDVlLTQyM2YtYWMxMC00MjQ4MDRiYThhNzI",name:"Best Keto Blueberry Muffins",price:"🕑30min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/05f_LmNF19ShGLY0d3P2crCKhD_4uN-GlAFBKauzDu4/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjNlOGUwNWNiLTlmN2EtNDNhZi05YTk1LTMyOGU3YjcwODMwZi5qcGc_YWx0PW1lZGlh",name:"Best Keto Chocolate Chip Mug Cookie",price:"🕑35min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/pq67GULygOMNvKOhSslNRjCRsRSkhssR2lr4dWFaqOE/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjhiNDBiMjk2LWU1MmQtNGY5ZC05YTJjLTM4YjdhYzA1ZmY4MC5qcGc_YWx0PW1lZGlh",name:"Best Keto Mug Biscuit",price:"🕑50min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/knK2OEPm51O6zlReH31et4x-vVYY_IsO9JrEEAXpSEY/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzc2MmQ5OTY0LTBiOGEtYTQ0OC1jOGQxLWFkMGZhZWM3NzI3OC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kMTBmNjQxYS0yY2MyLTRjZjAtYmE5OC1lN2QwYjMxMDM4M2E",name:"Ultimate Keto Overnight Almond Chia Pudding",price:"🕑43min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/I3BNa65lX7O7FZmQtrfy54-m_lj_gld6zvyrAj2HRpM/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2U4OTg2MTk0LTk2Y2YtOWY4Yy04MmJkLTA0ZGI0YzFlNDVkYy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj00MWE5MDI3Yi03YTFhLTRkZDctYWU2Zi04OTQzMmI0YzQzYTk",name:"Ultimate Keto Blueberry Sponge Cake In A Mug",price:"🕑40min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/0ZgaPsnKfZJOsQ8uRtWecoXDKEPfJugznbFgw_NX1NU/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjdmMjMyZDBjLTA2MmYtNDE0MC1hN2RmLWRmZmQxMjhhNjA3Yi5qcGc_YWx0PW1lZGlh",name:"Keto Peppermint Avocado Smoothie",price:"🕑8min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/zgI10mQ15yqaipm1rxxjPV5AxL_w4QB9H8ixhWpNRGg/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzMxMTUzNGZlLTcwMzktOTE1ZC04ODhjLTBjYTg0M2MzNGM3NS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lOWU0MGQxNC0zODRjLTRkYTYtOGU5MC1mMDAyODk2OGJiZTA",name:"Low Carb No-Bake Chocolate Peanut Butter",price:"🕑37min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    {image:"https://images.carbmanager.com/N_c5HHBjwtCn_O7MjMuoi9JWS0An7crDP9JS9m7QHC4/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjg3NzM2OGI0LTFhZTgtNGEyYy04NWUwLThiN2VlY2UzMDA1ZS5qcGc_YWx0PW1lZGlh",name:"Best Keto Chaffle Burger Bun",price:"🕑1h 25min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/gkM_969apjRWg2bu4Z-pHgUj83YE3fnswfmSWT0Mui0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjlhNzViYjAwLTVhYTUtNGU2Ni1iZGYwLTA4ZmI5MzFkOTFmMC5qcGc_YWx0PW1lZGlh",name:"Keto French Fries with Coconut flour",price:"🕑18min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/OeZTBm7YFcA8bgk7SOcfNf37h95WH1RjaYGVs1B8YmE/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmE2NjRkY2FlLTMxZTgtNDI3MC04OGYwLTJmNjgzMDI3MjkwNy5qcGc_YWx0PW1lZGlh",name:"Keto Cannoli Dip",price:"🕑42min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    {image:"https://images.carbmanager.com/SEahxmhjLhNNpcQs_g-FuPpvs0lJngh2ok62oYQp-Bs/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzhhMWZmNDg1LTcyYTItYjA3Yi05Mjg1LTI5ZDE1ODZmNDg3Yi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0zNGFkMjkxZS03YmM2LTRhYjMtOTgzNC0wZDY3ODlkNDZlMjU",name:"Keto Blue Cheese Bacon And Walnut Fat Bombs",price:"🕑60min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/sKDcYH6um6DTMyDGQDShveEKvV4sVQkKCjdwvBAbxkc/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2M2ZjUzNmNiLWQ4YzYtMzg2ZC1hZTUzLTc4MWM2MTIyYmI1Ny5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kOWYyNTk2NC1mOGIyLTQ2OTYtYTUxZS01MzcxNzMzNjk4MTA",name:"Keto Mozzarella Sticks",price:"🕑55min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/oIKI5xN9fPaECIlKirhQ9BSQbzhiAkVeiKodCfJIpMA/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzBiNjQ2ZGFmLTBjMGEtNDljMy0wNDYyLTZlOWVlZWQyNzdhYi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj01MjhmMzM4Ny0zZjlhLTQ3ZjItOTMzYS03ZWViYTY5ZDBlMDk",name:"Keto Avocado Fat Bombs",price:"🕑3h 29min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/qUQV6olsImIsjSoUTeSvClo4mSMz-31ajPM8_DEFaf8/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2EwMGFmZDI0LTYyMjUtNmM3Yy1lZWFjLTM2YTcyY2ZlMGNmYi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0wMjc3Zjk2MS1mNDU1LTQ1YjctYTI4OC0xNjkzNmY2MGQxMzU",name:"Keto Everything Bagel Parmesan Crisps",price:"🕑43min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/e8JGzSGFkX2M7yv5Hi1WgEUupJXZe6hYwIh9GulluKI/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzIyZTY2MDQ4LWZhYTctNDQ2MS1lMjE5LTEzMzJkYjEzMDE2Ny5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0xMGJkZDVjZC1jY2VhLTQ4YmYtYWI1MS00NjJlNGVjYTgyYTQ",name:"Keto Loaded Cauliflower Medallions",price:"🕑26min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/0KIpON0JIqBlZV8ZfOgDgUfaiQJKuhuQQqqqFC21nmA/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2IyZGNiNjFkLTUwNzktMzhhMy1hZGRiLWFkMjg0ZjM3NWEzMi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lOWY0ZDA2OC05NjExLTQyNTktYjk4Yi04OGQ5NzkxNzNlYjc",name:"Keto Peanut Butter Filled Cheese Crackers",price:"🕑15min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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