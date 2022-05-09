import { aboutTab } from "./aboutTab"
import { locationTab } from "./locationTab"
import { homeTab } from "./homeTab"
import { breakfastTab } from "./breakfastTab"
import { takeawayTab } from "./takeawayTab"
import { dinnerTab } from "./dinnerTab"
import { lunchTab } from "./lunchTab"

function switchTabs() {
  const linksLeft = [...document.querySelectorAll("li")];
  const linksRight = [...document.querySelectorAll("li")];
  linksLeft.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
      e.target.style.cursor = "pointer";
    })
    link.addEventListener("click", (e) => {
      window.scroll({
        top: 100,
        left: 0,
        behavior: "smooth",
      })
      switch (e.target.id) {
        case "about":
          aboutTab();
          break;
        case "location":
          locationTab();
          break;
        case "home":
          homeTab();
          break;
      }
    })
  })
  linksRight.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
      e.target.style.cursor = "pointer";
    })
    link.addEventListener("click", (e) => {
      window.scroll({
        top: 1000,
        left: 0,
        behavior: "smooth",
      })
      switch (e.target.id) {
        case "breakfast":
          breakfastTab();
          break;
        case "take-away":
          takeawayTab();
          break;
        case "dinner":
          dinnerTab();
          break;
        case "lunch":
          lunchTab();
          break;
      }
    })
  })
}

export {switchTabs}