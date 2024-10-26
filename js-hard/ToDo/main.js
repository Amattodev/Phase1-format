const addTask = document.querySelector(".add-btn");
const text = document.getElementById("add-area");
const todo = document.getElementById("todo");

addTask.addEventListener("click", () => {
  if (text.value) {
    //追加ボタン
    const list = document.createElement("li");
    list.textContent = text.value;
    todo.appendChild(list);
    //完了ボタン
    const rmBtn = document.createElement("button");
    rmBtn.textContent = "完了";
    list.appendChild(rmBtn);
    rmBtn.addEventListener("click", () => {
      todo.removeChild(list);
    });
  } else {
    alert("タスクを入力してください");
  }
});
