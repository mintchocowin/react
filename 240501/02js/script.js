const trigger = document.querySelector(".trigger");
console.log("trigger");
const modal = document.querySelector("#modal-notice");
trigger.addEventListener("click", () => {
  modal.classList.add("active");
});

const closeBtn = document.querySelector(".btn-close");
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
