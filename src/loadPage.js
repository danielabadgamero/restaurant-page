function loadPage() {

  const content = document.getElementById("content");
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const navLeft = document.createElement("ul");
  const navRight = document.createElement("ul");
  const linksLeft = [document.createElement("li"), document.createElement("li"), document.createElement("li")];
  const linksRight = [document.createElement("li"), document.createElement("li"), document.createElement("li"), document.createElement("li")];
  const main = document.createElement("main");
  const img = document.createElement("img");
  const para = document.createElement("h1");

  h1.textContent = "My Restaurant";
  linksLeft[0].textContent = "About";
  linksLeft[1].textContent = "Location";
  linksLeft[2].textContent = "Home";
  linksRight[0].textContent = "Breakfast";
  linksRight[1].textContent = "Lunch";
  linksRight[2].textContent = "Dinner";
  linksRight[3].textContent = "Take-Away";
  linksLeft[0].id = "about";
  linksLeft[1].id = "location";
  linksLeft[2].id = "home";
  linksRight[0].id = "breakfast";
  linksRight[1].id = "lunch";
  linksRight[2].id = "dinner";
  linksRight[3].id = "take-away";
  img.setAttribute("src", "./restaurant.webp");
  para.innerHTML = "The <em>best</em> restaurant <em>you</em> will find!"

  document.querySelector("body").style.margin = "0";
  document.querySelector("body").style.overflowX = "hidden";

  content.style.display = "flex";
  content.style.flexDirection = "column";

  header.style.display = "flex";
  header.style.justifyContent = "space-evenly";
  header.style.alignContent = "center";
  header.style.backgroundColor = "#6F4E37";
  header.style.fontSize = "1.5em";
  header.style.fontFamily = "'Poppins', sans-serif";

  navLeft.style.display = "flex";
  navLeft.style.flex = "1";
  navLeft.style.listStyle = "none"
  navLeft.style.gap = "20px";
  navLeft.style.alignContent = "center";
  navLeft.style.justifyContent = "center";
  navLeft.style.padding = "0";

  navRight.style.display = "flex";
  navRight.style.listStyle = "none"
  navRight.style.gap = "20px";
  navRight.style.alignContent = "center";
  navRight.style.justifyContent = "center";
  navRight.style.padding = "0";
  navRight.style.flex = "1";

  h1.style.alignContent = "center";
  h1.style.justifyContent = "center";
  h1.style.fontFamily = "'Koulen', cursive";
  h1.style.letterSpacing = "0.02em";
  h1.style.flex = "1";
  h1.style.textAlign = "center";

  linksLeft.map(link => link.style.margin = "auto");
  linksRight.map(link => link.style.margin = "auto");
  linksLeft.map(link => link.style.marginLeft = "10%");
  linksRight.map(link => link.style.marginRight = "10%");

  img.style.width = "100vw";
  img.style.overflowX = "hidden";
  img.style.boxShadow = "0 0 10px 0 black"

  para.style.position = "absolute";
  para.style.zIndex = "10";
  para.style.top = "30%";
  para.style.fontSize = "5em";
  para.style.color = "white";
  para.style.width = "100%";
  para.style.padding = "20px";
  para.style.textAlign = "center";
  para.style.backgroundColor = "rgba(0,0,0,0.6)";

  content.appendChild(header);
  header.appendChild(navLeft);
  header.appendChild(h1);
  header.appendChild(navRight);
  linksLeft.forEach(link => {
    navLeft.appendChild(link);
  })
  linksRight.forEach(link => {
    navRight.appendChild(link);
  })
  content.appendChild(main);
  main.appendChild(img);
  main.appendChild(para);
}

export {loadPage}