
let category=[{url:"https://cdn.document360.io/39f753db-7167-486f-a297-e9dee7536f7d/Images/Documentation/help-support.svg",
name:"Connect With Carb Manager",
release:"Do you want to help us create or improve Carb Manager features?",
},
{url:"https://cdn.document360.io/39f753db-7167-486f-a297-e9dee7536f7d/Images/Documentation/community.svg",
name:"Get started",
release:"The quick-start guide for setting up and using Carb Manager",
},
{url:"https://cdn.document360.io/39f753db-7167-486f-a297-e9dee7536f7d/Images/Documentation/measurements.svg",
name:"Set your goals",
release:"Set or reset your diet, health, and activity goals",
},
{url:"https://cdn.document360.io/39f753db-7167-486f-a297-e9dee7536f7d/Images/Documentation/goals.svg",
name:"customize app settings",
release:"Connect fitness devices, adjust your preferences, and set reminders",
},
{url:"https://cdn.document360.io/39f753db-7167-486f-a297-e9dee7536f7d/Images/Documentation/settings-app.svg",
name:"Track foods, activities, and fasting",
release:"Find and log foods, recipies, meal plans and exercises. Set up and log your fasting hours.",
},
{url:"https://cdn.document360.io/39f753db-7167-486f-a297-e9dee7536f7d/Images/Documentation/meals.svg",
name:"Track body and health measurements",
release:"track weight, sleeping hours, blood glucose, ketones, exercise minutes, and dozens more",
},
{url:"https://cdn.document360.io/39f753db-7167-486f-a297-e9dee7536f7d/Images/Documentation/measurements.svg",
name:"View and analyze progress towards goals",
release:"Visualyze progress and gain insights into your health and wellness.",
},
{url:"https://cdn.document360.io/39f753db-7167-486f-a297-e9dee7536f7d/Images/Documentation/community.svg",
name:"Manage your account",
release:"Manage a Premium subcription change your password add your profile picture and more ",
},
{url:"https://cdn.document360.io/39f753db-7167-486f-a297-e9dee7536f7d/Images/Documentation/help-support.svg",
name:"Connect with the community",
release:"Join a group, learn with the Keto Academy, chat with friends, or complete a challenge.",
},
{url:"https://cdn.document360.io/39f753db-7167-486f-a297-e9dee7536f7d/Images/Documentation/settings-account.svg",
name:"Get more help",
release:"Advice on troubleshooting problems and how to contact the support team",
}]
localStorage.setItem("category", JSON.stringify(category))

let div=document.createElement("div")
let img=document.createElement("img")

let i=0
   
  


function displaydata(){
  category.forEach((el)=>{
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    div2.setAttribute("id","para");
    let poster = document.createElement("img");
    poster.src = el.url;
    let p = document.createElement("h2");
    p.innerText = el.name;
    let p1 = document.createElement("p");
    p1.innerText = el.release;
    div2.append(p,p1);
    div.append(poster,div2);
    document.querySelector("#category").append(div);
  })
}
displaydata()