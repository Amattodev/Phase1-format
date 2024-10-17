
//俺がやるボタン
const cntUp = document.getElementById("cntUp");
let cntPerson = 0;
cntUp.addEventListener('click', () => {
    cntPerson += 1;
    console.log(cntPerson);
}
)

//どうぞどうぞボタン
const reply = document.getElementById("reply");
reply.addEventListener('click', () => {
    const message = "どうぞどうぞ";
    const action = message.repeat(cntPerson);
    alert(action);
    cntPerson = 0;
}
)

//俺はやらないボタン
const cntDown = document.getElementById("cntDown");
cntDown.addEventListener('click', () => {
    cntPerson -= 1;
    if (cntPerson < 0) {
        alert("もう誰もいない");
        cntPerson = 0;
    }
})

