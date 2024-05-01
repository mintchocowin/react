const openSearch = document.querySelector(".open-search");
const closeSearch = document.querySelector(".close-search");
const modalSearch = docoument.querySelector(".modal-search");
console.log(openSearch);

openSearch.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

closeSearch.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});

const searchBar = document.querySelector(".field input[type=search]");
searchBar.addEventListener("focus", function () {
  const element = this.parentElemnet.parentElemnet.nextElmentSibling;
  element.style.display = "block";
});
searchBar.addEventListener("blur", function () {
  const element = this.parentElemnet.parentElemnet.nextElmentSibling;
  element.style.display = "none";
});
