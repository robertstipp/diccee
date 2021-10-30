// Random Number
var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

// Dice Roll
document.querySelector(".img1").setAttribute("src",("./images/dice" + randomNumber1 + ".png"));
document.querySelector(".img2").setAttribute("src",("./images/dice" + randomNumber2 + ".png"));

// Winner Select

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
