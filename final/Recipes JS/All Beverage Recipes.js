var bonusData = [
    {image:"https://images.carbmanager.com/0ZgaPsnKfZJOsQ8uRtWecoXDKEPfJugznbFgw_NX1NU/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjdmMjMyZDBjLTA2MmYtNDE0MC1hN2RmLWRmZmQxMjhhNjA3Yi5qcGc_YWx0PW1lZGlh",name:"Keto Peppermint Avocado Smoothie",price:"🕑1h 35min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/eeeDDtpHaereJYNdYhWBoj1C9rQtN56mfo2E6xOsG-M/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjU4NmFlMjRjLWVmOWEtNDNjYi05MjJkLWMwODJhZjc1MDYxNS5qcGc_YWx0PW1lZGlh",name:"The Best Keto Butter Coffee",price:"🕑30min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/DrbVaLooYH0u_FNRdnfIdlufHw5824IIp_zPRux10H8/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2Q3ZGZhY2UyLWI3YmYtZTkxYi1iZjg0LTM5ZDkwNDc3YmFkZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hM2ExYmRlZS1iOTc4LTRlOWEtYjE2YS01MmFlNjQ3NjNlNjA",name:"Keto 5-Ingredient Turmeric Smoothie",price:"🕑35min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/QB1BNe9PoMCwZmOtFwK1Rgo47HQaCLyi4Rd8Rqsk8eM/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2EzMWNiZGMyLTg5YTYtMzZhYi05YjM1LWJjY2UzNGFjMmQwOC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1mN2VhMDVmMi0xN2MxLTQxYTktYTI3Zi1lYWNhODg4Mzk4MDg",name:"The Best Peppermint Mocha Keto Coffee",price:"🕑50min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/taek8nChU8t7D6Lu_QTtoJIriaBMZGZA2ooELynuNLc/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2UwMWEwZDhkLWM0YjgtMjc1NS1jZWI2LWRkNmQxMWRjMWNjNC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1jZTAyYjRjMy0wNTNiLTRmNzEtODY2Mi05NDczMThjYzk0NWE",name:"Low Carb Tart Double Berry Smoothie",price:"🕑43min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/Wx1mR7x0yyZ1WVQOy3kIQ76amMgL-vTaiC4kOXjnKT8/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2RkYjg2ZDk3LWI3ODktZDgwNC04MjQ2LTYyMWFmYzg5ZDg2OS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj03MTExZGRhZi1iMzk5LTRkYjQtYWM5NC01ZTcwN2MwNzE3NzE",name:"The Best Keto Chocolate Almond Butter Smoothie",price:"🕑40min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/6TCsypyxWbObQdlBXaJR52KfJgPtlBvplGbTTOf58MQ/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzk1ODNhZDczLWU1MDQtZmYwZi0yZWIwLWFhNTliMzA2NDk4My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj02OWE1YzliZi0wNzRkLTRmMjktOWEwNC1jMGM3Y2FiOGVkNDg",name:"Best Paleo Keto Avocado Smoothie",price:"🕑8min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/MJPEFHkh6ZOZtNDlBm8yOh58dRYjxJikQJM3nameidQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmY5MjQ3NWIyLWNjYWQtNGU2My1hNzIyLTYzM2ZiYWZiZjRkZC5qcGc_YWx0PW1lZGlh",name:"Best Keto Vegan Mean Green Smoothie",price:"🕑37min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    {image:"https://images.carbmanager.com/dWRo9uTx6IN40zsQJK3U74k_MNyruoXfjQtNV7cMuI4/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQzOTVmYzk1LWZhMWYtNDA2Ny05ZDRiLWIxYjk4OTgzZGY3YS5qcGc_YWx0PW1lZGlh",name:"Keto Orange Juice",price:"🕑37min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/Ht6Uvm3apHj1P4Fss75nq-Vu39E8n9oN3m8zRfqTkYk/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjQ5MTE5ZDNhLThlODQtNDQ1Ny05ZmZiLTc3MTQxNGM1ZWI3NC5qcGc_YWx0PW1lZGlh",name:"Keto Strawberry Juice",price:"🕑2h 28min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/onOOQGajaPpRDBsa7z8iBIzdsCwpzS35VeodCOo-AKE/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjM0NmRiNGJmLTk1MjEtNDhlYy1iMzRhLWY3YTQ1YWNhNjI3ZC5qcGc_YWx0PW1lZGlh",name:"Keto Ginger Lemon Detox Juice",price:"🕑50min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/ZSdNKMa-zg1v5dU2qNsx2VWKxF_iThbhupSlycyBFso/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmEwZWQzYWEwLTg5ZmItNDk5NS04OTlkLWQwNTg5MzY3ZjIwNC5qcGc_YWx0PW1lZGlh",name:"Keto Matcha Green Juice",price:"🕑36min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/8jRuvO7Ld8Grh6xXyVe26jeijESbgTzBBxNT4yW66M4/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQwMTAzZDlmLTc2MjMtNDAyYS1hMTU3LTExNTdkZTYxOTY3My5qcGc_YWx0PW1lZGlh",name:"Keto Celery and Mint Juice",price:"🕑29min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/gAUFSwhU6rpgInzPOIn2F2k7dk-UlXt-k-EQcpWBIxk/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjc1ZDdjMGJjLTVjMTAtNGI0Zi1iNmIxLWY5ODcxYTNlNGZiYy5qcGc_YWx0PW1lZGlh",name:"Low Histamine Keto Chicken Bone Broth",price:"🕑1h 25min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/lMjscyXOs4DVnModJ5WGy-xlQ3wzsjSPSWQNmy5L2dA/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjE5MzA4NTcwLTg1ZDEtNGQzNC05ZGU4LTVlNmJmYTY5Yzc2ZS5qcGc_YWx0PW1lZGlh",name:"Easy Low FODMAP Morning Matcha and Banana Breakfast Smoothie",price:"🕑18min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/Q0A69HnbqAkwVK1UZNCMUc4gx5hZ-PJX_zaxVk5-RBw/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjk4Mzc3YTJjLWNlODQtNGZmZi1hZTc2LTZiMGY1NjI4YzdjMS5qcGc_YWx0PW1lZGlh",name:"Keto Fizzy Strawberry Italian Soda",price:"🕑42min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    {image:"https://images.carbmanager.com/GZmMLD3hQxe-RqkdLmpADQ8Xavilq41brJ4cvTAHn3M/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2YyNTk5MjViLTMzYmYtYTg5Mi04OGU5LWE4NWQxYzE1MzRkNi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1jZmFlMTY0My00NTgyLTQzYTAtYWUxZi04YzRmNzY0YjcwMTk",name:"The Ultimate Keto Chocolate Milkshake",price:"🕑60min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/vQNKG-1DiZy5I-YZgmqu-ye0D9_XymTLhWP2PPZHG4s/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzA5ZmVhMjI4LTAzYmUtNjBiYy0wOTlmLTI5ODU0NzQ1MzFiYS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj05ZmNhYzc2MC1kMzU2LTRiZDQtOWVkYy04MzIzOGE2NzZmZDY",name:"Ultimate Keto Passion Fruit Iced Tea Latte",price:"🕑55min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/qwrIM22flWiZuFahJ42xuGrT2jC1PKxZPwl2MoQCbtM/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzk2ZmQwYWQzLTlmNzItNmFhZi03ODYxLTgyYTcyMDI0Yjc1MS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj05MzQxZDFiYi1kNGI0LTRlZDgtOTk2NS1kNTM2ZWVjOTM3MjM",name:"Best Keto French Latte Smoothie",price:"🕑3h 29min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/DwfK_QFokHp0trbjSUAkTO9F59JrruggNRhaX7GYwM0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmVjNTk3OGYzLTJmYjQtNDMyYi05YWEzLTkwOTFiNGM3NTM0MS5qcGc_YWx0PW1lZGlh",name:"Best Keto Ginger Turmeric Tummy Tea",price:"🕑43min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/SYYapHTEnnLBZ5AA7npfciobqjNnFStw2CcZ39l5QwQ/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzljOGM5NTlhLTI0MDQtN2Q2My0xYjg1LWNlMGJlMjNjMmNlYS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj00N2ViNDEzNi1jZGMzLTQzNTAtOGMyYS1kOWQ4NzRiOWFmMzA",name:"Low Carb Super Green Smoothie",price:"🕑26min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/ytir86KqNlmxFfTzTXMlqhkR_KQAHbiL1fMvsiKEl6k/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzE5ZjMxN2ViLWQyNjctY2M0ZS0xYjllLWY5N2U1ZmI3NmYwZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0zZDk5NTcwZi1kZDhjLTQ4MzQtYjkyOC0zNDk4MDU5ZjlhYmU",name:"Best Low Carb Strawberry Coconut Smoothie",price:"🕑15min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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