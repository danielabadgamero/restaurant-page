(()=>{"use strict";!function(){const e=document.getElementById("content"),t=document.createElement("header"),o=document.createElement("h1"),n=document.createElement("ul"),r=document.createElement("ul"),a=[document.createElement("li"),document.createElement("li"),document.createElement("li")],i=[document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li")],l=document.createElement("main"),s=document.createElement("img"),d=document.createElement("h1");o.textContent="My Restaurant",a[0].textContent="About",a[1].textContent="Location",a[2].textContent="Home",i[0].textContent="Breakfast",i[1].textContent="Lunch",i[2].textContent="Dinner",i[3].textContent="Take-Away",a[0].id="about",a[1].id="location",a[2].id="home",i[0].id="breakfast",i[1].id="lunch",i[2].id="dinner",i[3].id="take-away",s.setAttribute("src","./restaurant.webp"),d.innerHTML="The <em>best</em> restaurant <em>you</em> will find!",document.querySelector("body").style.margin="0",document.querySelector("body").style.overflowX="hidden",e.style.display="flex",e.style.flexDirection="column",t.style.display="flex",t.style.justifyContent="space-evenly",t.style.alignContent="center",t.style.backgroundColor="#6F4E37",t.style.fontSize="1.5em",t.style.fontFamily="'Poppins', sans-serif",n.style.display="flex",n.style.flex="1",n.style.listStyle="none",n.style.gap="20px",n.style.alignContent="center",n.style.justifyContent="center",n.style.padding="0",r.style.display="flex",r.style.listStyle="none",r.style.gap="20px",r.style.alignContent="center",r.style.justifyContent="center",r.style.padding="0",r.style.flex="1",o.style.alignContent="center",o.style.justifyContent="center",o.style.fontFamily="'Koulen', cursive",o.style.letterSpacing="0.02em",o.style.flex="1",o.style.textAlign="center",a.map((e=>e.style.margin="auto")),i.map((e=>e.style.margin="auto")),a.map((e=>e.style.marginLeft="10%")),i.map((e=>e.style.marginRight="10%")),s.style.width="100vw",s.style.overflowX="hidden",s.style.boxShadow="0 0 10px 0 black",d.style.position="absolute",d.style.zIndex="10",d.style.top="30%",d.style.fontSize="5em",d.style.color="white",d.style.width="100%",d.style.padding="20px",d.style.textAlign="center",d.style.backgroundColor="rgba(0,0,0,0.6)",e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),a.forEach((e=>{n.appendChild(e)})),i.forEach((e=>{r.appendChild(e)})),e.appendChild(l),l.appendChild(s),l.appendChild(d)}(),function(){const e=[...document.querySelectorAll("li")],t=[...document.querySelectorAll("li")];e.forEach((e=>{e.addEventListener("mouseenter",(e=>{e.target.style.cursor="pointer"})),e.addEventListener("click",(e=>{switch(window.scroll({top:100,left:0,behavior:"smooth"}),e.target.id){case"about":!function(){[...document.querySelectorAll("p")].forEach((e=>{e.parentElement.removeChild(e)}));const e=document.createElement("p"),t=document.querySelector("#content");e.innerHTML="<h1>About us:</h1>We are a small chain of restaurants willing to provide the costumer with the most delightful dishes. We are a small, but growing team. To contact, email the following address: <a href='mailto:totallyarealaddress@address.com'>totallyarealaddress@address.com</a>",e.style.margin="50px 500px",t.appendChild(e)}();break;case"location":!function(){console.log("Hello World!"),[...document.querySelectorAll("p")].forEach((e=>{e.parentElement.removeChild(e)}));const e=document.createElement("p"),t=document.querySelector("#content");e.innerHTML="<h1>Location</h1>There is currently no location available. This restaurant only works online.",e.style.margin="50px 500px",t.appendChild(e)}();break;case"home":console.log("Hello World!"),[...document.querySelectorAll("p")].forEach((e=>{e.parentElement.removeChild(e)}))}}))})),t.forEach((e=>{e.addEventListener("mouseenter",(e=>{e.target.style.cursor="pointer"})),e.addEventListener("click",(e=>{switch(window.scroll({top:1e3,left:0,behavior:"smooth"}),e.target.id){case"breakfast":!function(){console.log("Hello World!"),[...document.querySelectorAll("p")].forEach((e=>{e.parentElement.removeChild(e)}));const e=document.createElement("p"),t=document.querySelector("#content");e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.gap="20px",e.innerHTML="<div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Breakfast</h1>If you're in a hurry, this is the best solution to start the morning well. <img src='./breakfast.jpg' width='60%' style='margin: 20px;'><br>The box includes a croissant, orange juice and strawberries. The food is, however, customizable and you may choose whatever breakfast you want. The corresponding costs will be applied.</div><div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Lunch</h1>You don't have much time when you get out of the work to eat and then return? Simply buy this take-away menu to eat it on the way!<img src='./food.avif' width='60%' style='margin: 20px;'><br>This menu includes several boxes with meat, soup and other tasty meals. The food is, however, customizable and you may choose whatever ingredients you want. The corresponding costs will be applied.</div><div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Dinner</h1>Tired after a tough journey at work? No need to be overwhelmed at a restaurent or spend an hour to cook your dinner!<img src='./dinner.jpg' width='60%' style='margin: 20px;'><br>This menu includes several boxes with meat, soup and other tasty meals. The food is, however, customizable and you may choose whatever ingredients you want. The corresponding costs will be applied.</div>",e.style.margin="50px 500px",t.appendChild(e)}();break;case"take-away":!function(){console.log("Hello World!"),[...document.querySelectorAll("p")].forEach((e=>{e.parentElement.removeChild(e)}));const e=document.createElement("p"),t=document.querySelector("#content");e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.gap="20px",e.innerHTML="<div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Breakfast</h1>If you're in a hurry, this is the best solution to start the morning well. <img src='./breakfast.jpg' width='60%' style='margin: 20px;'><br>The box includes a croissant, orange juice and strawberries. The food is, however, customizable and you may choose whatever breakfast you want. The corresponding costs will be applied.</div><div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Lunch</h1>You don't have much time when you get out of the work to eat and then return? Simply buy this take-away menu to eat it on the way!<img src='./food.avif' width='60%' style='margin: 20px;'><br>This menu includes several boxes with meat, soup and other tasty meals. The food is, however, customizable and you may choose whatever ingredients you want. The corresponding costs will be applied.</div><div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Dinner</h1>Tired after a tough journey at work? No need to be overwhelmed at a restaurent or spend an hour to cook your dinner!<img src='./dinner.jpg' width='60%' style='margin: 20px;'><br>This menu includes several boxes with meat, soup and other tasty meals. The food is, however, customizable and you may choose whatever ingredients you want. The corresponding costs will be applied.</div>",e.style.margin="50px 500px",t.appendChild(e)}();break;case"dinner":!function(){console.log("Hello World!"),[...document.querySelectorAll("p")].forEach((e=>{e.parentElement.removeChild(e)}));const e=document.createElement("p"),t=document.querySelector("#content");e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.gap="20px",e.innerHTML="<div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Breakfast</h1>If you're in a hurry, this is the best solution to start the morning well. <img src='./breakfast.jpg' width='60%' style='margin: 20px;'><br>The box includes a croissant, orange juice and strawberries. The food is, however, customizable and you may choose whatever breakfast you want. The corresponding costs will be applied.</div><div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Lunch</h1>You don't have much time when you get out of the work to eat and then return? Simply buy this take-away menu to eat it on the way!<img src='./food.avif' width='60%' style='margin: 20px;'><br>This menu includes several boxes with meat, soup and other tasty meals. The food is, however, customizable and you may choose whatever ingredients you want. The corresponding costs will be applied.</div><div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Dinner</h1>Tired after a tough journey at work? No need to be overwhelmed at a restaurent or spend an hour to cook your dinner!<img src='./dinner.jpg' width='60%' style='margin: 20px;'><br>This menu includes several boxes with meat, soup and other tasty meals. The food is, however, customizable and you may choose whatever ingredients you want. The corresponding costs will be applied.</div>",e.style.margin="50px 500px",t.appendChild(e)}();break;case"lunch":!function(){console.log("Hello World!"),[...document.querySelectorAll("p")].forEach((e=>{e.parentElement.removeChild(e)}));const e=document.createElement("p"),t=document.querySelector("#content");e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.gap="20px",e.innerHTML="<div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Breakfast</h1>If you're in a hurry, this is the best solution to start the morning well. <img src='./breakfast.jpg' width='60%' style='margin: 20px;'><br>The box includes a croissant, orange juice and strawberries. The food is, however, customizable and you may choose whatever breakfast you want. The corresponding costs will be applied.</div><div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Lunch</h1>You don't have much time when you get out of the work to eat and then return? Simply buy this take-away menu to eat it on the way!<img src='./food.avif' width='60%' style='margin: 20px;'><br>This menu includes several boxes with meat, soup and other tasty meals. The food is, however, customizable and you may choose whatever ingredients you want. The corresponding costs will be applied.</div><div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Dinner</h1>Tired after a tough journey at work? No need to be overwhelmed at a restaurent or spend an hour to cook your dinner!<img src='./dinner.jpg' width='60%' style='margin: 20px;'><br>This menu includes several boxes with meat, soup and other tasty meals. The food is, however, customizable and you may choose whatever ingredients you want. The corresponding costs will be applied.</div>",e.style.margin="50px 500px",t.appendChild(e)}()}}))}))}()})();