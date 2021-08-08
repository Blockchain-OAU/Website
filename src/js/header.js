window.addEventListener("load", () => {
  // add event listeners
  document.querySelector("header .close").addEventListener("click", () => {
    document.querySelector("body").classList.remove("show-mobile-menu");
  })

  document.querySelector("#hamburger").addEventListener("click", () => {
    document.querySelector("body").classList.add("show-mobile-menu");
  })
})