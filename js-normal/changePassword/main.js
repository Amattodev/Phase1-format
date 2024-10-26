const nowPassword = document.getElementById("nowPassword");
const setPassword = document.getElementById("setPassword");
const confirmPassword = document.getElementById("confirmPassword");
const newPassword = document.getElementById("newPassword");

let password = "aaaaa";
nowPassword.textContent = `現在のパスワードは ${password}`;

//8文字以上の制限
// setPassword.addEventListener("click", () => {
//   if (confirmPassword.value !== password) {
//     alert("パスワードが一致しません");
//     return;
//   }
//   if (newPassword.value.length < 8) {
//     alert("パスワードは8文字以上にしてください");
//     return;
//   }
//   if (newPassword.value === password) {
//     alert("同じパスワードは使用できません");
//     return;
//   }

//   password = newPassword.value;
//   nowPassword.textContent = `現在のパスワードは ${password}`;
// });

// チャレンジ問題(正規表現)
// 郵便番号
// setPassword.addEventListener("click", () => {
//   let result = newPassword.value.match(/^\d{3}-?\d{4}$/g);
//   if (confirmPassword.value !== password) {
//     alert("パスワードが一致しません");
//     return;
//   }
//   if (!result) {
//     alert("郵便番号の形式で入力してください");
//     return;
//   }
//   if (newPassword.value === password) {
//     alert("同じパスワードは使用できません");
//     return;
//   }

//   password = newPassword.value;
//   nowPassword.textContent = `現在のパスワードは ${password}`;
// });

//同じ文字を連続して使わない
// setPassword.addEventListener("click", () => {
//   let result = newPassword.value.match(/(.)\1/);
//   if (confirmPassword.value !== password) {
//     alert("パスワードが一致しません");
//     return;
//   }
//   if (result) {
//     alert("同じ文字を連続して使わないでください");
//     return;
//   }
//   if (newPassword.value === password) {
//     alert("同じパスワードは使用できません");
//     return;
//   }

//   password = newPassword.value;
//   nowPassword.textContent = `現在のパスワードは ${password}`;
// });

//abc連続で並ぶものは使えない（特定のルールのみ）
setPassword.addEventListener("click", () => {
  let result = newPassword.value.match(/abc/g);
  if (confirmPassword.value !== password) {
    alert("パスワードが一致しません");
    return;
  }
  if (result) {
    alert("「abc」を含むものは使えません");
    return;
  }
  if (newPassword.value === password) {
    alert("同じパスワードは使用できません");
    return;
  }

  password = newPassword.value;
  nowPassword.textContent = `現在のパスワードは ${password}`;
});
