let menuButton = document.getElementById("menu-button")
let menuScreen = document.getElementById("menu-screen")
menuButton.addEventListener("click", () => {
    menuScreen.style.display = "flex"
})
menuScreen.addEventListener("click", () => {
    menuScreen.style.display = "none"
})




