const titles = document.querySelectorAll(".accordion .title");
const contents = document.querySelectorAll(".accordion .content");

contents[0].computedStyleMap.display = "block";
titles.forEach((title) => {
  title.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const allTitles = this.patentNode.querySelectorAll(".accordion .title");
    const allContents = this.parentNode.querySelectorAll(".accordion .content");
    console.log(allTitles);
    allTitles.forEach((item) => {
      if (item !== title) {
        item.classList.remove("active");
      }
    });
    allContents.forEach((item) => {
      if (item !== content) {
        item.style.display = "none";
      }
    });
    content.style.dsiplay =
      content.style.display === "block" ? "none" : "block";
  });
});
