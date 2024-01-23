export const greet = (name) => {
  console.log(`Hello, ${name}`)
}

// Бургер
export const burger = () => {
const iconMenu = document.querySelector(".menu__icon")
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body")
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active")
    menuBody.classList.toggle("_active")
  })
}
}