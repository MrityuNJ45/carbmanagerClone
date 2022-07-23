var bonusData = [
    {image:"https://images.carbmanager.com/Gb-U-uqXYWnqFftBr_MQJ7emvRuF_VchgonOEC3VIqs/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJjMzdmZTcyLTQ4NjgtNDI5Ny04YmY5LTA5NDBiYWJmMThmMS5qcGc_YWx0PW1lZGlh",name:"Keto Avocado Chicken Salad Lettuce Cups",price:"🕑37min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/eb9PFUKSiOEn32pgTDry0Xi8eu63CWuWoxL61zRbOLM/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzI0Y2ZhOGJmLWViZDMtY2Y2Mi04YWY3LTBmYTU1YWI5ZWU3ZS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0yOGJkNzQ5OC1kMGQ5LTQ3YjEtYjgzZi0xMTU0ZjA2MDE3NjE",name:"Keto Avocado Tuna Salad",price:"🕑1h 25min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/_V01SiRSK6Nj76XjsNvStQrMT7rpwKtt_yT4vZNJ4ec/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzFlMzZlM2E0LThhYjAtMmM2NS0wMzExLWQxYzhiMWExM2JkZS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj00ZmE2MzA4My0xNzVjLTQ0OGItODFhYi03M2U2M2ZmNTBlZTg",name:"Keto Avocado Cucumber Salad",price:"🕑18min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/_HsSYK6LdKWa-UTvBpTba-nS9viIi_cBmTW3AfGopns/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2RlYmM3MzIzLTcxNDUtYzhjYy1jYTg0LTY2MTQyZmQzZTY2Ny5qcGVnP2FsdD1tZWRpYSZ0b2tlbj04ZGY5YjRlYy04NWVkLTQ1MDYtOWE5Mi05ZTVkODU5NDk3ODI",name:"Keto Spinach Feta Pecan Salad",price:"🕑42min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
    {image:"https://images.carbmanager.com/-FsImfGXwpcV0POIzFjvgtCGuo4j5d3mdNkYJZ89gdU/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzU2MmNmNjU2LWM0YWUtMmRkMi0xMDQxLTM4MGE0OTlkODRmNi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0xN2M2MTM2YS1hZGEzLTRjOWMtODg0Ny0xYmE3YWM2ZjZkMDA",name:"Keto Canned Salmon Plate",price:"🕑2h 28min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/3jwDlo2lzJgUmOrzFVkWch7Ew8gj_9jgWgvkQdES63o/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzkyNjZhZTdlLWM3YmYtNmUzMS00MmRlLTVkZTA5NGRiMzA0Zi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1mZjY3MmQ1MS1mMGIxLTRiNjQtYTM5MC03YjkwYjJjMGNkYzQ",name:"Homemade Keto Ranch Dressing Recipe",price:"🕑50min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/YwKZhrsgtv_CWoFwdugUxOUMGnPK6XcBECL4L9oAhMo/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzE5ZDllN2U0LWFlYWUtZjMxYS1lOTBmLTU5NWFmMzc0ZjI0My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj03OTM0MWQ4ZS1hMDhhLTRkNmYtYmQ1Zi0zMjQyOTJmMGI3YzU",name:"Keto Southwest Chicken Avocado Salad",price:"🕑36min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/83srRn_HzPQCYJ6BcIEwSiBk7aokt9DF3ircZ94TIP4/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzI0OTg5OTYyLTZhNDQtMGIzNy04MzYyLWNlODgzYzJmYTlhOC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0zYWRkMjBkOS0xNzIwLTQ0OGItYTE2YS05NzJjZTBmOTQ4ZDI",name:"Low Carb Middle Eastern Cabbage Salad",price:"🕑29min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
   
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
    {image:"https://images.carbmanager.com/q12ORp8rBXA3hXObDF3NC1HQ_BfV4Q6kH0qrcgFIrTc/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjMxZjllNjg2LWQ4MGMtNGFkNC05YTI2LTRlYjAyNjM4MjkxNS5qcGc_YWx0PW1lZGlh",name:"Low Histamine Paleo Sliced Beet Salad",price:"🕑1h 35min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/dhSCFKj86vHQLDK250v5p_PbTkDgbsCDReyLWcHHwhM/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjNlODZhYTljLWEwMDYtNDFhZC1hNDlmLWVlZTE1NDU2YjY5NC5qcGc_YWx0PW1lZGlh",name:"Low Histamine Keto Raw Carrot Salad",price:"🕑30min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/D3BPT7D7HWyIKTqKDP0sFoI-aWSN80SGda9tdEJ6Pmw/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmY3OGU4YjJlLTY2NmQtNDM5NC1iN2UzLWZlZGJmM2ExNmIyYi5qcGc_YWx0PW1lZGlh",name:"Low Histamine Vegan Low Carb Herb Roasted Beets",price:"🕑35min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/o7j-lDGEYtZ2i3mNrHQiKZ2w0D7l6E8k9fgQ5jLTep8/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjI3MWNlYWEyLTAzNDgtNDFhMC1iNTliLTQxYjkyMjZmYjE4NC5qcGc_YWx0PW1lZGlh",name:"Low Histamine Salmon with Quinoa Cucumber Salad    ",price:"🕑50min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/Qc6bbxTL8gX5_0KHsPI8p6hybESFFlGH0JR0vme_V-g/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQyZDc5ZDgzLWY4NTItNDVhYy05NmFjLTdiZTEyOGVhNTliZS5qcGc_YWx0PW1lZGlh",name:"Paleo Chicken Salad with Radish Mint and Dill",price:"🕑43min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/znRt4vtwtym2Zch5JHJLKQXkJZifNVzSMidZWEheaEA/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjc3Y2ViNThmLTQ1NjEtNGFiMi04Mzc1LTlkYWE0YmNjZjA3Yi5qcGc_YWx0PW1lZGlh",name:"Keto Easy Garden Italian Dressing",price:"🕑40min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣2g  🔵17g  🟠26g"},
    {image:"https://images.carbmanager.com/sXpIQaniHcKcnJXa1tDxV4Q8Ee4nNk2PUabHimpu3ts/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjBjNDg3OTNmLTVlMjItNGRmNy1hOGEwLTc4MTA4MDNmNGQ1Zi5qcGc_YWx0PW1lZGlh",name:"Keto Hot and Sour Cabbage Slaw",price:"🕑8min",save:"⭐⭐⭐⭐⭐  604 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
    {image:"https://images.carbmanager.com/5M1MrRFmUaZGNPKVZCE7jGdKQGFvXsfLD7TNxO-zY8M/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjg1NjNmOGRhLWU3NTgtNDM1Ni04NDllLTU1NzI1MjRmN2Q3Ni5qcGc_YWx0PW1lZGlh",name:"Keto Squash Antipasto",price:"🕑37min",save:"⭐⭐⭐⭐  479 ratings",wasPrice:"🟣2g  🔵36g  🟠58g"}, 
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
    {image:"https://images.carbmanager.com/j650LPGpFFAx0dHf9opVzG4reyLOMyFRS5gHpQSrF5Q/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzYwY2FkOTE2LTc3ODYtZTI4NC03YTY5LTZiOTVlNWVmZmI4ZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1jMTdkMDNkZC1hNzVkLTQ4ZTUtODI2ZS1lN2QyYWJiYmIwMmY",name:"Keto Simple Cucumber And Avocado Salad",price:"🕑60min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣6g  🔵32g  🟠24g"},
    {image:"https://images.carbmanager.com/w3S_uaMW2CwqNxfQg1e4Cw8Fs6VxgDPOJ7BHz15-1Wg/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzRmMTVlN2I0LTg4NDYtZjIwMC02NzhiLTc5MGE0ZWExMmViMy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj00OTgwMzliNS02ZGE5LTRmYmEtODI4Zi1iODg5YmI0OTY4MTI",name:"Keto No Lettuce Cobb Salad Meal Prep",price:"🕑55min",save:"⭐⭐⭐⭐⭐  1221 ratings",wasPrice:"🟣2g  🔵43g  🟠26g"},
    {image:"https://images.carbmanager.com/5IncK7ruUqtDV9tm9g-paNrEZtnAkJ-SxJFXHI_0-pA/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2M3MjI4NmVkLTA2NjUtZGQ5MC02ZjFjLWQ4MzhmYzY3MTMyMC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1iZGExN2Q0Mi1lZjAxLTQ1ZTgtODZmYS0zZWE3NzhkOWRjNmM",name:"Keto Superfood Salad",price:"🕑3h 29min",save:"⭐⭐⭐⭐⭐  1042 ratings",wasPrice:"🟣4g  🔵22g  🟠35g"},
    {image:"https://images.carbmanager.com/CX1keCCbj97CSeIC1UDrP8onW-EQoaLLkzdF4nnPayI/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzJmMTE4MTFhLTMwZTUtYTkyOS03ZGIyLWQ2MjY2OWE0ODQzOS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hMzYyMmE0Mi0wMjc3LTQ3NzUtYjMwNi03MmZhNDA1YTE0OWY",name:"Keto Prosciutto Arugula Side Salad",price:"🕑43min",save:"⭐⭐⭐⭐  734 ratings",wasPrice:"🟣5g  🔵53g  🟠41g"},
    {image:"https://images.carbmanager.com/BqyBw99gY3a5071NeUFMb7VIZJRHrALrtw63NnMPMAs/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzJlMzQ2Y2Q4LTk2MDctYzdlMC1jMTAzLTBjNTU0MjJhMzhjMy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0wMTMyMDkxNi03ZTkwLTRhYWItOWVlZi0yNDc3Mjc0ZGZhMWE",name:"Keto Mozzarella And Avocado Salad",price:"🕑26min",save:"⭐⭐⭐⭐  676 ratings",wasPrice:"🟣3g  🔵22g  🟠17g"},
    {image:"https://images.carbmanager.com/ECck9CCP-Y7pPdtyOshxSGCKjVmLjQZcftq-MwLna4E/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzgyYjBkZjQ0LTI5ZjktZjg3OS0yZDk4LTZiYzE3MmI3YjRjNi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj01MzdjOTAzMS1kZDIxLTQ2ZDYtYTNjNi05ZGQyZGQ5MGE4NDA",name:"Keto Green Goddess Kale Salad",price:"🕑15min",save:"⭐⭐⭐⭐⭐  657 ratings",wasPrice:"🟣4g  🔵8g  🟠22g"},
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
