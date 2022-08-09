"use strict";
let SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const btnCheck = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const divNumber = document.querySelector(".number");
const spanScore = document.querySelector(".score");
const spanHighScore = document.querySelector(".highscore");
const btnAgain = document.querySelector(".again");

divNumber.innerHTML = SECRET_NUMBER;
spanScore.innerHTML = score;
spanHighScore.innerHTML = highScore;

btnAgain.addEventListener("click", function () {
  SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  divNumber.innerHTML = SECRET_NUMBER;
  spanScore.innerHTML = score;
  guess.value = "";
  message.innerHTML = "Start guessing...";
});

btnCheck.addEventListener("click", function () {
  if (Number(guess.value) === SECRET_NUMBER) {
    message.innerHTML = "🏆 Congrats, You won!!!";
    if (score > highScore) {
      highScore = score;
      spanHighScore.innerHTML = highScore;
      document.body.style.backgroundColor = "green";
      // document.body.style.backgroundColor = "#333";
      // document.body.style.fontSize = "3rem";
    }
  } else if (Number(guess.value) > SECRET_NUMBER) {
    message.textContent = "📈 Too High";
  } else if (Number(guess.value) < SECRET_NUMBER) {
    message.textContent = "📉 Too Low";
  } else {
  }
});

function updateScore() {
  score--;
  spanScore.innerHTML = score;
}
