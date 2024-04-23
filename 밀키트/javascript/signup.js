const month = document.querySelector(".month");
for (let i = 1; i <= 12; i++) {
  const option = document.createElement("option");
  option.innerText = `${i}월`;
  option.setAttribute("value", i);
  month.appendChild(option);
}

const day = document.querySelector(".day");
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.innerText = `${i}일`;
  day.appendChild(option);
}

const button = document.querySelector(".receive");
button.addEventListener("click", () => {
  const userPhone = document.querySelector(".userphone");
  const phonenumber = userPhone.value.replace(/-/g, "");
  const authNumber = Math.floor(Math.random() * 9000) + 1000;
  alert(`${phonenumber}님의 인증번호는 ${authNumber}입니다`);

  const authInput = document.querySelector(
    ".authenticate div.last=child input"
  );
  const authBtn = document.querySelector(".prove");
  authBtn.addEventListener("click", () => {
    if (Number(autNum) === Number(authInput.value)) {
      alert("정상인증되었습니다. 가입하기 버튼을 눌러주세요");
    } else {
      alert("인증번호 불일치합니다. 다시 시도해주세욥!");
    }
  });
});

//카운트, 정상적이메일판단(@,.com)., 비밀번호,약관동의
