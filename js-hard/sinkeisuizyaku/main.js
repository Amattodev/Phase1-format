const gameData = {
  cards: [1, 1, 2, 2, 3, 3, 4, 4],
  flipCardsArray: [],
  cardMatchCount: 0,
};

const shuffle = () => {
  for (i = gameData.cards.length; 0 < i; i--) {
    let randomNum = Math.floor(Math.random() * i); //0~7
    [gameData.cards[randomNum], gameData.cards[i - 1]] = [
      gameData.cards[i - 1],
      gameData.cards[randomNum],
    ];
  }
  flipCards();
};

const flipCards = () => {
  gameData.cards.forEach((element) => {
    //カードに数字を表示
    const panel = document.getElementById("panel");
    const card = document.createElement("div");
    card.classList.add("card", "back");
    panel.appendChild(card);
    card.textContent = element;
    //カードをフリップする
    card.addEventListener("click", () => {
      if (gameData.flipCardsArray.length < 2) {
        card.classList.remove("back");
        card.classList.add("flipped");
        gameData.flipCardsArray.push(card);
        setTimeout(checkCards, 1500);
      }
    });
  });
};

const checkCards = () => {
  if (
    gameData.flipCardsArray[0].textContent ===
    gameData.flipCardsArray[1].textContent
  ) {
    gameData.flipCardsArray[0].classList.add("finish");
    gameData.flipCardsArray[1].classList.add("finish");
    gameData.cardMatchCount += 2;
    gameData.flipCardsArray = [];
    if (gameData.cardMatchCount === gameData.cards.length) {
      console.log("aaa");
      alert("終了");
    }
  } else {
    gameData.flipCardsArray[0].classList.remove("flipped");
    gameData.flipCardsArray[1].classList.remove("flipped");
    gameData.flipCardsArray[0].classList.add("back");
    gameData.flipCardsArray[1].classList.add("back");
    gameData.flipCardsArray = [];
  }
};

shuffle();
