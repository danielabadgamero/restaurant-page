function locationTab() {
  console.log("Hello World!");
  const deleteElements = [...document.querySelectorAll("p")];
  deleteElements.forEach(element => {
    element.parentElement.removeChild(element);
  })
  const para = document.createElement("p");
  const content = document.querySelector("#content");
  para.innerHTML = "<h1>Location</h1>There is currently no location available. This restaurant only works online.";
  para.style.margin = "50px 500px";
  content.appendChild(para);
}

export {locationTab}