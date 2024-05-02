let menuMobile = document.querySelector(".menu-mobile")

function menuShow() {
  if  (menuMobile.classList.contains("open")){
    menuMobile.classList.remove("open")
    document.querySelector(".icon").src = "./src/assets/bars-solid.svg"
  } else {
    menuMobile.classList.add("open")
    document.querySelector(".icon").src = "./src/assets/x-solid.svg"
  }
}