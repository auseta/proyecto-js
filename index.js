let hamburgerMenu = document.querySelector(".menu-icon");
console.log(hamburgerMenu);
let hamburgerMenuList = document.querySelector(".hamburger-menu-items")

//* Comportamiento del menu hamburguesa
hamburgerMenu.addEventListener("click", (e) => {
    (hamburgerMenuList.style.display === "flex" ? hamburgerMenuList.style.display = "none" : hamburgerMenuList.style.display = "flex")
    e.preventDefault()
});
