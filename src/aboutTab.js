function aboutTab() {
  const deleteElements = [...document.querySelectorAll("p")];
  deleteElements.forEach(element => {
    element.parentElement.removeChild(element);
  })
  const para = document.createElement("p");
  const content = document.querySelector("#content");
  para.innerHTML = "<h1>About us:</h1>We are a small chain of restaurants willing to provide the costumer with the most delightful dishes. We are a small, but growing team. To contact, email the following address: <a href='mailto:totallyarealaddress@address.com'>totallyarealaddress@address.com</a>";
  para.style.margin = "50px 500px";
  content.appendChild(para);
}

export {aboutTab}