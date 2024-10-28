const dateSet = document.getElementById("dateSet");
const searchBtn = document.getElementById("dateSearch");
const diffTime = document.getElementById("diffTime");

//日付処理（ドラえもん処理）
// const body = document.querySelector("body");
// const text = document.createElement("p");
// body.appendChild(text);

// const countDown = () => {
//   let now = moment();
//   const birthday = moment("21120903", "YYYYMMDD");

//   let diff = birthday.diff(now); //ミリ秒単位で差分を出す
//   const duration = moment.duration(diff); //日・時・分の単位への変換するため

//   const days = Math.floor(duration.asDays());
//   const hours = duration.hours();
//   const minutes = duration.minutes();
//   const seconds = duration.seconds();

//   text.textContent = `ドラえもんが生まれるまであと${days}日${hours}時間${minutes}分${seconds}秒`;
// };

// setInterval(countDown, 1000);

//日付処理(チャレンジ問題)
const countDown2 = () => {
  let now = moment();
  const selectedDate = moment(dateSet.value);

  let diff = selectedDate.diff(now);
  const duration = moment.duration(diff);

  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  diffTime.textContent = `${dateSet.value}まで${days}日${hours}時間${minutes}分${seconds}秒`;
};

searchBtn.addEventListener("click", () => {
  setInterval(countDown2, 1000);
});
