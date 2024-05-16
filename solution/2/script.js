import { userDataList } from "./db.js";

const tabButtons = document.querySelectorAll(".button");

const updateList = (filterdList) => {
  let listHtml = "";
  for (let data of filterdList) {
    listHtml += `<li>${data.name} : ${data.age}세 </li>`;
  }
  document.querySelector(".user_list").innerHTML = listHtml;
};
const onClickButton = (event) => {
  const button = event.target;
  const targetAge = button.dataset.age;
  const filteredList = userDataList.filter((data) => data.age >= targetAge);
  updateList(filteredList);
  console.log(targetAge);
};

tabButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    onClickButton(event);
  });
});
