const nowPassword = document.getElementById("nowPassword");
const setPassword = document.getElementById("setPassword");
const confirmPassword = document.getElementById("confirmPassword");
const newPassword = document.getElementById("newPassword");

let password = "aaaaa";
nowPassword.textContent = `現在のパスワードは ${password}`;

//8文字以上の制限
//事前にvalueをつけて呼び出してもよい
setPassword.addEventListener("click", () => {
  if (confirmPassword.value === password) {
    if (newPassword.value !== password) {
      if (newPassword.value.length >= 8) {
        password = newPassword.value;
        nowPassword.textContent = `現在のパスワードは ${password}`;
      } else {
        alert("パスワードは8文字以上にしてください");
      }
    } else {
      alert("同じパスワードは使用できません");
    }
  } else {
    alert("パスワードが一致しません");
  }
});

//チャレンジ問題(正規表現)
//
