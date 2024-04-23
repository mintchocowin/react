// const button = document.querySelector(".category-accordion .title::after");
// const detail = document.querySelectorAll(".detail");
// console.log(button);

// button.addEventListener("click", function () {
//   detail.style.display = block;
// });

const titles = document.querySelectorAll(".category-accordion .title");
const details = document.querySelectorAll(".category-accordion .detail");

const firstDetail = titles[0].nextElementSibling;
console.log(firstDetail);
firstDetail.style.display = "block";

titles.forEach((title) => {
  title.addEventListener("click", function () {
    titles.forEach((title) => {
      title.classList.remove("active");
    });
    this.classList.toggle("active");
    const detail = this.nextElementSibling;
    detail.style.display = `block`;

    details.forEach((d) => {
      if (d !== detail) {
        d.style.display = "none";
      }
    });
  });
});

//boolean으로 뭘 또 해보래..