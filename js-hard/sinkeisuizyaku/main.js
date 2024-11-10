const panel = document.getElementById("panel");
let cards = [1, 1, 2, 2, 3, 3, 4, 4];
let flippedCards = [];

//シャッフルする関数
const shuffle = () => {
  for (i = cards.length; 1 < i; i--) {
    let randomNum = Math.floor(Math.random() * i); //0~7
    [cards[randomNum], cards[i - 1]] = [cards[i - 1], cards[randomNum]];
    console.log(cards);
    console.log("ランダム", randomNum);
    console.log("要素", i);
  }
};
shuffle();

cards.forEach((index) => {
  const card = document.createElement("div");
  card.classList.add("card", "back");
  panel.appendChild(card);
  card.addEventListener("click", () => {
    if (flippedCards.length < 2) {
      card.classList.remove("back");
      card.classList.add("flipped");
      flippedCards.push(card);
      card.textContent = cards[index];
    }
  });
});
