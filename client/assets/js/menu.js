const btnOpenDrink = document.querySelector('.js-drink')
const btnOpenFood = document.querySelector('.js-food')
const DrinkMenu = document.querySelector('.js-drink-menu')
const FoodMenu = document.querySelector('.js-food-menu')
// console.log(btnOpenDrink);
// console.log(FoodMenu);

btnOpenFood.addEventListener('click', showFoodMenu)
function showFoodMenu() {
    FoodMenu.classList.remove('close')
    FoodMenu.classList.add('open')
    DrinkMenu.classList.remove('open')
    DrinkMenu.classList.add('close')

    btnOpenFood.classList.remove('nav-menu-notactive')
    btnOpenFood.classList.add('nav-menu-active')
    btnOpenDrink.classList.remove('nav-menu-active')
    btnOpenDrink.classList.add('nav-menu-notactive')
}


btnOpenDrink.addEventListener('click', showDrinkMenu)
function showDrinkMenu() {
    DrinkMenu.classList.remove('close')
    DrinkMenu.classList.add('open')
    FoodMenu.classList.remove('open')
    FoodMenu.classList.add('close')

    btnOpenDrink.classList.remove('nav-menu-notactive')
    btnOpenDrink.classList.add('nav-menu-active')
    btnOpenFood.classList.remove('nav-menu-active')
    btnOpenFood.classList.add('nav-menu-notactive')
}