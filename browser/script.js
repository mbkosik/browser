
const searchInput = document.querySelector(".search__input");
const listItemsArray = [...document.querySelectorAll(".list__item")];

const searchDrink = () => {
    listItemsArray.forEach((i) => {
        if (i.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }
    })
}

searchInput.addEventListener("input", searchDrink);

