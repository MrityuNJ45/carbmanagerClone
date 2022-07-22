var bonusData = [
    {image:"https://images.carbmanager.com/dyCo3G25ek-py1NLtABnga6A8mJplNELyaIL-nQ5ODg/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2FjNjkxMWJmLWFjMjgtZDUzMi1lYmJhLTdlYTU3YjRjMjY2ZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hODM4OGZiYS02NGNlLTQ5N2ItYThjYS02NjQ1YzUyMDk5ODc",name:"Ultimate Keto Cheesy Egg and Spinach Cup",price:"🕑1h 35min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/tRE8c8rUIbp5_yvWYBRZrv5ovRuJ-Gq1SrxMbn3izcI/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2JmMDZiMjViLWM2YmQtNTk0OS01OGJhLTUwNzE3ZGZlMDM1Zi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lZDkyYjMxMC0wMDVlLTQyM2YtYWMxMC00MjQ4MDRiYThhNzI",name:"Best Keto Blueberry Muffins",price:"🕑30min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/pq67GULygOMNvKOhSslNRjCRsRSkhssR2lr4dWFaqOE/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjhiNDBiMjk2LWU1MmQtNGY5ZC05YTJjLTM4YjdhYzA1ZmY4MC5qcGc_YWx0PW1lZGlh",name:"Best Keto Mug Biscuit",price:"🕑35min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/knK2OEPm51O6zlReH31et4x-vVYY_IsO9JrEEAXpSEY/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzc2MmQ5OTY0LTBiOGEtYTQ0OC1jOGQxLWFkMGZhZWM3NzI3OC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kMTBmNjQxYS0yY2MyLTRjZjAtYmE5OC1lN2QwYjMxMDM4M2E",name:"Ultimate Keto Overnight Almond Chia Pudding",price:"🕑50min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/qL--2XNhwroOcRdZ8yuBLC4BSRiiG3AiSU5HeOFyVf4/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzQ2M2RjODlmLWFmNjQtODdmNy1kMDcxLWZhNjI4YWEyYTEzMC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj05Y2Q2OWM5ZC04ZmE3LTRiYmEtOWZlMS05ZTdkNjQ0NjQxYjM",name:"Best Keto Prosciutto Scrambled Eggs",price:"🕑43min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/I3BNa65lX7O7FZmQtrfy54-m_lj_gld6zvyrAj2HRpM/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2U4OTg2MTk0LTk2Y2YtOWY4Yy04MmJkLTA0ZGI0YzFlNDVkYy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj00MWE5MDI3Yi03YTFhLTRkZDctYWU2Zi04OTQzMmI0YzQzYTk",name:"Ultimate Keto Blueberry Sponge Cake In A Mug",price:"🕑40min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/0ZgaPsnKfZJOsQ8uRtWecoXDKEPfJugznbFgw_NX1NU/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjdmMjMyZDBjLTA2MmYtNDE0MC1hN2RmLWRmZmQxMjhhNjA3Yi5qcGc_YWx0PW1lZGlh",name:"Keto Peppermint Avocado Smoothie",price:"🕑8min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/ldrHLJL4Uc-5gz5BGucPFsdgB0-UZaBCvYnvl-1fFec/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQ5YzcyM2NjLWQ0MDQtNDc0YS1hYWQyLTRmNzAzNzE0YmE2NC5qcGc_YWx0PW1lZGlh",name:"Low Carb Hot Coconut Breakfast Porridge",price:"🕑37min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    {image:"https://images.carbmanager.com/BPeA2ssEW4eRDc0CCYzgTPgskEq6VgpKZpBTcW_dlQA/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJmODMzYmQxLTE3M2QtNGQ3My1hMzA0LTEzYjNmMWE5ZjMyOC5qcGc_YWx0PW1lZGlh",name:"Keto Brioche Bread",price:"🕑50min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/5DjxkAriZdPh5ZG9iceKjcuCO9yjNHnVX-mc8214K1Y/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmY1ZTJiZDQ0LWMxMzMtNGZjNi05MDA5LWJiYjhjY2ZiODk3Yy5qcGc_YWx0PW1lZGlh",name:"Keto Croque Monsieur",price:"🕑36min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/D2_Rz2g4vK_5iuRDC5cpjwErEzYNp09tmTS7pnIqElg/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjI0MTAwZGM1LTdkN2MtNDBmZS05MWIxLWQ5OThlMWVjOTFhNi5qcGc_YWx0PW1lZGlh",name:"Keto Easy One Skillet Breakfast",price:"🕑29min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/D9aSEIGQeAg01xgRMaVbR6E1Ynh79TK-ufhUE4CK5pQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjYzYWQ0ZjZkLTQ3YjYtNDE0Mi04NGY4LTFjYTU0YjRmZDhhNi5qcGc_YWx0PW1lZGlh",name:"Keto Sheet Pan Eggs and Bacon",price:"🕑1h 25min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/aAEhSOxE2n8l51KIB4eKJO_5MhyR4hvbF1_xOPtoct8/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmMxZTNmYTMwLWU3NTQtNDA3ZS1iYmRiLWU5YWM4MTcxMzVkMC5qcGc_YWx0PW1lZGlh",name:"Low Carb Blueberry Sheet Pan Pancakes",price:"🕑18min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/Cu8O__OVc5241CnzYYSYT9OdoLtq8eokCMjjLkzzBDg/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjRiNmIzMTczLWEyMDctNGM5My04Njk2LTNlYjM2NmVlNDAyYy5qcGc_YWx0PW1lZGlh",name:"Keto Low GI Spinach Omelet Rolls",price:"🕑42min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    {image:"https://images.carbmanager.com/Vj8ops91yjpsfRGB0mP5FHiYW2jpDkjlpG-kAHbUtkw/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzNiNTRmMmUwLTg1ODgtNTE0My1hOWM5LWE2OTg5ZDU0NDkzMS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0wMjJmMGI5Yy01ZWNlLTQzOWEtOTkwNi1iMDAxOGY4MmQ3MzA",name:"Keto Bacon and Egg Breakfast Pizza",price:"🕑60min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/J4Y1vDcJbMOxufHmUItdqLt7Sy811SXYXQzNBQznDKw/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjVmNjcyYjI5LTUwZTItNDRiOC1iNjkxLTVmZmIyMmU0ZGYzZS5qcGc_YWx0PW1lZGlh",name:"Low Carb Butternut Squash Breakfast Hash",price:"🕑55min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/1EfEvfRoYRomkWz5I24UlT_axBINbQrVCW-3cEMsago/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2I2NjMzZjkzLTFhNmItNGJhMC0xZTBlLTlhYjk3ODZkZjg1Ny5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hMTZhNmI3Yy0yNDk2LTRhZTItODAyMy0yN2YwM2FiMzI1ZDc",name:"Keto Bacon and Cream Cheese Devilled Eggs",price:"🕑3h 29min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/9ytgsoCxEerwsn3Ydx6M29MyUNJnJQteYXjb8bWNgB4/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzdiOWFkYzNlLTNmNTgtZGIzZi1mZDdjLTBlZGY2ZjAwYzlkNi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj03N2NkNzJkNy1iZjdmLTQyMzAtOWE1YS1hNmU1Y2QzNTgzODI",name:"Keto Banana Nut Muffins",price:"🕑43min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/ywPhJrZP0fXbItHv0IEmJEOU3unWC0AOHHA-6mgayD4/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2UzZDc5YWJlLTFlNzEtZDAzOS1mZjcwLWY5NWQ2MDYxMzVlOS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj01MDM0MDVmMC1kMGIxLTQwYjMtOTY3Yi0xMjc1YTc5NDM3MzI",name:"Keto Almond Oatmeal",price:"🕑26min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/7W5irgr52bVZm6eJyHHzxMR-ORUOnw-BS3CZFw8N42c/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzhiNTg3ZTY2LTNlYmMtZjU1OC0xOTIwLWQ0MDU4ZGIzMTNlOS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj05MzQxNjllYy1lZDE4LTQxMDktYjE3ZS00ZmZiM2Q4YmI2ZjE",name:"Keto Country Frittata",price:"🕑15min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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