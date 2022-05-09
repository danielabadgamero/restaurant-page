function takeawayTab() {
  console.log("Hello World!");
  const deleteElements = [...document.querySelectorAll("p")];
  deleteElements.forEach(element => {
    element.parentElement.removeChild(element);
  })
  const para = document.createElement("p");
  const content = document.querySelector("#content");
  para.style.display = "flex";
  para.style.flexDirection = "column";
  para.style.justifyContent = "center";
  para.style.alignItems = "center";
  para.style.gap = "20px";
  para.innerHTML = "<div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Breakfast</h1>If you're in a hurry, this is the best solution to start the morning well. <img src='./breakfast.jpg' width='60%' style='margin: 20px;'><br>The box includes a croissant, orange juice and strawberries. The food is, however, customizable and you may choose whatever breakfast you want. The corresponding costs will be applied.</div><div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Lunch</h1>You don't have much time when you get out of the work to eat and then return? Simply buy this take-away menu to eat it on the way!<img src='./food.avif' width='60%' style='margin: 20px;'><br>This menu includes several boxes with meat, soup and other tasty meals. The food is, however, customizable and you may choose whatever ingredients you want. The corresponding costs will be applied.</div><div style='width: 30vw; height: 30vw; border: 2px solid black; border-radius: 50px; background-color: #6F4E37; color: white; padding: 50px;'><h1>Take-Away Dinner</h1>Tired after a tough journey at work? No need to be overwhelmed at a restaurent or spend an hour to cook your dinner!<img src='./dinner.jpg' width='60%' style='margin: 20px;'><br>This menu includes several boxes with meat, soup and other tasty meals. The food is, however, customizable and you may choose whatever ingredients you want. The corresponding costs will be applied.</div>";
  para.style.margin = "50px 500px";
  content.appendChild(para);
}

export {takeawayTab}