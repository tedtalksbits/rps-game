import {
  botCharacterImg,
  botCharacterName,
  characterImg,
  characterName,
} from "./actions/characterSelect.js";
import { updateScore } from "./actions/score.js";
import { characters } from "./characters/characters.js";

let botCharContainer = document.getElementById("botCharContainer");
let gameMessage = document.getElementById("gameMessage");
let user = document.getElementById("user");
let bot = document.getElementById("bot");
let currScore = parseInt(window.localStorage.getItem("score")) || 0;
let scoreDisplay = document.getElementById("score");

function playGame(choice) {
  const options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * options.length);
  const botChoice = options[randomIndex];
  let botChar = characters[botChoice];
  botCharacterImg.src = botChar.img;
  botCharacterName.innerText = botChar.name;
  bot.style.background = botChar.gradient;
  if (botChoice === choice) {
    console.log(`tie, you chose ${choice} and the bot chose ${botChoice}`);
    gameMessage.textContent = `tie!`;
    updateScore((currScore += 1));
  }
  if (characters[botChoice].strength === choice) {
    console.log(`you lose, you chose ${choice} and the bot chose ${botChoice}`);
    gameMessage.textContent = `you lose!`;
    updateScore((currScore -= 3));
  }
  if (characters[botChoice].weakness === choice) {
    console.log(`you win, you chose ${choice} and the bot chose ${botChoice}`);
    gameMessage.textContent = `you win!`;
    updateScore((currScore += 3));
  }
  scoreDisplay.textContent = `score: ${currScore}`;
}
scoreDisplay.textContent = `score: ${currScore}`;

// char select

let defaultCharacter =
  JSON.parse(window.localStorage.getItem("charChoice")) ?? characters.paper;

setUserCharacter();

// change character
const charSelect = document.querySelectorAll(".charSelect");
charSelect.forEach((selectedCharacter) => {
  selectedCharacter.addEventListener("click", function () {
    defaultCharacter = characters[selectedCharacter.id];
    setUserCharacter();
    window.localStorage.setItem("charChoice", JSON.stringify(defaultCharacter));
  });
});

function setUserCharacter(name) {
  characterName.textContent = defaultCharacter.name;
  characterImg.src = defaultCharacter.img;
  user.style.background = defaultCharacter.gradient;
}

// play
let playState = false;
const playBtn = document.getElementById("play");
const fadeOutLeft = document.querySelectorAll(".fadeOutLeft");
const fadeOutRight = document.querySelectorAll(".fadeOutRight");
const main = document.querySelector("main");
fadeOutLeft.forEach((ele) => console.log(ele));
playBtn.addEventListener("click", function () {
  if (playState) {
    fadeOutLeft.forEach((elem) =>
      elem.classList.remove("animate__fadeOutLeft")
    );
    fadeOutRight.forEach((elem) =>
      elem.classList.remove("animate__fadeOutRight")
    );
    playBtn.textContent = "Play";
    playState = false;
    main.classList.remove("split");
    botCharContainer.classList.add("hidden");
    gameMessage.textContent = "";
  } else {
    fadeOutLeft.forEach((elem) => elem.classList.add("animate__fadeOutLeft"));
    fadeOutRight.forEach((elem) => elem.classList.add("animate__fadeOutRight"));
    playBtn.textContent = "Restart";
    playState = true;
    main.classList.add("split");
    playGame(defaultCharacter.name);
    botCharContainer.classList.remove("hidden");
  }
});
