function homeTab() {
  console.log("Hello World!");
  const deleteElements = [...document.querySelectorAll("p")];
  deleteElements.forEach(element => {
    element.parentElement.removeChild(element);
  })
}

export {homeTab}