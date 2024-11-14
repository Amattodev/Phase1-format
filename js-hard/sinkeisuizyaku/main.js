const panel = document.getElementById("panel");
let cards = [1, 1, 2, 2, 3, 3, 4, 4];
let flippedCards = [];

//シャッフルする関数
const shuffle = () => {
  for (i = cards.length; 1 < i; i--) {
    let randomNum = Math.floor(Math.random() * i); //0~7
    [cards[randomNum], cards[i - 1]] = [cards[i - 1], cards[randomNum]];
  }
};
shuffle();

cards.forEach((index) => {
  const card = document.createElement("div");
  card.classList.add("card", "back");
  panel.appendChild(card);
  card.textContent = cards[index];
  card.addEventListener("click", () => {
    if (flippedCards.length < 2) {
      card.classList.remove("back");
      card.classList.add("flipped");
      flippedCards.push(card);
      setTimeout(checkCards, 1500);
    }
  });
});

const checkCards = () => {
  if (flippedCards[0].textContent === flippedCards[1].textContent) {
    flippedCards[0].classList.add("finish");
    flippedCards[1].classList.add("finish");
    console.log(flippedCards[0].textContent, flippedCards[1].textContent);
    flippedCards = [];
  } else {
    flippedCards[0].classList.remove("flipped");
    flippedCards[1].classList.remove("flipped");
    flippedCards[0].classList.add("back");
    flippedCards[1].classList.add("back");
    console.log(flippedCards[0].textContent, flippedCards[1].textContent);
    flippedCards = [];
  }
  console.log(flippedCards);
};
